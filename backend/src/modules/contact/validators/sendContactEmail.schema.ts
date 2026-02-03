import { z } from 'zod';

export const sendContactEmailSchema = z.object({
  name: z.string().min(2, 'Nome inválido.'),
  email: z.string().email('Email inválido.'),
  phone: z.string().optional(),
  message: z.string().min(5, 'Mensagem muito curta.'),
});

export type SendContactEmailInput = z.infer<typeof sendContactEmailSchema>;
