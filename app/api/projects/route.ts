import { NextRequest, NextResponse } from 'next/server';
import client from '@/lib/db';

export async function GET() {
  try {
    const result = await client.execute('SELECT * FROM projects ORDER BY created_at DESC');
    return NextResponse.json(result.rows);
  } catch {
    return NextResponse.json({ error: 'Error al obtener proyectos' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title, description, category, tech_stack, image_url, project_url, featured } = await req.json();
    if (!title) return NextResponse.json({ error: 'Titulo requerido' }, { status: 400 });
    await client.execute({
      sql: `INSERT INTO projects (title, description, category, tech_stack, image_url, project_url, featured)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
      args: [
        title,
        description || '',
        category || 'web',
        JSON.stringify(tech_stack || []),
        image_url || '',
        project_url || '',
        featured ? 1 : 0,
      ],
    });
    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Error al crear proyecto' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, title, description, category, tech_stack, image_url, project_url, featured } = await req.json();
    await client.execute({
      sql: `UPDATE projects SET title=?, description=?, category=?, tech_stack=?, image_url=?, project_url=?, featured=? WHERE id=?`,
      args: [title, description, category, JSON.stringify(tech_stack || []), image_url, project_url, featured ? 1 : 0, id],
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Error al actualizar proyecto' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    await client.execute({ sql: 'DELETE FROM projects WHERE id = ?', args: [id!] });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Error al eliminar proyecto' }, { status: 500 });
  }
}
