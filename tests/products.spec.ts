import { test, expect } from '@playwright/test';
import '../config/api.env.js'

test('should have products', async ({ request }) => {
  // Implementation for testing product availability
  const baseUrl = process.env.BaseUrl;
  if (!baseUrl) throw new Error('BaseUrl is not defined');

  const response = await request.get(baseUrl + '/products');
  expect(response.status()).toBe(200);
  const products = await response.json();
  expect(products.length).toBeGreaterThan(0);

});


