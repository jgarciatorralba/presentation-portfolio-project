import { expect, test } from '@playwright/test';

test.describe('Home Page', () => {
  test('Shows all sections', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    // Expect a title "to contain" a substring.
    // await expect(page).toHaveTitle(/Playwright/);

    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Hey there!');
  });

  test('Shows pre-fetched projects', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    // Expect a title "to contain" a substring.
    // await expect(page).toHaveTitle(/Playwright/);

    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Hey there!');
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

  test('Hides "Projects" section when there are no projects', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Hey there!');
  });
});
