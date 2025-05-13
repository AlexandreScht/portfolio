'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Veuillez entrer une adresse email valide'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

// faire un type generic pour recuperer le type des schemas
type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur', // validation on blur
    reValidateMode: 'onChange', // re-validate on change after blur
  });

  const onSubmit: SubmitHandler<ContactFormData> = async data => {
    try {
      console.log(data);
      // logique d'envoi...
    } catch (error) {
      console.error(error);
    }
  };

  const getInputClassName = (hasError: boolean) => {
    const base =
      'w-full px-4 py-3 rounded-lg bg-card-bg dark:bg-[#0f1c30] border text-default-text placeholder:text-muted focus:outline-none transition-all';
    const errorStyle = 'border-error-border focus:border-error focus:ring-2 focus:ring-error/20 bg-error-light/10';
    const normalStyle = 'border-border/40 focus:border-primary focus:ring-2 focus:ring-primary/20';
    return `${base} ${hasError ? errorStyle : normalStyle}`;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-default-text font-medium">
          Nom
        </label>
        <input type="text" id="name" {...register('name')} className={getInputClassName(!!errors.name)} placeholder="Votre nom" />
        {errors.name && <span className="text-error text-sm">{errors.name.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-default-text font-medium">
          Email
        </label>
        <input type="email" id="email" {...register('email')} className={getInputClassName(!!errors.email)} placeholder="votre@email.com" />
        {errors.email && <span className="text-error text-sm">{errors.email.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-default-text font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className={`${getInputClassName(!!errors.message)} resize-none pb-4`}
          placeholder="Votre message..."
        />
        {errors.message && <span className="text-error text-sm">{errors.message.message}</span>}
      </div>

      <button
        type="submit"
        disabled={!isValid || isSubmitting} // disabled until valid or submitting
        className="w-full py-3 px-6 bg-primary hover:bg-secondary text-white font-medium rounded-lg transition-colors duration-200 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
      </button>
    </form>
  );
}
