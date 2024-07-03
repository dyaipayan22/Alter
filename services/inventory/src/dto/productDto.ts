import * as z from 'zod';

export const CreateProductSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  stock: z.number(),
  price: z.number(),
});

export type CreateProductDto = z.infer<typeof CreateProductSchema>;
