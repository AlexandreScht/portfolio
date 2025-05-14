import { emailValidator } from '@/utils/zodValidates';
import { z } from 'zod';

export const contactSchema = z.object({
  fullname: z
    .string({ required_error: 'Le nom est requis', invalid_type_error: 'Le type attendu est une chaîne de caractères' })
    .min(2, { message: 'Le nom doit contenir au moins 2 caractères' }),
  email: emailValidator,
  body: z
    .string({ required_error: 'Le message est requis', invalid_type_error: 'Le type attendu est une chaîne de caractères' })
    .min(10, { message: 'Le message doit contenir au moins 10 caractères' }),
});
