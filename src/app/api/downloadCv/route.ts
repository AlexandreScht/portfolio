export const runtime = 'nodejs';
import { createReadStream, promises as fs } from 'fs';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET() {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const subdomain = host.split('.')[0].split('-')[0] ?? 'default';
  const pdfPath = subdomain.startsWith('localhost') ? 'default' : subdomain;
  const dir = path.join(process.cwd(), 'public', 'pdf', pdfPath);

  const files = await fs.readdir(dir);
  const pdf = files.find(f => f.toLowerCase().endsWith('.pdf'));

  if (!pdf) {
    return NextResponse.json({ error: 'Aucun PDF trouvé' }, { status: 404 });
  }

  const filePath = path.join(dir, pdf);
  const stream = createReadStream(filePath);

  const readableStream = new ReadableStream({
    start(controller) {
      stream.on('data', chunk => {
        controller.enqueue(chunk);
      });
      stream.on('end', () => {
        controller.close();
      });
      stream.on('error', err => {
        controller.error(err);
      });
    },
  });

  return new NextResponse(readableStream, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${pdf}"`,
    },
  });
}
