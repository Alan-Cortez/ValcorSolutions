'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const categories = ['Todos', 'Sistemas Web', 'Comercio B2B', 'App Móvil'];

const projects = [
  {
    id: 1,
    title: 'Grupo Inmobiliario Apex',
    category: 'Sistemas Web',
    result: '-40% tiempo en admin',
    description: 'Desarrollamos un CRM a la medida que centraliza sus propiedades y automatiza el seguimiento de clientes potenciales.',
    industry: 'Bienes Raíces',
    color: '#0f1a2e',
    accent: '#2563eb',
  },
  {
    id: 2,
    title: 'Distribuidora Elara',
    category: 'Comercio B2B',
    result: '+60% eficiencia en pedidos',
    description: 'Plataforma B2B que conecta su inventario ERP con sus distribuidores, automatizando la toma de pedidos 24/7.',
    industry: 'Logística & Retail',
    color: '#1a0f2e',
    accent: '#7c3aed',
  },
  {
    id: 3,
    title: 'Red Médica Wellness',
    category: 'App Móvil',
    result: '0 a 5,000 usuarios activos',
    description: 'Aplicación nativa para gestión de expedientes y telemedicina, conectada en tiempo real con su sistema hospitalario.',
    industry: 'Salud & Bienestar',
    color: '#0a1a14',
    accent: '#059669',
  },
  {
    id: 4,
    title: 'Corporativo Hernández',
    category: 'Sistemas Web',
    result: 'Procesos 100% digitales',
    description: 'Digitalizamos su proceso de auditoría mediante un portal web seguro para la recolección y análisis de documentos.',
    industry: 'Consultoría',
    color: '#1a1204',
    accent: '#d97706',
  },
  {
    id: 5,
    title: 'Lumina Food Service',
    category: 'Sistemas Web',
    result: 'Inventario en tiempo real',
    description: 'Sistema integral de gestión de cocina e inventarios que automatiza las compras a proveedores.',
    industry: 'Food & Beverage',
    color: '#1a0808',
    accent: '#dc2626',
  },
  {
    id: 6,
    title: 'FinSecure Asesores',
    category: 'App Móvil',
    result: '+80% retención',
    description: 'Portal de inversión y estado de cuenta interactivo que brinda transparencia total a sus inversionistas.',
    industry: 'Fintech',
    color: '#050f18',
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
    <section
      id="proyectos"
      className="section"
      style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--bg-border)' }}
    >
      <div className="container">

        {/* Header */}
        <div className="portfolio-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">Resultados reales</div>
            <h2 className="text-headline">
              Negocios que{' '}
              <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>ya están creciendo.</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 480 }}>
              Estos son algunos de nuestros clientes y los resultados que lograron.
            </p>
          </motion.div>

          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.4rem 1rem', borderRadius: 'var(--radius-pill)',
                  fontSize: '0.78rem', fontWeight: 500, border: '1px solid',
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
                  {/* Industry tag */}
                  <span style={{
                    display: 'block', fontSize: '0.62rem', fontWeight: 700,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: project.accent, marginBottom: '0.75rem',
                  }}>
                    {project.industry}
                  </span>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '1.1rem', fontWeight: 800,
                    letterSpacing: '-0.02em', color: 'var(--white)',
                    lineHeight: 1.25, marginBottom: '0.875rem',
                  }}>
                    {project.title}
                  </h3>

                  {/* Result highlight */}
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: 'var(--radius-pill)',
                    padding: '0.3rem 0.75rem',
                    fontSize: '0.75rem', fontWeight: 700,
                    color: 'rgba(255,255,255,0.85)',
                  }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ade80', flexShrink: 0 }} />
                    {project.result}
                  </div>
                </div>

                {/* Arrow */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
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
              display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.25rem',
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
                padding: '2.5rem', maxWidth: 500, width: '100%',
                maxHeight: '90vh', overflowY: 'auto',
              }}
            >
              <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: selected.accent }}>
                {selected.industry}
              </span>
              <h2 style={{ fontSize: 'clamp(1.3rem, 4vw, 1.6rem)', fontWeight: 800, letterSpacing: '-0.025em', margin: '0.75rem 0 0.5rem' }}>
                {selected.title}
              </h2>

              {/* Result big */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)',
                borderRadius: 'var(--radius-pill)', padding: '0.4rem 1rem',
                fontSize: '0.85rem', fontWeight: 700, color: '#4ade80',
                marginBottom: '1.5rem',
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80' }} />
                Resultado: {selected.result}
              </div>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.9rem' }}>
                {selected.description}
              </p>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button onClick={() => setSelected(null)} className="btn btn-ghost" style={{ flex: 1, justifyContent: 'center' }}>
                  Cerrar
                </button>
                <a href="#contacto" onClick={() => setSelected(null)} className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', textAlign: 'center' }}>
                  Iniciar mi proyecto
                </a>
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
        @media (max-width: 900px) {
          .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .portfolio-header { flex-direction: column !important; align-items: flex-start !important; }
        }
        @media (max-width: 560px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
