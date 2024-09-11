import {test, expect} from '@playwright/test';

test('EliminarCarrito', async ({page}) => {

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

    //assertion
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');


    const agregar = await page.locator("#add-to-cart-sauce-labs-backpack")
    await agregar.click();
    await page.waitForTimeout(1000);

    //assertion
    const carrito = await page.locator('.shopping_cart_badge');
    await expect(carrito).toHaveText('1');


    const eliminar = await page.locator("#remove-sauce-labs-backpack")
    await eliminar.click();
    await page.waitForTimeout(1000);

    //assertion
    const carro = await page.locator('.shopping_cart_badge');
    await expect(carro).toBeHidden();

    //npx playwright test EliminarCarrito.spec.js --headed

});