import { z } from 'zod';

export const stringValidator = z.string({ message: 'Le type attendu est un string' });
export const bodyValidator = z.string({ message: 'Le type attendu est un string' })
export const emailValidator = stringValidator.email({ message: 'Adresse e-mail invalide' });
