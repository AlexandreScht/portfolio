export const runtime = 'nodejs';
import { createReadStream, promises as fs } from 'fs';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import path from 'path';

function encodeFilename(filename: string) {
  const encodedFilename = encodeURIComponent(filename);

  const asciiFilename = filename
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9\-_.]/g, '')
    .replace(/\s+/g, '_');

  return {
    ascii: asciiFilename,
    encoded: encodedFilename,
  };
}

export async function GET() {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const subdomain = host.split('.')[0].split('-')[0] ?? 'default';
  const pdfPath = subdomain.startsWith('localhost') ? 'sec' : subdomain;
  const dir = path.join(process.cwd(), 'public', 'pdf', pdfPath);

  const files = await fs.readdir(dir);
  const pdf = files.find(f => f.toLowerCase().endsWith('.pdf'));

  if (!pdf) {
    return NextResponse.json({ error: 'Aucun PDF trouvé' }, { status: 404 });
  }

  const { ascii, encoded } = encodeFilename(pdf);

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
      'Content-Disposition': `attachment; filename="${ascii}"; filename*=UTF-8''${encoded}`,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: '0',
    },
  });
}
