'use client';

import { useEffect, useState } from 'react';
import { Mail, MailOpen, Trash2 } from 'lucide-react';

interface Contact {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: number;
  created_at: string;
}

export default function AdminContactos() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selected, setSelected] = useState<Contact | null>(null);

  async function load() {
    const res = await fetch('/api/contacts');
    const data = await res.json();
    setContacts(Array.isArray(data) ? data : []);
  }

  useEffect(() => { load(); }, []);

  const markRead = async (id: number) => {
    await fetch('/api/contacts', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, read: 1 }) });
    load();
  };

  const handleSelect = async (c: Contact) => {
    setSelected(c);
    if (!c.read) markRead(c.id);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Eliminar este mensaje?')) return;
    await fetch(`/api/contacts?id=${id}`, { method: 'DELETE' });
    if (selected?.id === id) setSelected(null);
    load();
  };

  const unread = contacts.filter(c => !c.read).length;

  return (
    <div className="admin-content">
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>
          Contactos
          {unread > 0 && (
            <span style={{
              marginLeft: '0.75rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              background: 'var(--blue-primary)',
              color: '#fff',
              padding: '0.15rem 0.5rem',
              borderRadius: '999px',
              verticalAlign: 'middle',
            }}>
              {unread}
            </span>
          )}
        </h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Mensajes recibidos del formulario de contacto</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: selected ? '1fr 420px' : '1fr', gap: '1.25rem' }}>
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--bg-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th style={{ width: 24 }}></th>
                <th>Remitente</th>
                <th>Asunto</th>
                <th>Fecha</th>
                <th style={{ width: 40 }}></th>
              </tr>
            </thead>
            <tbody>
              {contacts.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                    Sin mensajes
                  </td>
                </tr>
              )}
              {contacts.map((c) => (
                <tr
                  key={c.id}
                  onClick={() => handleSelect(c)}
                  style={{
                    cursor: 'pointer',
                    background: selected?.id === c.id ? 'var(--bg-surface-2)' : undefined,
                  }}
                >
                  <td>
                    {c.read
                      ? <MailOpen size={15} style={{ color: 'var(--text-muted)' }} />
                      : <Mail size={15} style={{ color: 'var(--blue-hover)' }} />
                    }
                  </td>
                  <td>
                    <div style={{ fontWeight: c.read ? 400 : 600, color: c.read ? 'var(--text-secondary)' : 'var(--text-primary)' }}>
                      {c.name}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{c.email}</div>
                  </td>
                  <td style={{ color: c.read ? 'var(--text-muted)' : 'var(--text-secondary)' }}>
                    {c.subject || '(Sin asunto)'}
                  </td>
                  <td style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {new Date(c.created_at).toLocaleDateString('es-MX')}
                  </td>
                  <td>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleDelete(c.id); }}
                      style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#f87171')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                    >
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selected && (
          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--bg-border)',
            borderRadius: 'var(--radius-md)',
            padding: '1.75rem',
            position: 'sticky',
            top: '5rem',
            height: 'fit-content',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
              <div>
                <div style={{ fontWeight: 600, marginBottom: '0.15rem' }}>{selected.name}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{selected.email}</div>
              </div>
              <button onClick={() => setSelected(null)} style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>×</button>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                Asunto
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>{selected.subject || '(Sin asunto)'}</div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                Mensaje
              </div>
              <p style={{
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                background: 'var(--bg-surface-2)',
                padding: '1rem',
                borderRadius: 'var(--radius-sm)',
                whiteSpace: 'pre-wrap',
              }}>
                {selected.message}
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {new Date(selected.created_at).toLocaleString('es-MX')}
              </span>
              <button
                onClick={() => handleDelete(selected.id)}
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)', transition: 'color 0.2s', fontFamily: 'inherit' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#f87171')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                <Trash2 size={13} /> Eliminar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
