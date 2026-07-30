import * as z from "zod"; 


const cartResponse = z.object({
    id: z.number().positive(),
    products: z.array(
        z.object(
            {
                id: z.number().positive(),
                title: z.string(),
                price: z.number().positive().multipleOf(0.01),
                quantity: z.number().positive(),
                total: z.number().positive().multipleOf(0.01),
                discountPercentage: z.number().positive(),
                discountedPrice: z.number().positive().multipleOf(0.01),
                thumbnail: z.string()
            }
        )
    ),
    total: z.number().positive().multipleOf(0.01),
    discountedTotal: z.number().positive().multipleOf(0.01),
    userId: z.number().positive(),
    totalProducts: z.number().positive(),
    totalQuantity: z.number().positive()
})
