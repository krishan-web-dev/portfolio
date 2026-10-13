import { mkdir, rm, stat } from "node:fs/promises";
import path from "node:path";

import { chromium, type Browser, type Page } from "playwright";
import sharp from "sharp";

import { projects as portfolioProjects } from "../data/projects";
import type { Project } from "../types/project";

type CaptureProject = Pick<Project, "name" | "slug"> & {
  url: string;
};

type Capture = {
  filename: "cover.webp" | "desktop.webp" | "mobile.webp";
  width: number;
  height: number;
  quality: number;
  fullPage: boolean;
};

function hasCaptureUrl(project: Project): project is Project & { url: string } {
  return typeof project.url === "string" && project.url.trim().length > 0;
}

const projects: CaptureProject[] = portfolioProjects
  .filter(hasCaptureUrl)
  .map(({ name, slug, url }) => ({ name, slug, url }));

const captures: Capture[] = [
  {
    filename: "cover.webp",
    width: 1440,
    height: 1000,
    quality: 82,
    fullPage: false,
  },
  {
    filename: "desktop.webp",
    width: 1440,
    height: 1000,
    quality: 80,
    fullPage: true,
  },
  {
    filename: "mobile.webp",
    width: 390,
    height: 844,
    quality: 82,
    fullPage: true,
  },
];

const outputRoot = path.resolve(process.cwd(), "public", "projects");
const navigationTimeout = 60_000;
const networkIdleTimeout = 20_000;
const renderDelay = 1_500;
const maximumWebpDimension = 15_000;

const cookieButtonSelectors = [
  "#onetrust-accept-btn-handler",
  "#onetrust-reject-all-handler",
  "#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll",
  "#CybotCookiebotDialogBodyButtonDecline",
  ".cky-btn-accept",
  ".cky-btn-reject",
  "button[data-cky-tag='accept-button']",
  "button[data-cky-tag='reject-button']",
  "button#accept-cookies",
  "button#reject-cookies",
];

const cookieButtonLabels = [
  /^accept all(?: cookies)?$/i,
  /^accept(?: cookies)?$/i,
  /^allow all$/i,
  /^agree$/i,
  /^got it$/i,
  /^reject all(?: cookies)?$/i,
  /^decline(?: all)?$/i,
];

const popupCloseLabels = [
  /^close$/i,
  /^close (?:dialog|modal|popup)$/i,
  /^dismiss$/i,
  /^no thanks$/i,
  /^not now$/i,
];

const loaderSelectors = [
  "#preloader",
  ".preloader",
  ".page-loader",
  ".page-preloader",
  ".loading-screen",
  ".site-loader",
  ".loader-wrapper",
  "[data-loader]",
];

async function clickFirstVisible(page: Page, selectors: string[]) {
  for (const selector of selectors) {
    const locator = page.locator(selector).first();
    if (await locator.isVisible().catch(() => false)) {
      await locator.click({ timeout: 2_000 }).catch(() => undefined);
      return true;
    }
  }

  return false;
}

async function dismissObstructions(page: Page) {
  if (!(await clickFirstVisible(page, cookieButtonSelectors))) {
    for (const label of cookieButtonLabels) {
      const button = page.getByRole("button", { name: label }).first();
      if (await button.isVisible().catch(() => false)) {
        await button.click({ timeout: 2_000 }).catch(() => undefined);
        break;
      }
    }
  }

  const dialogs = page.locator('[role="dialog"], [aria-modal="true"]');
  for (let index = 0; index < (await dialogs.count()); index += 1) {
    const dialog = dialogs.nth(index);
    if (!(await dialog.isVisible().catch(() => false))) {
      continue;
    }

    let closed = false;
    for (const label of popupCloseLabels) {
      const closeButton = dialog.getByRole("button", { name: label }).first();
      if (await closeButton.isVisible().catch(() => false)) {
        await closeButton.click({ timeout: 2_000 }).catch(() => undefined);
        closed = true;
        break;
      }
    }

    if (!closed) {
      await clickFirstVisible(dialog.page(), [
        '[role="dialog"] button[aria-label*="close" i]',
        '[aria-modal="true"] button[aria-label*="close" i]',
      ]);
    }
  }

  await page.waitForTimeout(500);
}

async function dismissStuckLoaders(page: Page) {
  const viewport = page.viewportSize();
  if (!viewport) {
    return;
  }

  for (const selector of loaderSelectors) {
    const candidates = page.locator(selector);
    for (let index = 0; index < (await candidates.count()); index += 1) {
      const candidate = candidates.nth(index);
      if (!(await candidate.isVisible().catch(() => false))) {
        continue;
      }

      const box = await candidate.boundingBox().catch(() => null);
      const isFullScreen =
        box !== null &&
        box.width >= viewport.width * 0.8 &&
        box.height >= viewport.height * 0.8;

      if (isFullScreen) {
        await candidate
          .evaluate((element) => element.remove())
          .catch(() => undefined);
        console.warn(`  ! removed stuck full-screen loader (${selector})`);
      }
    }
  }
}

async function waitForPage(page: Page, url: string) {
  await page.goto(url, {
    waitUntil: "domcontentloaded",
    timeout: navigationTimeout,
  });

  await page
    .waitForLoadState("networkidle", { timeout: networkIdleTimeout })
    .catch(() => {
      console.warn("  ! networkidle timed out; continuing after render delay");
    });
  await page.waitForTimeout(renderDelay);
  await dismissObstructions(page);
  await dismissStuckLoaders(page);
}

