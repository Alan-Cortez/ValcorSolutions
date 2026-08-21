'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Trash2, Edit2, Star } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tech_stack: string;
  image_url: string;
  project_url: string;
  featured: number;
  created_at: string;
}

const emptyForm = { title: '', description: '', category: 'web', tech_stack: '', image_url: '', project_url: '', featured: false };

export default function AdminProyectos() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [editId, setEditId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  async function load() {
    const res = await fetch('/api/projects');
    const data = await res.json();
    setProjects(Array.isArray(data) ? data : []);
  }

  useEffect(() => { load(); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm(f => ({
      ...f,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const tech_stack = form.tech_stack.split(',').map(s => s.trim()).filter(Boolean);
    const body = { ...form, tech_stack };

    if (editId) {
      await fetch('/api/projects', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...body, id: editId }) });
    } else {
      await fetch('/api/projects', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    }

    setForm(emptyForm);
    setEditId(null);
    setShowForm(false);
    setLoading(false);
    load();
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Eliminar este proyecto?')) return;
    await fetch(`/api/projects?id=${id}`, { method: 'DELETE' });
    load();
  };

  const handleEdit = (p: Project) => {
    setForm({
      title: p.title,
      description: p.description,
      category: p.category,
      tech_stack: (() => { try { return JSON.parse(p.tech_stack).join(', '); } catch { return p.tech_stack; } })(),
      image_url: p.image_url,
      project_url: p.project_url,
      featured: !!p.featured,
    });
    setEditId(p.id);
    setShowForm(true);
  };

  return (
    <div className="admin-content">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>Proyectos</h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Gestiona el portfolio del sitio publico</p>
        </div>
        <button
          onClick={() => { setForm(emptyForm); setEditId(null); setShowForm(!showForm); }}
          className="btn btn-primary"
          style={{ gap: '0.5rem' }}
        >
          <Plus size={16} /> Nuevo proyecto
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--bg-border)',
            borderRadius: 'var(--radius-md)',
            padding: '2rem',
            marginBottom: '2rem',
          }}
        >
          <h2 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            {editId ? 'Editar proyecto' : 'Nuevo proyecto'}
          </h2>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div className="form-field">
                <label className="form-label">Titulo *</label>
                <input name="title" value={form.title} onChange={handleChange} required className="form-input" placeholder="Nombre del proyecto" />
              </div>
              <div className="form-field">
                <label className="form-label">Categoria</label>
                <select name="category" value={form.category} onChange={handleChange} className="form-input">
                  <option value="web">Web</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="app">App</option>
                </select>
              </div>
            </div>
            <div className="form-field" style={{ marginBottom: '1rem' }}>
              <label className="form-label">Descripcion</label>
              <textarea name="description" value={form.description} onChange={handleChange} rows={3} className="form-input" placeholder="Descripcion del proyecto" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div className="form-field">
                <label className="form-label">Tecnologias (separadas por coma)</label>
                <input name="tech_stack" value={form.tech_stack} onChange={handleChange} className="form-input" placeholder="React, Node.js, MongoDB" />
              </div>
              <div className="form-field">
                <label className="form-label">URL del proyecto</label>
                <input name="project_url" value={form.project_url} onChange={handleChange} className="form-input" placeholder="https://..." />
              </div>
            </div>
            <div className="form-field" style={{ marginBottom: '1.5rem' }}>
              <label className="form-label">URL de imagen</label>
              <input name="image_url" value={form.image_url} onChange={handleChange} className="form-input" placeholder="https://..." />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <input
                type="checkbox"
                name="featured"
                id="featured"
                checked={form.featured as boolean}
                onChange={handleChange}
                style={{ width: 16, height: 16, accentColor: 'var(--blue-primary)', cursor: 'pointer' }}
              />
              <label htmlFor="featured" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                Marcar como proyecto destacado
              </label>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button type="button" onClick={() => setShowForm(false)} className="btn btn-ghost">Cancelar</button>
              <button type="submit" disabled={loading} className="btn btn-primary">
                {loading ? 'Guardando...' : editId ? 'Actualizar' : 'Crear proyecto'}
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Table */}
      <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--bg-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Proyecto</th>
              <th>Categoria</th>
              <th>Destacado</th>
              <th>Fecha</th>
              <th style={{ width: 80 }}></th>
            </tr>
          </thead>
          <tbody>
            {projects.length === 0 && (
              <tr>
                <td colSpan={5} style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                  No hay proyectos registrados
                </td>
              </tr>
            )}
            {projects.map((p) => (
              <tr key={p.id}>
                <td>
                  <div style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.15rem' }}>{p.title}</div>
                  {p.project_url && (
                    <a href={p.project_url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.75rem', color: 'var(--blue-hover)' }}>
                      Ver sitio
                    </a>
                  )}
                </td>
                <td><span className="status-badge status-nuevo">{p.category}</span></td>
                <td>
                  {p.featured ? <Star size={15} fill="var(--blue-primary)" color="var(--blue-primary)" /> : <span style={{ color: 'var(--text-muted)' }}>—</span>}
                </td>
                <td style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  {new Date(p.created_at).toLocaleDateString('es-MX')}
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button onClick={() => handleEdit(p)} style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue-hover)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                      <Edit2 size={15} />
                    </button>
                    <button onClick={() => handleDelete(p.id)} style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#f87171')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                      <Trash2 size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
