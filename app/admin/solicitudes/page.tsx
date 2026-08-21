'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Request {
  id: number;
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  status: string;
  created_at: string;
}

const statuses = ['nuevo', 'en revision', 'contactado', 'cerrado'];
const statusClass: Record<string, string> = {
  nuevo: 'status-nuevo',
  'en revision': 'status-revision',
  contactado: 'status-contactado',
  cerrado: 'status-cerrado',
};

export default function AdminSolicitudes() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [selected, setSelected] = useState<Request | null>(null);
  const [filter, setFilter] = useState('todos');

  async function load() {
    const res = await fetch('/api/requests');
    const data = await res.json();
    setRequests(Array.isArray(data) ? data : []);
  }

  useEffect(() => { load(); }, []);

  const updateStatus = async (id: number, status: string) => {
    await fetch('/api/requests', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, status }) });
    load();
    if (selected?.id === id) setSelected(r => r ? { ...r, status } : r);
  };

  const filtered = filter === 'todos' ? requests : requests.filter(r => r.status === filter);

  return (
    <div className="admin-content">
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>Solicitudes</h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Solicitudes de proyecto recibidas desde el sitio</p>
      </div>

      {/* Filter */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {['todos', ...statuses].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            style={{
              padding: '0.4rem 1rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.8rem',
              fontWeight: 500,
              border: '1px solid',
              transition: 'all 0.2s',
              borderColor: filter === s ? 'var(--blue-primary)' : 'var(--bg-border)',
              background: filter === s ? 'var(--blue-subtle)' : 'transparent',
              color: filter === s ? 'var(--blue-hover)' : 'var(--text-secondary)',
              textTransform: 'capitalize',
            }}
          >
            {s}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: selected ? '1fr 380px' : '1fr', gap: '1.25rem' }}>
        {/* Table */}
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--bg-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Servicio</th>
                <th>Estado</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={4} style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                    Sin solicitudes
                  </td>
                </tr>
              )}
              {filtered.map((req) => (
                <tr key={req.id} onClick={() => setSelected(req)} style={{ cursor: 'pointer' }}>
                  <td>
                    <div style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{req.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{req.email}</div>
                    {req.company && <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{req.company}</div>}
                  </td>
                  <td>{req.service || '—'}</td>
                  <td>
                    <span className={`status-badge ${statusClass[req.status] || 'status-nuevo'}`}>
                      {req.status}
                    </span>
                  </td>
                  <td style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {new Date(req.created_at).toLocaleDateString('es-MX')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detail panel */}
        {selected && (
          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--bg-border)',
            borderRadius: 'var(--radius-md)',
            padding: '1.5rem',
            position: 'sticky',
            top: '5rem',
            height: 'fit-content',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
              <h2 style={{ fontSize: '1rem', fontWeight: 600 }}>{selected.name}</h2>
              <button onClick={() => setSelected(null)} style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 1 }}>×</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {[
                ['Correo', selected.email],
                ['Empresa', selected.company || '—'],
                ['Servicio', selected.service || '—'],
                ['Fecha', new Date(selected.created_at).toLocaleString('es-MX')],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{k}</span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{v}</span>
                </div>
              ))}
              {selected.message && (
                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Mensaje</div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7, background: 'var(--bg-surface-2)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
                    {selected.message}
                  </p>
                </div>
              )}
            </div>
            <div className="form-field">
              <label className="form-label">Cambiar estado</label>
              <div style={{ position: 'relative' }}>
                <select
                  value={selected.status}
                  onChange={(e) => updateStatus(selected.id, e.target.value)}
                  className="form-input"
                  style={{ appearance: 'none', paddingRight: '2rem', cursor: 'pointer', textTransform: 'capitalize' }}
                >
                  {statuses.map(s => <option key={s} value={s} style={{ textTransform: 'capitalize' }}>{s}</option>)}
                </select>
                <ChevronDown size={14} style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
