'use client';

import { motion } from 'framer-motion';
import { Search, Target, Pen, Code2, Rocket } from 'lucide-react';

const steps = [
  { number: '01', title: 'Descubrimiento', description: 'Analizamos tu negocio, competencia y objetivos para entender exactamente qué necesitas construir.', Icon: Search },
  { number: '02', title: 'Definición',     description: 'Investigamos, analizamos y convertimos los hallazgos en dirección clara y accionable.', Icon: Target },
  { number: '03', title: 'Diseño',         description: 'Creamos interfaces intuitivas con claridad y propósito. Alta fidelidad desde el primer día.', Icon: Pen },
  { number: '04', title: 'Desarrollo',     description: 'Construimos con código limpio y escalable, colaborando estrechamente con tu equipo.', Icon: Code2 },
  { number: '05', title: 'Lanzamiento',    description: 'Probamos, refinamos y lanzamos experiencias digitales impecables.', Icon: Rocket },
];

export default function Process() {
  return (
    <section id="proceso" className="section" style={{ borderTop: '1px solid var(--bg-border)' }}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '5rem' }}
        >
          <div className="section-label">Mi proceso de diseño</div>
          <h2 className="text-headline" style={{ maxWidth: 540 }}>
            Cómo llevamos tu idea{' '}
            <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>a la realidad.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div style={{ position: 'relative' }}>
          {/* Connector line — only desktop */}
          <div className="process-line" style={{
            position: 'absolute',
            top: '1.5rem',
            left: '10%',
            right: '10%',
            height: '1px',
            background: 'linear-gradient(to right, transparent, var(--bg-border-hover), transparent)',
            zIndex: 0,
          }} />

          <div className="process-grid">
            {steps.map((step, i) => {
              const Icon = step.Icon;
              return (
                <motion.div
                  key={step.number}
                  className="process-step"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  {/* Circle */}
                  <div style={{
                    width: 46, height: 46,
                    borderRadius: '50%',
                    background: i === 0 ? 'var(--white)' : 'var(--bg-surface)',
                    border: `1px solid ${i === 0 ? 'var(--white)' : 'var(--bg-border)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    fontSize: '0.7rem', fontWeight: 800,
                    color: i === 0 ? '#000' : 'var(--text-muted)',
                    letterSpacing: '0.05em',
                    position: 'relative', zIndex: 1,
                    flexShrink: 0,
                  }}>
                    {step.number}
                  </div>

                  <div style={{ marginBottom: '0.625rem', display: 'flex', justifyContent: 'center' }}>
                    <Icon size={17} color={i === 0 ? 'var(--white)' : 'var(--text-muted)'} strokeWidth={1.5} />
                  </div>

                  <h3 style={{
                    fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.5rem',
                    letterSpacing: '-0.01em',
                    color: i === 0 ? 'var(--white)' : 'var(--text-primary)',
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .process-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          position: relative;
          z-index: 1;
        }
        .process-step {
          padding: 0 1rem;
          text-align: center;
        }

        /* Tablet: 3 + 2 */
        @media (max-width: 900px) {
          .process-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 2.5rem 1rem !important;
          }
          .process-line { display: none !important; }
          .process-step { padding: 0 0.5rem !important; }
        }

        /* Mobile: 2 columns */
        @media (max-width: 560px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem 0.75rem !important;
          }
          .process-step {
            text-align: left !important;
          }
          .process-step > div:nth-child(1),
          .process-step > div:nth-child(2) {
            margin-left: 0 !important;
            justify-content: flex-start !important;
          }
        }

        /* Tiny mobile: 1 column */
        @media (max-width: 380px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
