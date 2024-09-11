import {test, expect} from '@playwright/test';

test('AgregarCarrito', async ({page}) => {

    await page.goto('https://www.saucedemo.com/.');
    await page.waitForTimeout(500);
    const username = await page.locator("#user-name");
    await username.fill("standard_user");
    await page.waitForTimeout(500);
    const pasword = await page.locator("#password");
    await pasword.fill("secret_sauce")
    await page.waitForTimeout(500);
    const login = await page.locator("#login-button");
    await login.click();
    await page.waitForTimeout(1000);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    const agregar = await page.locator("#add-to-cart-sauce-labs-backpack")
    await agregar.click();
    await page.waitForTimeout(1000);
    const carro = await page.locator('.shopping_cart_badge');
    await expect(carro).toHaveText('1');




    //npx playwright test AgregarCarrito.spec.js --headed

});