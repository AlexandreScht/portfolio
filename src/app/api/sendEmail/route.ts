export const runtime = 'nodejs';
import { contactSchema } from '@/validators/contact';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const rawBody = await req.json();
    const result = contactSchema.safeParse(rawBody);

    if (!result.success || !process.env.NTFY_URL) {
      return NextResponse.json({ error: 'Données invalides', details: result?.error?.errors }, { status: 400 });
    }

    const { body, email, fullname } = result.data;

    const host = req.headers.get('host') || 'Inconnu';
    let siteName = 'Local';
    if (host !== 'Inconnu') {
      // Ex: "sec-aschect.vercel.app" -> "SEC"
      // Ex: "sec.aschect.fr" -> "SEC"
      siteName = host.split(/[.-]/)[0].toUpperCase();
    }

    const ntfyUrl = process.env.NTFY_URL;

    const message = `Nom: ${fullname}\nEmail: ${email}\n\nMessage:\n${body}`;

    const ntfyRes = await fetch(ntfyUrl, {
      method: 'POST',
      body: message,
      headers: {
        Title: `Nouveau message - Portfolio ${siteName}`,
        Tags: `envelope,briefcase,${siteName.toLowerCase()}`,
      },
    });

    if (!ntfyRes.ok) {
      throw new Error(`Erreur Ntfy: ${ntfyRes.status}`);
    }

    return NextResponse.json({ status: 'Notification sent' });
  } catch (error) {
    console.error("Erreur lors de l'envois de la notification:", error);
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
  }
}
