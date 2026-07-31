import * as z from "zod"; 
import { minimum } from "zod/mini";

const productResponse = z.object({
  products: z.array(
    z.object(
      {
        id: z.number(),
        title: z.string(),
        description: z.string(),
        category: z.string(),
        price: z.number().positive().multipleOf(0.01),
        discountPercentage: z.number().positive().multipleOf(0.01),
        rating: z.number().positive().multipleOf(0.01),
        stock: z.number().positive(),
        tags: z.array(z.string()),
        brand: z.string(),
        sku: z.string(),
        dimensions: z.object(
          {
            width: z.number().positive().multipleOf(0.01),
            height: z.number().positive().multipleOf(0.01),
            depth: z.number().positive().multipleOf(0.01),
          }
        ),
        warrantyInformation: z.string(),
        shippingInformation: z.string(),
        availabilityStatus: z.string(),
        reviews: z.array(
          z.object({
            rating: z.number().positive(),
            comment: z.string(),
            date: z.string(),
            reviewerName: z.string(),
            reviewerEmail: z.email()
          })
        ),
        returnPolicy: z.string(),
        minimumOrderQuantity: z.number().gte(1),
        meta: z.object(
          {
            createdAt: z.string(),
            updatedAt: z.string(),
            barcode: z.string(),
            qrCode: z.string(),
          }
        ),
        images: z.array(z.string()),
        thumbnail: z.string()     
      }
    )
  ),
})

type productResponse = z.infer<typeof productResponse>;




