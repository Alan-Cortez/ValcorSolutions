'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const categories = ['Todos', 'Web', 'E-commerce', 'App'];

const projects = [
  {
    id: 1,
    title: 'Plataforma Inmobiliaria',
    category: 'Web',
    description: 'Sitio web premium para agencia inmobiliaria con listados dinamicos, filtros avanzados y panel de gestion de propiedades.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Vercel'],
    color: '#1a2a4a',
    accent: '#2563eb',
  },
  {
    id: 2,
    title: 'Tienda de Moda Online',
    category: 'E-commerce',
    description: 'E-commerce completo con carrito, checkout optimizado, integracion de pagos y dashboard de ventas.',
    tech: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    color: '#1a1a2e',
    accent: '#7c3aed',
  },
  {
    id: 3,
    title: 'App de Gestion de Proyectos',
    category: 'App',
    description: 'Aplicacion web progresiva para equipos con tableros Kanban, seguimiento de tiempo y reportes en tiempo real.',
    tech: ['Vue.js', 'Firebase', 'PWA'],
    color: '#0f2419',
    accent: '#059669',
  },
  {
    id: 4,
    title: 'Portal Corporativo',
    category: 'Web',
    description: 'Rediseno completo del portal institucional con sistema de blog, multi-idioma y optimizacion SEO avanzada.',
    tech: ['Next.js', 'Sanity CMS', 'i18n'],
    color: '#1a1204',
    accent: '#d97706',
  },
  {
    id: 5,
    title: 'Restaurante & Reservaciones',
    category: 'Web',
    description: 'Sitio con sistema de reservaciones online, menu interactivo y galeria de platos con animaciones fluidas.',
    tech: ['React', 'Supabase', 'Framer Motion'],
    color: '#1f0a0a',
    accent: '#dc2626',
  },
  {
    id: 6,
    title: 'Marketplace de Servicios',
    category: 'App',
    description: 'Plataforma de dos lados para conectar profesionales con clientes, con chat en tiempo real y sistema de pagos.',
    tech: ['Next.js', 'WebSockets', 'Stripe Connect'],
    color: '#0a1a1f',
    accent: '#0891b2',
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  const filtered = activeCategory === 'Todos'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="proyectos" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--bg-border)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <div className="section-label">Proyectos</div>
          <h2 className="text-headline">
            Trabajo que<br />
            <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>habla por si solo.</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.85rem',
                fontWeight: 500,
                border: '1px solid',
                transition: 'all 0.2s',
                borderColor: activeCategory === cat ? 'var(--blue-primary)' : 'var(--bg-border)',
                background: activeCategory === cat ? 'var(--blue-subtle)' : 'transparent',
                color: activeCategory === cat ? 'var(--blue-hover)' : 'var(--text-secondary)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1.25rem',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelected(project)}
                style={{
                  background: project.color,
                  border: '1px solid var(--bg-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '220px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                }}
                whileHover={{ y: -4, boxShadow: `0 16px 48px rgba(0,0,0,0.4)` }}
              >
                {/* Accent glow */}
                <div style={{
                  position: 'absolute', top: -40, right: -40,
                  width: 120, height: 120,
                  background: `radial-gradient(circle, ${project.accent}30 0%, transparent 70%)`,
                  pointerEvents: 'none',
                }} />

                <div>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: project.accent,
                    marginBottom: '0.75rem',
                  }}>
                    {project.category}
                  </span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '0.75rem' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>
                    {project.description}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                  {project.tech.map((t) => (
                    <span key={t} style={{
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      background: 'rgba(255,255,255,0.07)',
                      color: 'rgba(255,255,255,0.5)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 200,
              background: 'rgba(0,0,0,0.75)',
              backdropFilter: 'blur(8px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '1.5rem',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--bg-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '3rem',
                maxWidth: 560,
                width: '100%',
              }}
            >
              <span style={{
                fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: selected.accent,
              }}>
                {selected.category}
              </span>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.02em', margin: '0.75rem 0 1rem' }}>
                {selected.title}
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '2rem' }}>
                {selected.description}
              </p>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                  Tecnologias
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {selected.tech.map((t) => (
                    <span key={t} style={{
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      background: 'var(--bg-surface-2)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--bg-border)',
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem' }}>
                <button onClick={() => setSelected(null)} className="btn btn-ghost" style={{ flex: 1 }}>
                  Cerrar
                </button>
                <button className="btn btn-primary" style={{ flex: 1, gap: '0.5rem' }}>
                  Ver sitio <ExternalLink size={14} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
