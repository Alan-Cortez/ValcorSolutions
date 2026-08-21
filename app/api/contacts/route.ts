import { NextRequest, NextResponse } from 'next/server';
import client from '@/lib/db';

export async function GET() {
  try {
    const result = await client.execute('SELECT * FROM contacts ORDER BY created_at DESC');
    return NextResponse.json(result.rows);
  } catch (e) {
    return NextResponse.json({ error: 'Error al obtener contactos' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, service, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Campos requeridos faltantes' }, { status: 400 });
    }
    await client.execute({
      sql: 'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)',
      args: [name, email, service || '', message],
    });
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: 'Error al guardar contacto' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { id, read } = await req.json();
    await client.execute({ sql: 'UPDATE contacts SET read = ? WHERE id = ?', args: [read, id] });
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: 'Error al actualizar' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    await client.execute({ sql: 'DELETE FROM contacts WHERE id = ?', args: [id!] });
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: 'Error al eliminar' }, { status: 500 });
  }
}
