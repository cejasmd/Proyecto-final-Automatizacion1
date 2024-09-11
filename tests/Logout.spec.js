import {test, expect} from '@playwright/test';

test('Logout', async ({page}) => {

    await page.goto('https://www.saucedemo.com/.');
    await page.waitForTimeout(1000);
    const username = await page.locator("#user-name");
    await username.fill("standard_user");
    await page.waitForTimeout(1000);
    const pasword = await page.locator("#password");
    await pasword.fill("secret_sauce")
    await page.waitForTimeout(1000);
    const login = await page.locator("#login-button");
    await login.click();
    await page.waitForTimeout(1000);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    const menu = await page.locator("#react-burger-menu-btn");
    await menu.click();
    await page.waitForTimeout(1000);
    const logout = await page.locator("#logout_sidebar_link");
    await logout.click();
    await page.waitForTimeout(1000);

    //assertion
    await expect(page).toHaveURL('https://www.saucedemo.com/');

    //npx playwright test Logout.spec.js --headed
});