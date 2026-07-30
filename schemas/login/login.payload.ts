import * as z from "zod"; 
 
const loginPayload = z.object({ 
  username: z.string(),
  password: z.string()
});


