import * as z from "zod"; 

const addCartPayload = z.object({

    userId: z.number().positive(),
    products: z.array(
        z.object(
            {
                id: z.number().positive(),
                quantity: z.number().positive(),
            }
        )
    )
})
 


