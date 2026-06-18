import { test, expect } from '@playwright/test';
import {validatedBaseUrl} from  '../config/api.env.js';


test.describe('GET /products (even products that are not available)', () => { 

  test('should have products', async ({ request }) => {

    const response = await request.get(`${validatedBaseUrl}/products`);

    expect(response.status()).toBe(200);
    const products = await response.json();
    expect(products.length).toBeGreaterThan(0);

  });


  test('should GET all the products that are not available', async ({ request }) => {

    //TODO: I need to fix this code, 
    //and why is filter() is so abstracted like this
    //const response = await request.get(`${validatedBaseUrl}/products?inStock=false`);
    const response = await request.get(`${validatedBaseUrl}/products`);

    expect(response.status()).toBe(200);
    const products = await response.json();
    const outOfStockProducts = products.filter((product: { inStock: boolean }) => !product.inStock);

    if(products.length === 0){
      throw new Error('All products are in stock, no products are out of stock');
    }

  });

});
