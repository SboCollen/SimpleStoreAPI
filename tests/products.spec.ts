import { test, expect } from '@playwright/test';
import {validatedBaseUrl} from  '../config/api.env.js';


test.describe('GET /products (even products that are not available)', () => { 

  test('should get all products', async ({ request }) => {

    const response = await request.get(`${validatedBaseUrl}/products`);

    expect(response.status()).toBe(200);
    const products = await response.json();
    expect(products.length).toBeGreaterThan(0);
  });


  test('should return existing product by id with its properties', async ({ request }) => {

    const productID = 3486;
    const response = await request.get(`${validatedBaseUrl}/products/${productID}`);
   
    expect(response.status()).toBe(200);
    const products = await response.json();

  });


  test('should return an error for non-existent product ID', async ({ request }) => {

    const nonExistentID = 1010101100110;
    const response = await request.get(`${validatedBaseUrl}/products/${nonExistentID}`);
   
    expect(response.status()).toBe(404);
    const products = await response.json();
    expect(products).toHaveProperty('error');

  });


  test('should return an error for an invalid product ID', async ({ request }) => {

    const invalidId = 'Yoyoyo';
    const response = await request.get(`${validatedBaseUrl}/products/${invalidId}`);
   
    expect(response.status()).toBe(400);
    const products = await response.json();
    expect(products).toHaveProperty('error');

  });


});
