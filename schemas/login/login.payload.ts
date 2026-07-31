import * as z from "zod"; 
 
const loginPayload = z.object({ 
  username: z.string(),
  password: z.string()
});

type loginPayload = z.infer<typeof loginPayload>;
