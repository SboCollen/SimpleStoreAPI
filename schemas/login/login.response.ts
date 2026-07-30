import * as z from "zod"; 

const loginResponse = z.object(
    {
        accessToken: z.string(),
        refreshToken: z.string(),
        id: z.number().positive(),
        username: z.string(),
        email: z.email(),
        firstName: z.string(),
        lastName: z.string(),
        gender: z.string(),
        image: z.string(),
    }
)
