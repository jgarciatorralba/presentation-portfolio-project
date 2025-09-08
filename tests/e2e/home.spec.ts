import { navigation } from "@lib/constants";
import { sampleProject } from "@tests/sampleProject";
import { existsSync, unlinkSync } from "fs";
import { expect, Locator, test } from "next/experimental/testmode/playwright";

test.describe('Home Page', () => {
  test.beforeAll(() => {
    const logFilePath: string = process.env.LOG_FILE_PATH || '';
    if (existsSync(logFilePath)) {
      unlinkSync(logFilePath);
    }
  });

  test.beforeEach(({ next }) => {
    next.onFetch((request) => {
      if (request.url.includes('projects?pageSize=6')) {
        return new Response(JSON.stringify({
          projects: [sampleProject],
          count: 1
        }), {
          headers: { 'Next': '1' }
        });
      }

      return "abort";
    });
  });

  test('Contains the correct metadata', async ({ page }) => {
    await page.goto(process.env.SITE_URL + '/');

    await expect(page).toHaveTitle('Jorge García');

    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toBe('Jorge is a software engineer who enjoys building stuff for the web.');

    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toBe(process.env.SITE_URL);
  });

  test('Shows all sections', async ({ page }) => {
    await page.goto(process.env.SITE_URL + '/');

    for (const item of navigation.items) {
      const heading: Locator = page.getByRole('heading', { name: item.name });
      await expect(heading).toBeVisible();
      await expect(heading).toHaveText(item.name);
    }
  });

  test('Hides "Projects" section when there are no projects', async ({ page, next }) => {
    next.onFetch((request) => {
      if (request.url.includes('projects?pageSize=6')) {
        return new Response('Internal Server Error', { status: 500 });
      }

      return "abort";
    });

    await page.goto(process.env.SITE_URL + '/');

    const heading: Locator = page.getByRole('heading', { name: 'Projects' });
    await expect(heading).not.toBeVisible();
  });

  test('Shows pre-fetched projects', async ({ page }) => {
    await page.goto(process.env.SITE_URL + '/');

    const project: Locator = page.locator('p.text-lg.font-bold', { hasText: sampleProject.name });
    await expect(project).toBeVisible();
  });

  test('Shows more projects when clicking "Show more" button', async ({ page }) => {
    await page.route(/projects\?pageSize=3/, async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          projects: [{
            ...sampleProject,
            id: 11223344,
            name: 'Test Playwright'
          }],
          count: 1
        }),
      });
    });

    await page.goto(process.env.SITE_URL + '/');

    const fetchButton: Locator = page.getByRole('button', { name: 'Show more' });
    const projects: Locator = page.locator('p.text-lg.font-bold');

    await expect(fetchButton).toBeVisible();
    await expect(fetchButton).not.toBeDisabled();

    await expect(projects).toHaveCount(1);
    await expect(projects.nth(0)).toHaveText(sampleProject.name);

    await fetchButton.click();

    await expect(projects).toHaveCount(2);
    await expect(projects.nth(1)).toHaveText('Test Playwright');
  });

  test('Shows toast notification when fetch fails', async ({ page }) => {
    await page.route(/projects\?pageSize=3/, async route => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
      });
    });

    await page.goto(process.env.SITE_URL + '/');

    const fetchButton: Locator = page.getByRole('button', { name: 'Show more' });
    await expect(fetchButton).toBeVisible();
    await expect(fetchButton).not.toBeDisabled();

    await fetchButton.click();

    const toast: Locator = page.getByRole('alert').filter({ hasText: 'Response status: Internal Server Error' });
    await expect(toast).toBeVisible();
  });
});
