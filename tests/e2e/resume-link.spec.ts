import { expect, Locator, test } from '@playwright/test';

test.describe('Resume link', () => {
    test('Downloads the resume on Mobile', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 812 });
        await page.goto(process.env.SITE_URL + '/');

        const menuButton: Locator = page.getByTestId('menu-button');
        await menuButton.click();

        // Wait for the menu to open
        await page.waitForTimeout(500);

        // Ensure the resume link is visible in the mobile menu
        const resumeLink: Locator = page.locator('a[href="/resume.pdf"]:not(.hidden)');
        await expect(resumeLink).toBeVisible();

        const [download] = await Promise.all([
            page.waitForEvent('download'),
            resumeLink.click(),
        ]);

        const suggestedFilename: string = download.suggestedFilename();
        expect(suggestedFilename).toMatch(/resume\.pdf$/);
    });

    test('Downloads the resume on Desktop', async ({ page }) => {
        await page.setViewportSize({ width: 1280, height: 800 });
        await page.goto(process.env.SITE_URL + '/');

        // Ensure the resume link is visible in the desktop view
        const resumeLink: Locator = page.locator('a[href="/resume.pdf"].md\\:block');
        await expect(resumeLink).toBeVisible();

        const [download] = await Promise.all([
            page.waitForEvent('download'),
            resumeLink.click(),
        ]);

        const suggestedFilename: string = download.suggestedFilename();
        expect(suggestedFilename).toMatch(/resume\.pdf$/);
    });
});