async function revealLazyContent(page: Page) {
  await page.evaluate(async () => {
    const step = Math.max(window.innerHeight * 0.8, 500);
    const maximumScroll = Math.min(document.documentElement.scrollHeight, 30_000);

    for (let position = 0; position < maximumScroll; position += step) {
      window.scrollTo({ top: position, behavior: "auto" });
      await new Promise((resolve) => window.setTimeout(resolve, 120));
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  });

  await page.waitForTimeout(renderDelay);
}

async function settleFonts(page: Page) {
  const fontsLoaded = await page
    .waitForFunction(() => document.fonts.status === "loaded", undefined, {
      timeout: 5_000,
    })
    .then(() => true)
    .catch(() => false);

  if (!fontsLoaded) {
    await page.evaluate(() => document.fonts.clear());
    console.warn("  ! unresolved web fonts cleared before screenshot");
  }
}

async function saveWebp(
  page: Page,
  outputDirectory: string,
  capture: Capture,
) {
  const outputPath = path.join(outputDirectory, capture.filename);
  const temporaryPath = path.join(
    outputDirectory,
    `.${capture.filename.replace(".webp", ".png")}`,
  );

  try {
    await settleFonts(page);

    const pageHeight = capture.fullPage
      ? await page.evaluate(() =>
          Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
          ),
        )
      : capture.height;

    if (capture.fullPage && pageHeight > maximumWebpDimension) {
      console.warn(
        `  ! page height ${pageHeight}px exceeds WebP limits; capturing the first ${maximumWebpDimension}px`,
      );
      await page.screenshot({
        path: temporaryPath,
        type: "png",
        timeout: 60_000,
        clip: {
          x: 0,
          y: 0,
          width: capture.width,
          height: maximumWebpDimension,
        },
      });
    } else {
      await page.screenshot({
        path: temporaryPath,
        type: "png",
        timeout: 60_000,
        fullPage: capture.fullPage,
      });
    }

    await sharp(temporaryPath, { limitInputPixels: false })
      .resize({
        width: capture.width,
        withoutEnlargement: true,
        fit: "inside",
      })
      .webp({ quality: capture.quality, smartSubsample: true, effort: 5 })
      .toFile(outputPath);
  } finally {
    await rm(temporaryPath, { force: true });
  }

  return stat(outputPath);
}

async function captureProject(browser: Browser, project: CaptureProject) {
  const outputDirectory = path.join(outputRoot, project.slug);
  await mkdir(outputDirectory, { recursive: true });

  console.log(`\nCapturing ${project.name}...`);

  for (const capture of captures) {
    const context = await browser.newContext({
      viewport: { width: capture.width, height: capture.height },
      deviceScaleFactor: 1,
      reducedMotion: "reduce",
    });

    try {
      const page = await context.newPage();
      await waitForPage(page, project.url);

      if (capture.fullPage) {
        await revealLazyContent(page);
        await dismissObstructions(page);
      }

      const file = await saveWebp(page, outputDirectory, capture);
      console.log(`  ✓ ${capture.filename} (${formatBytes(file.size)})`);
    } finally {
      await context.close();
    }
  }
}

async function launchBrowser() {
  try {
    return await chromium.launch({ headless: true });
  } catch (error) {
    if (!errorMessage(error).includes("Executable doesn't exist")) {
      throw error;
    }

    console.warn(
      "Bundled Chromium is not installed; using the local Chrome Chromium runtime.",
    );
    return chromium.launch({ channel: "chrome", headless: true });
  }
}

function formatBytes(bytes: number) {
  if (bytes < 1_024) {
    return `${bytes} B`;
  }

  if (bytes < 1_048_576) {
    return `${(bytes / 1_024).toFixed(1)} KB`;
  }

  return `${(bytes / 1_048_576).toFixed(2)} MB`;
}

async function main() {
  await mkdir(outputRoot, { recursive: true });

  const requestedSlugs = process.argv.slice(2);
  const selectedProjects =
    requestedSlugs.length === 0
      ? projects
      : projects.filter((project) => requestedSlugs.includes(project.slug));

  if (selectedProjects.length === 0) {
    throw new Error(
      `No matching projects. Available slugs: ${projects
        .map((project) => project.slug)
        .join(", ")}`,
    );
  }

  const failures: Array<{ project: CaptureProject; error: unknown }> = [];
  const browser = await launchBrowser();

  try {
    for (const project of selectedProjects) {
      try {
        await captureProject(browser, project);
      } catch (error) {
        failures.push({ project, error });
        console.error(`  ✗ ${project.name}: ${errorMessage(error)}`);
      }
    }
  } finally {
    await browser.close();
  }

  console.log("\nCapture summary");
  console.log(`  Successful: ${selectedProjects.length - failures.length}`);
  console.log(`  Failed: ${failures.length}`);

  if (failures.length > 0) {
    for (const { project, error } of failures) {
      console.error(`  - ${project.name}: ${errorMessage(error)}`);
    }
    process.exitCode = 1;
  }
}

function errorMessage(error: unknown) {
  return error instanceof Error ? error.message : String(error);
}

main().catch((error) => {
  console.error(`Capture setup failed: ${errorMessage(error)}`);
  process.exitCode = 1;
});
