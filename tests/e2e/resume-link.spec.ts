import { expect, Locator, test } from "@playwright/test";
import { existsSync, unlinkSync } from "fs";

test.describe('Resume link', () => {
    test.beforeAll(() => {
        const logFilePath: string = process.env.LOG_FILE_PATH || '';
        if (existsSync(logFilePath)) {
            unlinkSync(logFilePath);
        }
    });

    test('Opens the resume page on Mobile', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 812 });
        await page.goto(process.env.SITE_URL + '/');

        const menuButton: Locator = page.getByTestId('menu-button');
        await menuButton.click();

        // Wait for the menu to open
        await page.waitForTimeout(500);

        // Ensure the resume link is visible in the mobile menu
        const resumeLink: Locator = page.locator('#mobile-menu a[href="/resume"]');
        await expect(resumeLink).toBeVisible();
        await resumeLink.click();
        await expect(page).toHaveURL(/\/resume$/);
        await expect(page.getByRole('heading', { name: 'Jorge García Torralba' })).toBeVisible();
    });

    test('Opens the resume page on Desktop', async ({ page }) => {
        await page.setViewportSize({ width: 1280, height: 800 });
        await page.goto(process.env.SITE_URL + '/');

        // Ensure the resume link is visible in the desktop view
        const resumeLink: Locator = page.locator('a[href="/resume"]');
        await expect(resumeLink).toBeVisible();
        await resumeLink.click();
        await expect(page).toHaveURL(/\/resume$/);
        await expect(page.getByRole('link', { name: 'Download resume PDF' })).toHaveAttribute('href', '/resume.pdf');
    });
});
