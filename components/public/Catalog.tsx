'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { catalogData } from '@/lib/catalog';

export default function Catalog() {
  const [activeTab, setActiveTab] = useState(catalogData[0].id);
  const activeCategory = catalogData.find((c) => c.id === activeTab) || catalogData[0];

  return (
    <section id="catalogo" className="section" style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--bg-border)' }}>
      <div className="container">
        
        {/* Header similar to Portfolio */}
        <div className="catalog-header" style={{ marginBottom: '3rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '2rem' }}
          >
            <div className="section-label">Catálogo de Servicios</div>
            <h2 className="text-headline">
              Soluciones integrales para <span className="accent">tu negocio.</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 600 }}>
              Desde soporte técnico básico hasta automatizaciones avanzadas. Explora nuestro catálogo completo de soluciones.
            </p>
          </motion.div>

          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {catalogData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  padding: '0.4rem 1rem', 
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.78rem', 
                  fontWeight: 500, 
                  border: '1px solid',
                  transition: 'all 0.2s',
                  borderColor: activeTab === cat.id ? 'rgba(255,255,255,0.3)' : 'var(--bg-border)',
                  background: activeTab === cat.id ? 'rgba(255,255,255,0.08)' : 'transparent',
                  color: activeTab === cat.id ? 'var(--white)' : 'var(--text-secondary)',
                }}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Services clean text - no emojis or gradients */}
        <div style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--bg-border)',
          borderRadius: 'var(--radius-md)',
          padding: '1.5rem 2rem',
          marginBottom: '3rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          <h3 style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)' }}>
            Servicios Rápidos Valcor
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>
            ¿Necesitas algo sencillo? Te ayudamos con tareas rápidas: Instalación, Configuración, Mantenimiento, Impresoras, Office, Excel, Windows, Respaldos, Programas y Asistencia técnica.
          </p>
        </div>

        {/* Category Content */}
        <div style={{ minHeight: '400px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {activeCategory.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  {activeCategory.description}
                </p>
              </div>

              <div className="catalog-grid">
                {activeCategory.services.map((service) => (
                  <div
                    key={service.id}
                    style={{
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--bg-border)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      transition: 'border-color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--bg-border-hover)')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--bg-border)')}
                  >
                    <div style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.4 }}>
                      {service.name}
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--bg-border)' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        Inversión desde:
                      </span>
                      <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {service.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        .catalog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        @media (max-width: 900px) {
          .catalog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 560px) {
          .catalog-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
