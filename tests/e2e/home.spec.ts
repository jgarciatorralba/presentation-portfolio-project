import { expect, test } from "next/experimental/testmode/playwright";
import { navigation } from '../../app/_lib/constants';
import { sampleProject } from "../sampleProject";

test.describe('Home Page', () => {
  test.beforeEach(async ({ next }) => {
    next.onFetch((request) => {
      if (request.url.includes('projects?pageSize=6')) {
        return new Response(JSON.stringify({
          projects: [sampleProject],
          count: 1
        }));
      }

      return "abort";
    });
  });

  test('Shows all sections', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    for (const item of navigation.items) {
      const heading = page.getByRole('heading', { name: item.name });
      await expect(heading).toBeVisible();
      await expect(heading).toHaveText(item.name);
    }

  });

  test('Shows pre-fetched projects', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    const project = page.locator('p.text-lg.font-bold', { hasText: sampleProject.name });
    await expect(project).toBeVisible();
  });

  test('Shows more projects when clicking "Show more" button', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    // Expect a title "to contain" a substring.
    // await expect(page).toHaveTitle(/Playwright/);

    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Hey there!');
  });

  test('Shows toast notification when fetch fails', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    // Expect a title "to contain" a substring.
    // await expect(page).toHaveTitle(/Playwright/);

    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Hey there!');
  });

  test('Hides "Projects" section when there are no projects', async ({ page, next }) => {
    next.onFetch((request) => {
      if (request.url.includes('projects?pageSize=6')) {
        return new Response('Internal Server Error', { status: 500 });
      }

      return "abort";
    });

    await page.goto('http://localhost:3000/');

    const heading = page.getByRole('heading', { name: 'Projects' });
    await expect(heading).not.toBeVisible();
  });
});
