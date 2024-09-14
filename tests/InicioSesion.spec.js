import {test, expect} from '@playwright/test';

test('InicioSesion', async ({page}) => {

    await page.goto('https://www.saucedemo.com/.');
    const username = await page.locator("#user-name");
    await page.waitForTimeout(1000);
    await username.fill("standard_user");
    await page.waitForTimeout(1000);
    const pasword = await page.locator("#password");
    await pasword.fill("secret_sauce")
    await page.waitForTimeout(1000);
    const login = await page.locator("#login-button");
    await login.click();
    await page.waitForTimeout(1000);

    //assertion
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    //npx playwright test InicioSesion.spec.js --headed



   // npx playwright test


});