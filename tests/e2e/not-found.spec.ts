import { expect, test } from '@playwright/test';

test('Shows not found error page', async ({ page }) => {
    await page.goto('http://localhost:3000/any-non-existing-page');

    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Not Found');

    const paragraph = page.getByText('Nothing to see here... Shall we try again?');
    await expect(paragraph).toBeVisible();

    const link = page.getByRole('link', { name: 'home' });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', '/');

    const image = page.getByRole('img', { name: 'Not Found' });
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute('src', '/not-found.svg');
});
