import { expect, Locator, test } from "@playwright/test";

test.describe('Navbar', () => {
    test('Closes the sidebar when clicking outside of it on Mobile', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 812 });
        await page.goto(process.env.SITE_URL + '/');

        const menuButton: Locator = page.getByTestId('menu-button');
        await menuButton.click();

        // Wait for the sidebar to slide into the viewport after opening
        const sidebar: Locator = page.getByTestId('sidebar');
        await expect(sidebar).toBeInViewport();

        // Click on the blurred background (outside the sidebar)
        const blurredBackground: Locator = page.locator('.blurred-background');
        await blurredBackground.click({ position: { x: 50, y: 400 } });

        // Wait for the sidebar to slide out of the viewport after closing
        await expect(sidebar).not.toBeInViewport();
    });
});
