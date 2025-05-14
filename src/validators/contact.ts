import { bodyValidator, emailValidator, stringValidator } from '@/utils/zodValidates';
import { z } from 'zod';

export const contactSchema = z.object({
  email: emailValidator,
  body: bodyValidator,
  fullname: stringValidator,
});
