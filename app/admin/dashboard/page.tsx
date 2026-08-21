'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FolderOpen, Inbox, Mail, Star } from 'lucide-react';

interface Stats {
  projects: number;
  requests: number;
  contacts: number;
  reviews: number;
  unreadContacts: number;
  newRequests: number;
}

const cards = [
  { key: 'projects', label: 'Proyectos', icon: FolderOpen, color: 'var(--blue-primary)' },
  { key: 'requests', label: 'Solicitudes', icon: Inbox, color: '#7c3aed' },
  { key: 'contacts', label: 'Contactos', icon: Mail, color: '#059669' },
  { key: 'reviews', label: 'Resenas', icon: Star, color: '#d97706' },
];

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    async function load() {
      const [p, r, c, rv] = await Promise.all([
        fetch('/api/projects').then(r => r.json()),
        fetch('/api/requests').then(r => r.json()),
        fetch('/api/contacts').then(r => r.json()),
        fetch('/api/reviews').then(r => r.json()),
      ]);
      setStats({
        projects: Array.isArray(p) ? p.length : 0,
        requests: Array.isArray(r) ? r.length : 0,
        contacts: Array.isArray(c) ? c.length : 0,
        reviews: Array.isArray(rv) ? rv.length : 0,
        unreadContacts: Array.isArray(c) ? c.filter((x: any) => !x.read).length : 0,
        newRequests: Array.isArray(r) ? r.filter((x: any) => x.status === 'nuevo').length : 0,
      });
    }
    load();
  }, []);

  return (
    <div className="admin-content">
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>
          Dashboard
        </h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          Resumen general del sitio Valcor
        </p>
      </div>

      {/* Alerts */}
      {stats && (stats.newRequests > 0 || stats.unreadContacts > 0) && (
        <div style={{
          background: 'var(--blue-subtle)',
          border: '1px solid rgba(59,130,246,0.2)',
          borderRadius: 'var(--radius-sm)',
          padding: '1rem 1.25rem',
          fontSize: '0.875rem',
          color: 'var(--blue-hover)',
          marginBottom: '1.5rem',
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'center',
        }}>
          <span style={{ fontWeight: 600 }}>Atencion:</span>
          {stats.newRequests > 0 && <span>{stats.newRequests} solicitud(es) nueva(s).</span>}
          {stats.unreadContacts > 0 && <span>{stats.unreadContacts} mensaje(s) sin leer.</span>}
        </div>
      )}

      {/* Stat cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1rem',
        marginBottom: '2.5rem',
      }}>
        {cards.map((card, i) => {
          const Icon = card.icon;
          const value = stats ? (stats as any)[card.key] : '—';
          return (
            <motion.div
              key={card.key}
              className="admin-stat-card"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  {card.label}
                </span>
                <div style={{
                  width: 34, height: 34, borderRadius: 'var(--radius-sm)',
                  background: `${card.color}15`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={16} color={card.color} />
                </div>
              </div>
              <div className="admin-stat-value">{value}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Empty state hint */}
      <div style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--bg-border)',
        borderRadius: 'var(--radius-md)',
        padding: '2rem',
      }}>
        <h2 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem' }}>Inicio rapido</h2>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {[
            { label: 'Agrega tu primer proyecto al portfolio', href: '/admin/proyectos' },
            { label: 'Revisa las solicitudes de proyecto recibidas', href: '/admin/solicitudes' },
            { label: 'Lee los mensajes de contacto', href: '/admin/contactos' },
            { label: 'Gestiona los testimonios del sitio', href: '/admin/resenas' },
          ].map((item) => (
            <li key={item.label}>
              <a href={item.href} style={{
                fontSize: '0.875rem',
                color: 'var(--blue-hover)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'opacity 0.2s',
              }}>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--blue-primary)', flexShrink: 0, display: 'inline-block' }} />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
