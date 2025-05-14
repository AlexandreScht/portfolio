import { z } from 'zod';

export const stringValidator = z.string();
export const emailValidator = stringValidator.email({ message: 'Adresse e-mail invalide' });
