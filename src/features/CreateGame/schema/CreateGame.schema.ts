import { z } from "zod";

export const CreateGameSchema = z.object({
  name: z.string().min(3).max(7),
});
