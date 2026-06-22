import { test, expect } from '@playwright/test';
import {validatedBaseUrl} from  '../config/api.env.js';
import { error } from 'console';

//TODO: I need to add more tests for the carts endpoints for example, I need to test the POST /carts endpoint and the DELETE /carts/:id endpoint

test.describe('Store Carts', () => {

    test('should create carts', async ({request}) => {
        const response = await request.post(`${validatedBaseUrl}/carts`);
        expect(response.status()).toBe(201);
        const cart = await response.json();
        expect(cart.created).toBe(true); 
        expect(cart.created).toBeDefined();
        expect(cart.cartId).toBeDefined();

    });



    test('should have carts', async ({ request }) => {

        const response = await request.get(`${validatedBaseUrl}/carts/o43PqgkYGuKZg8_dPa8EY`);
        expect(response.status()).toBe(200);
      
        const cart = await response.json();
        expect(cart.items).toBeDefined();
        expect(cart.created).toBeDefined();
       
      });
    




    }



    
);

