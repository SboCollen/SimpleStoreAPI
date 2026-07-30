import * as z from "zod";

const updateCartPayload = z.object(
    {
        merge: z.boolean(),
        products: z.array(
            z.object(
                {
                    id: z.number().positive(),
                    quantity: z.number().positive(),
                }
            )
        )
    }
)
