import { expect, Locator, test } from "@playwright/test";

test.describe('Navbar', () => {
    test('Closes the sidebar when clicking outside of it on Mobile', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 812 });
        await page.goto(process.env.SITE_URL + '/');

        const menuButton: Locator = page.getByTestId('menu-button');
        await menuButton.click();

        // Wait for the sidebar to become visible after opening
        const sidebar: Locator = page.locator('.containerSidebar');
        await expect(sidebar).toBeVisible();

        // Click on the blurred background (outside the sidebar)
        const blurredBackground: Locator = page.locator('.blurred-background');
        await blurredBackground.click({ position: { x: 50, y: 400 } });

        // Wait for the sidebar to close
        await expect(sidebar).not.toBeVisible();
    });
});
