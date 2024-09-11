import {test, expect} from '@playwright/test';

test('Checkout', async ({page}) => {
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


    const agregar = await page.locator("#add-to-cart-sauce-labs-backpack");
    await agregar.click();
    await page.waitForTimeout(1000);

    //assertion
    const carro = await page.locator('.shopping_cart_badge');
    await expect(carro).toHaveText('1');

    const carrito = await page.locator("#shopping_cart_container > a");
    await carrito.click();
    await page.waitForTimeout(1000);
    const checkout = await page.locator("#checkout");
    await checkout.click();
    await page.waitForTimeout(1000);
    const nombre = await page.locator("#first-name");
    await nombre.fill("jafeth");
    await page.waitForTimeout(1000);
    const apellido = await page.locator("#last-name");
    await apellido.fill("Meneses");
    await page.waitForTimeout(1000);
    const codPost = await page.locator("#postal-code");
    await codPost.fill("7462");
    await page.waitForTimeout(1000);
    const botContinuar = await page.locator("#continue");
    await botContinuar.click();
    await page.waitForTimeout(1000);

    //Assertion
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

    const final = await page.locator("#finish")
    await final.click();
    await page.waitForTimeout(1000);

    //Assertion
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');

    const productos = await page.locator("#back-to-products");
    await productos.click();
    await page.waitForTimeout(1000);

    //Assertion
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    //npx playwright test Checkout.spec.js --headed


});