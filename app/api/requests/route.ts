import { NextRequest, NextResponse } from 'next/server';
import client from '@/lib/db';

export async function GET() {
  try {
    const result = await client.execute('SELECT * FROM project_requests ORDER BY created_at DESC');
    return NextResponse.json(result.rows);
  } catch {
    return NextResponse.json({ error: 'Error al obtener solicitudes' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, service, message } = await req.json();
    await client.execute({
      sql: 'INSERT INTO project_requests (name, email, company, service, message) VALUES (?, ?, ?, ?, ?)',
      args: [name, email, company || '', service || '', message || ''],
    });
    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Error al guardar solicitud' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { id, status } = await req.json();
    await client.execute({ sql: 'UPDATE project_requests SET status = ? WHERE id = ?', args: [status, id] });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Error al actualizar estado' }, { status: 500 });
  }
}
