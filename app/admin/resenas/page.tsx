'use client';

import { useEffect, useState } from 'react';
import { Star, Eye, EyeOff, Trash2, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

interface Review {
  id: number;
  author_name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  visible: number;
  created_at: string;
}

const emptyForm = { author_name: '', company: '', role: '', content: '', rating: 5 };

export default function AdminResenas() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(false);

  async function load() {
    const res = await fetch('/api/reviews');
    const data = await res.json();
    setReviews(Array.isArray(data) ? data : []);
  }

  useEffect(() => { load(); }, []);

  const toggleVisible = async (id: number, visible: number) => {
    await fetch('/api/reviews', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, visible: visible ? 0 : 1 }) });
    load();
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Eliminar esta resena?')) return;
    await fetch(`/api/reviews?id=${id}`, { method: 'DELETE' });
    load();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch('/api/reviews', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    setForm(emptyForm);
    setShowForm(false);
    setLoading(false);
    load();
  };

  return (
    <div className="admin-content">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>Resenas</h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Gestiona los testimonios del sitio publico</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="btn btn-primary" style={{ gap: '0.5rem' }}>
          <Plus size={16} /> Nueva resena
        </button>
      </div>

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
          <h2 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Nueva resena</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div className="form-field">
                <label className="form-label">Nombre *</label>
                <input required value={form.author_name} onChange={e => setForm(f => ({ ...f, author_name: e.target.value }))} className="form-input" placeholder="Nombre del cliente" />
              </div>
              <div className="form-field">
                <label className="form-label">Empresa</label>
                <input value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} className="form-input" placeholder="Empresa" />
              </div>
              <div className="form-field">
                <label className="form-label">Cargo</label>
                <input value={form.role} onChange={e => setForm(f => ({ ...f, role: e.target.value }))} className="form-input" placeholder="Director, CEO..." />
              </div>
            </div>
            <div className="form-field" style={{ marginBottom: '1rem' }}>
              <label className="form-label">Testimonio *</label>
              <textarea required value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))} rows={3} className="form-input" placeholder="Escribe el testimonio..." />
            </div>
            <div className="form-field" style={{ marginBottom: '1.5rem' }}>
              <label className="form-label">Calificacion</label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {[1, 2, 3, 4, 5].map(n => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setForm(f => ({ ...f, rating: n }))}
                  >
                    <Star
                      size={22}
                      fill={n <= form.rating ? 'var(--blue-primary)' : 'transparent'}
                      color={n <= form.rating ? 'var(--blue-primary)' : 'var(--text-muted)'}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button type="button" onClick={() => setShowForm(false)} className="btn btn-ghost">Cancelar</button>
              <button type="submit" disabled={loading} className="btn btn-primary">
                {loading ? 'Guardando...' : 'Crear resena'}
              </button>
            </div>
          </form>
        </motion.div>
      )}

      <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--bg-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Autor</th>
              <th>Calificacion</th>
              <th>Testimonio</th>
              <th>Estado</th>
              <th style={{ width: 80 }}></th>
            </tr>
          </thead>
          <tbody>
            {reviews.length === 0 && (
              <tr>
                <td colSpan={5} style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                  Sin resenas registradas
                </td>
              </tr>
            )}
            {reviews.map((r) => (
              <tr key={r.id}>
                <td>
                  <div style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{r.author_name}</div>
                  {r.role && <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{r.role}</div>}
                  {r.company && <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{r.company}</div>}
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '0.15rem' }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} fill={i < r.rating ? 'var(--blue-primary)' : 'transparent'} color={i < r.rating ? 'var(--blue-primary)' : 'var(--text-muted)'} />
                    ))}
                  </div>
                </td>
                <td style={{ maxWidth: 300 }}>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {r.content}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${r.visible ? 'status-contactado' : 'status-cerrado'}`}>
                    {r.visible ? 'Visible' : 'Oculto'}
                  </span>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      onClick={() => toggleVisible(r.id, r.visible)}
                      style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue-hover)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                      title={r.visible ? 'Ocultar' : 'Mostrar'}
                    >
                      {r.visible ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                    <button
                      onClick={() => handleDelete(r.id)}
                      style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#f87171')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                    >
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
