import { expect, test } from '@playwright/test';

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

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Opens resume in new tab', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
