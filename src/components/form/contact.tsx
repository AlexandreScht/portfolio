'use client';

import { useDevice } from '@/hooks/useDevice';
import { contactSchema } from '@/validators/contact';
import { Button, cn } from '@heroui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import { type z } from 'zod';

export default function ContactForm() {
  const deviceType = useDevice();
  type ContactFormData = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const handleSendEmail = useCallback(async (data: ContactFormData) => {
    const res = await fetch('/portfolio/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res?.ok) throw new Error();
  }, []);

  const onSubmit: SubmitHandler<ContactFormData> = useCallback(
    async data => {
      try {
        await handleSendEmail(data);
        Toastify({
          text: '✓ Mail envoyé avec succès',
          duration: 3000,
          gravity: 'bottom',
          position: deviceType === 'mobile' ? 'center' : 'right',
          close: false,
          style: {
            background: 'linear-gradient(135deg, var(--color-success) 0%, var(--color-success-border) 100%)',
            color: '#ffffff',
            padding: deviceType === 'mobile' ? '1rem' : '1rem 1.5rem',
            borderRadius: deviceType === 'mobile' ? '0' : '0.5rem',
            fontSize: '0.9rem',
            fontWeight: '500',
            border: '1px solid var(--color-success-border)',
            boxShadow: '0 4px 12px var(--color-shadow)',
            display: 'flex',
            alignItems: 'center',
            transition: 'all 0.2s ease-in-out',
            width: deviceType === 'mobile' ? '200%' : 'auto',
            justifyContent: deviceType === 'mobile' ? 'center' : 'flex-start',
          },
        }).showToast();
        reset();
      } catch (error) {
        console.error(error);
        Toastify({
          text: "Erreur lors de l'envoi du mail",
          duration: 3000,
          gravity: 'bottom',
          position: deviceType === 'mobile' ? 'center' : 'right',
          close: false,
          style: {
            background: 'linear-gradient(135deg, var(--color-error-toast) 0%, var(--color-error-border) 100%)',
            color: '#fff',
            padding: deviceType === 'mobile' ? '1rem' : '1rem 1.5rem',
            borderRadius: deviceType === 'mobile' ? '0' : '0.5rem',
            fontSize: '0.9rem',
            fontWeight: '500',
            border: '1px solid var(--color-error-border)',
            boxShadow: '0 3px 6px var(--color-shadow)',
            display: 'flex',
            alignItems: 'center',
            transition: 'all 0.2s ease-in-out',
            width: deviceType === 'mobile' ? '200%' : 'auto',
            justifyContent: deviceType === 'mobile' ? 'center' : 'flex-start',
          },
        }).showToast();
      }
    },
    [deviceType, handleSendEmail, reset],
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div className="flex flex-col gap-2">
          <label htmlFor="fullname" className="text-sm font-medium text-default-text">
            Nom
          </label>
          <input
            {...register('fullname')}
            type="text"
            id="fullname"
            className={cn(
              'w-full px-4 py-2 rounded-lg bg-card-bg border border-border/30 focus:border-primary focus:outline-none transition-colors duration-200',
              errors.fullname && 'border-danger',
            )}
            placeholder="Votre nom"
          />
          {errors.fullname && <span className="text-danger text-sm">{errors.fullname.message}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-default-text">
            Email
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className={cn(
              'w-full px-4 py-2 rounded-lg bg-card-bg border border-border/30 focus:border-primary focus:outline-none transition-colors duration-200',
              errors.email && 'border-danger',
            )}
            placeholder="Votre email"
          />
          {errors.email && <span className="text-danger text-sm">{errors.email.message}</span>}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="body" className="text-sm font-medium text-default-text">
          Message
        </label>
        <textarea
          {...register('body')}
          id="body"
          rows={6}
          className={cn(
            'w-full px-4 py-2 rounded-lg bg-card-bg border border-border/30 focus:border-primary focus:outline-none transition-colors duration-200 resize-none',
            errors.body && 'border-danger',
          )}
          placeholder="Votre message"
        />
        {errors.body && <span className="text-danger text-sm">{errors.body.message}</span>}
      </div>

      <Button
        type="submit"
        className="w-full bg-primary mt-2 text-white hover:bg-secondary transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"
        isLoading={isSubmitting}
        disabled={!isValid}
      >
        Envoyer
      </Button>
    </form>
  );
}
