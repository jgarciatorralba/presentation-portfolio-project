import { expect, Locator, test } from '@playwright/test';
import { existsSync, unlinkSync } from "fs";

test.describe('Not Found Page', () => {
    test.beforeAll(() => {
        const logFilePath: string = process.env.LOG_FILE_PATH || '';
        if (existsSync(logFilePath)) {
            unlinkSync(logFilePath);
        }
    });

    test('Shows error page when navigating to invalid url', async ({ page }) => {
        await page.goto(process.env.SITE_URL + '/any-non-existing-page');

        const heading: Locator = page.getByRole('heading', { level: 1 });
        await expect(heading).toBeVisible();
        await expect(heading).toHaveText('Not Found');

        const paragraph: Locator = page.getByText('Nothing to see here... Shall we try again?');
        await expect(paragraph).toBeVisible();

        const link: Locator = page.getByRole('link', { name: 'home' });
        await expect(link).toBeVisible();
        await expect(link).toHaveAttribute('href', '/');

        const image: Locator = page.getByRole('img', { name: 'Not Found' });
        await expect(image).toBeVisible();
        await expect(image).toHaveAttribute('src', '/not-found.svg');
    });
});
