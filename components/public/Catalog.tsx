'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Zap, Monitor, Smartphone, Briefcase, Database, CloudLightning, PenTool } from 'lucide-react';
import { catalogData } from '@/lib/catalog';

const iconMap: Record<string, React.ElementType> = {
  'soporte-computadora': Monitor,
  'soluciones-negocios': Briefcase,
  'datos-productividad': Database,
  'servicios-digitales': Smartphone,
  'automatizacion': CloudLightning,
  'diseno-digital': PenTool,
};

export default function Catalog() {
  const [activeTab, setActiveTab] = useState(catalogData[0].id);

  const activeCategory = catalogData.find((c) => c.id === activeTab) || catalogData[0];

  return (
    <section id="catalogo" className="section" style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--bg-border)' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem', textAlign: 'center' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Servicios Integrales
          </div>
          <h2 className="text-headline" style={{ marginBottom: '1rem' }}>
            Un catálogo para <span className="accent">cada necesidad.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
            No somos solo desarrollo web. Brindamos soluciones tecnológicas integrales para ti y tu negocio.
            Desde soporte técnico básico hasta automatizaciones avanzadas.
          </p>
        </motion.div>

        {/* Quick Services Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, rgba(37,99,255,0.1), rgba(37,99,255,0.02))',
            border: '1px solid rgba(37,99,255,0.2)',
            borderRadius: 'var(--radius-md)',
            padding: '2rem',
            marginBottom: '4rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--blue-vivid)', fontWeight: 800, letterSpacing: '-0.02em', fontSize: '1.25rem' }}>
            <Zap size={20} fill="var(--blue-vivid)" /> SERVICIOS RÁPIDOS VALCOR
          </div>
          <p style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '1.05rem' }}>
            ¿Necesitas algo sencillo? Nosotros te ayudamos.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', maxWidth: 700, lineHeight: 1.8 }}>
            Instalación • Configuración • Mantenimiento • Impresoras • Office • Excel • Windows • Respaldos • Programas • Asistencia técnica
          </p>
          <a href="#contacto" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
            Solicitar servicio rápido
          </a>
        </motion.div>

        {/* Catalog Navigation */}
        <div className="catalog-layout">
          <div className="catalog-sidebar">
            <h3 style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
              Categorías
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {catalogData.map((cat) => {
                const Icon = iconMap[cat.id] || Monitor;
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.75rem',
                      padding: '0.875rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      background: isActive ? 'var(--blue-subtle)' : 'transparent',
                      color: isActive ? 'var(--blue-vivid)' : 'var(--text-secondary)',
                      fontWeight: isActive ? 600 : 500,
                      fontSize: '0.9rem',
                      textAlign: 'left',
                      transition: 'all 0.2s',
                      border: '1px solid',
                      borderColor: isActive ? 'rgba(37,99,255,0.2)' : 'transparent',
                    }}
                  >
                    <Icon size={18} />
                    {cat.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Catalog Content */}
          <div className="catalog-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
                    {activeCategory.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    {activeCategory.description}
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {activeCategory.services.map((service) => (
                    <div
                      key={service.id}
                      style={{
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--bg-border)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '1.25rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '1rem',
                        flexWrap: 'wrap',
                        transition: 'border-color 0.2s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--bg-border-hover)')}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--bg-border)')}
                    >
                      <div style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                        {service.name}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--blue-vivid)', background: 'var(--blue-subtle)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-pill)' }}>
                          {service.price}
                        </span>
                        <a href="#contacto" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                          <ArrowUpRight size={18} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        .catalog-layout {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 3rem;
          align-items: start;
        }
        @media (max-width: 900px) {
          .catalog-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .catalog-sidebar {
            display: flex;
            flex-direction: column;
          }
          .catalog-sidebar > div {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}
