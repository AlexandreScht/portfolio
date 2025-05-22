'use server';

import contactTemplate from '@/template/contactTemplate';
import { type contactSchema } from '@/validators/contact';
import nodemailer from 'nodemailer';
import { type z } from 'zod';

export async function sendEmail({ body, email, fullname }: z.infer<typeof contactSchema>) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const html = contactTemplate.replace('{{name}}', fullname).replace('{{body}}', body).replace('{{email}}', email);

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: `Portfolio - Nouveau message de ${fullname}`,
    html,
  };

  await transporter.sendMail(mailOptions);
}
