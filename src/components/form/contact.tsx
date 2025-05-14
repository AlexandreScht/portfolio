'use client';

import { type Forms } from '@/interfaces/forms';
import { contactSchema } from '@/validators/contact';
import emailjs from '@emailjs/browser';
import { Button, cn } from '@heroui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import { type z } from 'zod';

export default function ContactForm({ serviceId, templateId, publicKey }: Forms.Contact) {
  type ContactFormData = z.infer<typeof contactSchema>;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onHandleSubmit: SubmitHandler<ContactFormData> = useCallback(
    async form => {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          { ...form, message: form.body },
          {
            publicKey: publicKey,
          },
        );
        reset();
        Toastify({
          text: '✓ Mail envoyé avec succès',
          duration: 3000,
          gravity: 'bottom',
          position: 'right',
          close: false,
          style: {
            background: 'linear-gradient(135deg, var(--color-success) 0%, var(--color-success-border) 100%)',
            color: '#ffffff',
            padding: '1rem 1.5rem',
            borderRadius: '0.5rem',
            fontSize: '0.9rem',
            fontWeight: '500',
            border: '1px solid var(--color-success-border)',
            boxShadow: '0 4px 12px var(--color-shadow)',
            display: 'flex',
            alignItems: 'center',
            transition: 'all 0.2s ease-in-out',
          },
        }).showToast();
      } catch (error) {
        Toastify({
          text: "Erreur lors de l'envoi du mail",
          duration: 3000,
          gravity: 'bottom',
          position: 'right',
          close: false,
          style: {
            background: 'linear-gradient(135deg, var(--color-error-toast) 0%, var(--color-error-border) 100%)',
            color: '#fff',
            padding: '1rem 1.5rem',
            borderRadius: '0.5rem',
            fontSize: '0.9rem',
            fontWeight: '500',
            border: '1px solid var(--color-error-border)',
            boxShadow: '0 3px 6px var(--color-shadow)',
            display: 'flex',
            alignItems: 'center',
            transition: 'all 0.2s ease-in-out',
          },
        }).showToast();
      }
    },
    [reset],
  );

  const InputClassName = useCallback((hasError: boolean) => {
    return cn(
      'w-full px-4 py-3 rounded-lg bg-card-bg dark:bg-[#0f1c30] border text-default-text placeholder:text-muted focus:outline-none transition-all',
      hasError
        ? 'border-error-border focus:border-error focus:ring-2 focus:ring-error/20'
        : 'border-border/40 focus:border-primary focus:ring-2 focus:ring-primary/20',
    );
  }, []);

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)} className="flex flex-col gap-6" noValidate>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-default-text font-medium">
          Nom
        </label>
        <input type="text" id="name" {...register('fullname')} className={InputClassName(!!errors.fullname)} placeholder="Votre nom" />
        {errors.fullname && <span className="text-error text-sm">{errors.fullname.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-default-text font-medium">
          Email
        </label>
        <input type="email" id="email" {...register('email')} className={InputClassName(!!errors.email)} placeholder="votre@email.com" />
        {errors.email && <span className="text-error text-sm">{errors.email.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-default-text font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('body')}
          className={`${InputClassName(!!errors.body)} resize-none pb-4`}
          placeholder="Votre message..."
        />
        {errors.body && <span className="text-error text-sm">{errors.body.message}</span>}
      </div>
      <Button
        type="submit"
        disabled={!isValid}
        isLoading={isSubmitting}
        className="w-full py-3 h-fit px-6 bg-primary hover:bg-secondary text-white font-medium rounded-lg mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Envoyer
      </Button>
    </form>
  );
}
