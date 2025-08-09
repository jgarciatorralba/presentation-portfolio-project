import { expect, Locator, test } from "next/experimental/testmode/playwright";
import { navigation } from '../../app/_lib/constants';
import { sampleProject } from "../sampleProject";

test.describe('Home Page', () => {
  test.beforeEach(async ({ next }) => {
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

  test('Shows all sections', async ({ page }) => {
    await page.goto('http://localhost:3000/');

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

    await page.goto('http://localhost:3000/');

    const heading: Locator = page.getByRole('heading', { name: 'Projects' });
    await expect(heading).not.toBeVisible();
  });

  test('Shows pre-fetched projects', async ({ page }) => {
    await page.goto('http://localhost:3000/');

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

    await page.goto('http://localhost:3000/');

    const fetchButton: Locator = page.getByRole('button', { name: 'Show more' });
    await expect(fetchButton).toBeVisible();
    await expect(fetchButton).not.toBeDisabled();

    await fetchButton.click();

    const projects: Locator = page.locator('p.text-lg.font-bold');
    await expect(projects).toHaveCount(2);
    await expect(projects.nth(0)).toHaveText(sampleProject.name);
    await expect(projects.nth(1)).toHaveText('Test Playwright');
  });

  test('Shows toast notification when fetch fails', async ({ page }) => {
    await page.route(/projects\?pageSize=3/, async route => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
      });
    });

    await page.goto('http://localhost:3000/');

    const fetchButton: Locator = page.getByRole('button', { name: 'Show more' });
    await expect(fetchButton).toBeVisible();
    await expect(fetchButton).not.toBeDisabled();

    await fetchButton.click();

    const toast: Locator = page.getByRole('alert').filter({ hasText: 'Response status: Internal Server Error' });
    await expect(toast).toBeVisible();
  });
});
