import {test, expect} from '@playwright/test';

test('IniSesInvalido', async ({page}) => {

    await page.goto('https://www.saucedemo.com/.');
    await page.waitForTimeout(500);
    const username = await page.locator("#user-name");
    await username.fill("standard_user");
    await page.waitForTimeout(500);
    const pasword = await page.locator("#password");
    await pasword.fill("secretsauce")
    await page.waitForTimeout(500);
    const login = await page.locator("#login-button");
    await login.click();
    await page.waitForTimeout(1000);
    const errorInSesion = await page.locator('[data-test="error"]');
    await expect(errorInSesion).toHaveText
    ('Epic sadface: Username and password do not match any user in this service');

    //npx playwright test IniSesInvalido.spec.js --headed

});