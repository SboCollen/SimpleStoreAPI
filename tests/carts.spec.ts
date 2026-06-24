import { test, expect } from '@playwright/test';
import {validatedBaseUrl} from  '../config/api.env.js';
import { error } from 'console';

//TODO: I need to add more tests for the carts endpoints for example, I need to test the POST /carts endpoint and the DELETE /carts/:id endpoint

test.describe('Store Carts.', () => {

    test('should create carts.', async ({request}) => {
        const response = await request.post(`${validatedBaseUrl}/carts`);
        expect(response.status()).toBe(201);

        const cart = await response.json();
        expect(cart.created).toBe(true); 
        expect(cart.created).toBeDefined();
        expect(cart.cartId).toBeDefined();

    });


    test('should get all the cats.', async ({request}) => {
        const response = await request.get(`${validatedBaseUrl}/carts`);
        expect(response.status()).toBe(200);

        const carts = await response.json();
        expect(carts.length).toBeGreaterThan(0);
    });

    test('should get a cart by it id.', async ({ request }) => {
        const response = await request.get(`${validatedBaseUrl}/carts/o43PqgkYGuKZg8_dPa8EY`);
        expect(response.status()).toBe(200);
      
        const cart = await response.json();
        expect(cart.items).toBeDefined();
        expect(cart.created).toBeDefined();
       
    });
    
    test('should add products on the specific cart.', async({request}) => {

        const productToAdd = {
                "productId": 1225, //use new product id
                "quantity": 4
            };

        const response = await request.post(`${validatedBaseUrl}/carts/o43PqgkYGuKZg8_dPa8EY/items`, {
            data: productToAdd        
        });

        expect(response.status()).toBe(201);

    });

    test('should add a product that is already on the cart. should get an error.', async({request}) => {
        
        const productToAdd = {
                "productId": 1225, //use new product id
                "quantity": 4
            };

        const response = await request.post(`${validatedBaseUrl}/carts/o43PqgkYGuKZg8_dPa8EY/items`, {
            data: productToAdd 
        });

        expect(response.status()).toBe(400);
        const products = await response.json();
        expect(products).toHaveProperty('error');
    });

    test('should get items in a cart.', async ({ request }) => {
        const response = await request.get(`${validatedBaseUrl}/carts/o43PqgkYGuKZg8_dPa8EY/items`);
        expect(response.status()).toBe(200);

        const carts = await response.json();
        expect(carts.length).toBeGreaterThan(0);

    });
    
    


});

