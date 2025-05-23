export const runtime = 'nodejs';
import { type contactSchema } from '@/validators/contact';
import fs from 'fs/promises';
import { NextResponse } from 'next/server';
import { createTransport } from 'nodemailer';
import path from 'path';
import { type z } from 'zod';

export async function POST(req: Request) {
  const { body, email, fullname } = (await req.json()) as z.infer<typeof contactSchema>;

  const templatePath = path.join(process.cwd(), 'public', 'template', 'contact.html');
  let html = await fs.readFile(templatePath, 'utf8');
  html = html
    .replace(/{{name}}/g, fullname)
    .replace(/{{body}}/g, body)
    .replace(/{{email}}/g, email);

  const transporter = createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: false,
    tls: {
      rejectUnauthorized: false,
    },
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: `Portfolio - Nouveau message de ${fullname}`,
    html,
  });

  return NextResponse.json({ status: 'Email sent' });
}
