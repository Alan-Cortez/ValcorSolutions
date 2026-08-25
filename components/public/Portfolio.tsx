'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const categories = ['Todos', 'Web', 'E-commerce', 'App'];

const projects = [
  {
    id: 1,
    title: 'Plataforma Inmobiliaria',
    category: 'Web',
    tag: 'UI/UX Design · Web Application',
    description: 'Sitio web premium para agencia inmobiliaria con listados dinámicos, filtros avanzados y panel de gestión de propiedades.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Vercel'],
    color: '#0f1a2e',
    accent: '#2563eb',
  },
  {
    id: 2,
    title: 'Tienda de Moda Online',
    category: 'E-commerce',
    tag: 'Website Design · Branding',
    description: 'E-commerce completo con carrito, checkout optimizado, integración de pagos y dashboard de ventas.',
    tech: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    color: '#1a0f2e',
    accent: '#7c3aed',
  },
  {
    id: 3,
    title: 'App de Gestión',
    category: 'App',
    tag: 'Mobile App Design · Health & Lifestyle',
    description: 'Aplicación web progresiva para equipos con tableros Kanban, seguimiento de tiempo y reportes en tiempo real.',
    tech: ['Vue.js', 'Firebase', 'PWA'],
    color: '#0a1a14',
    accent: '#059669',
  },
  {
    id: 4,
    title: 'Portal Corporativo',
    category: 'Web',
    tag: 'UI/UX Design · Corporate',
    description: 'Rediseño completo del portal institucional con sistema de blog, multi-idioma y optimización SEO avanzada.',
    tech: ['Next.js', 'Sanity CMS', 'i18n'],
    color: '#1a1204',
    accent: '#d97706',
  },
  {
    id: 5,
    title: 'Restaurante & Reservas',
    category: 'Web',
    tag: 'Website Design · Food & Lifestyle',
    description: 'Sitio con sistema de reservaciones online, menú interactivo y galería de platos con animaciones fluidas.',
    tech: ['React', 'Supabase', 'Framer Motion'],
    color: '#1a0808',
    accent: '#dc2626',
  },
  {
    id: 6,
    title: 'Marketplace Servicios',
    category: 'App',
    tag: 'UI/UX Design · SaaS Platform',
    description: 'Plataforma de dos lados para conectar profesionales con clientes, con chat en tiempo real y sistema de pagos.',
    tech: ['Next.js', 'WebSockets', 'Stripe Connect'],
    color: '#050f18',
    accent: '#0891b2',
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  const filtered =
    activeCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="proyectos"
      className="section"
      style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--bg-border)' }}
    >
      <div className="container">

        {/* Header row */}
        <div className="portfolio-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">Proyectos Destacados</div>
            <h2 className="text-headline">
              Trabajo que{' '}
              <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>habla por sí solo.</span>
            </h2>
          </motion.div>

          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  border: '1px solid',
                  transition: 'all 0.2s',
                  borderColor: activeCategory === cat ? 'rgba(255,255,255,0.3)' : 'var(--bg-border)',
                  background: activeCategory === cat ? 'rgba(255,255,255,0.08)' : 'transparent',
                  color: activeCategory === cat ? 'var(--white)' : 'var(--text-secondary)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="portfolio-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelected(project)}
                style={{
                  background: project.color,
                  padding: '2.25rem 1.75rem 1.75rem',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '260px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
                whileHover={{ filter: 'brightness(1.18)' }}
              >
                <div style={{
                  position: 'absolute', top: -60, right: -60,
                  width: 160, height: 160,
                  background: `radial-gradient(circle, ${project.accent}35 0%, transparent 70%)`,
                  pointerEvents: 'none',
                }} />

                <div>
                  <span style={{
                    display: 'block', fontSize: '0.62rem', fontWeight: 700,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: project.accent, marginBottom: '0.875rem',
                  }}>
                    {project.tag}
                  </span>
                  <h3 style={{
                    fontSize: '1.1rem', fontWeight: 800,
                    letterSpacing: '-0.02em', color: 'var(--white)',
                    lineHeight: 1.25,
                  }}>
                    {project.title}
                  </h3>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                    {project.tech.slice(0, 2).map((t) => (
                      <span key={t} style={{
                        padding: '0.18rem 0.5rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.62rem', fontWeight: 500,
                        background: 'rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.45)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div style={{
                    width: 34, height: 34, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginLeft: '0.75rem',
                  }}>
                    <ArrowUpRight size={14} color="rgba(255,255,255,0.6)" />
                  </div>
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
              background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '1.25rem',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 24 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--bg-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem',
                maxWidth: 520,
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
              }}
            >
              <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: selected.accent }}>
                {selected.category}
              </span>
              <h2 style={{ fontSize: 'clamp(1.3rem, 4vw, 1.75rem)', fontWeight: 800, letterSpacing: '-0.025em', margin: '0.75rem 0 1rem' }}>
                {selected.title}
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.9rem' }}>
                {selected.description}
              </p>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                Tecnologías
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                {selected.tech.map((t) => (
                  <span key={t} style={{
                    padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-sm)',
                    fontSize: '0.78rem', fontWeight: 500,
                    background: 'var(--bg-surface-2)', color: 'var(--text-secondary)',
                    border: '1px solid var(--bg-border)',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button onClick={() => setSelected(null)} className="btn btn-ghost" style={{ flex: 1, justifyContent: 'center' }}>
                  Cerrar
                </button>
                <button className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', gap: '0.5rem' }}>
                  Ver sitio <ExternalLink size={13} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .portfolio-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 3rem;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--bg-border);
          border-radius: var(--radius-md);
          overflow: hidden;
        }

        /* Tablet: 2 columns */
        @media (max-width: 900px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .portfolio-header {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }

        /* Mobile: 1 column */
        @media (max-width: 560px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
