'use server';

import { type contactSchema } from '@/validators/contact';
import { readFileSync } from 'fs';
import nodemailer from 'nodemailer';
import { join } from 'path';
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

  const filePath = join(process.cwd(), 'public', 'template', 'contact.html');
  const template = readFileSync(filePath, 'utf-8');

  const html = template.replace('{{name}}', fullname).replace('{{body}}', body).replace('{{email}}', email);

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: `Portfolio - Nouveau message de ${fullname}`,
    html,
  };

  await transporter.sendMail(mailOptions);
}
