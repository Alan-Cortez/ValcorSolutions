import { NextRequest, NextResponse } from 'next/server';
import client from '@/lib/db';

export async function GET() {
  try {
    const result = await client.execute('SELECT * FROM reviews ORDER BY created_at DESC');
    return NextResponse.json(result.rows);
  } catch {
    return NextResponse.json({ error: 'Error al obtener resenas' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { author_name, company, role, content, rating } = await req.json();
    await client.execute({
      sql: 'INSERT INTO reviews (author_name, company, role, content, rating) VALUES (?, ?, ?, ?, ?)',
      args: [author_name, company || '', role || '', content, rating || 5],
    });
    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Error al crear resena' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { id, visible } = await req.json();
    await client.execute({ sql: 'UPDATE reviews SET visible = ? WHERE id = ?', args: [visible, id] });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Error al actualizar' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    await client.execute({ sql: 'DELETE FROM reviews WHERE id = ?', args: [id!] });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Error al eliminar' }, { status: 500 });
  }
}
