'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, Rocket, HeartHandshake } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Nos platicas tu idea',
    description: 'Cuéntanos qué hace tu negocio y qué quieres lograr. No necesitas saber nada de tecnología — nosotros te guiamos.',
    Icon: MessageSquare,
  },
  {
    number: '02',
    title: 'Diseñamos juntos',
    description: 'Creamos el diseño de tu sitio y te mostramos cómo va a quedar antes de construirlo. Tú apruebas cada detalle.',
    Icon: Lightbulb,
  },
  {
    number: '03',
    title: 'Lo construimos y lanzamos',
    description: 'Nos encargamos de todo. En pocas semanas tu negocio está en internet, funcionando y listo para recibir clientes.',
    Icon: Rocket,
  },
  {
    number: '04',
    title: 'Siempre estamos aquí',
    description: 'No te dejamos solo. Si algo no funciona o quieres hacer cambios, estamos a un mensaje de distancia.',
    Icon: HeartHandshake,
  },
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
          <div className="section-label">¿Cómo funciona?</div>
          <h2 className="text-headline" style={{ maxWidth: 580 }}>
            De tu idea a tu sitio web{' '}
            <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>en 4 pasos simples.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1.25rem', fontSize: '1rem', lineHeight: 1.75, maxWidth: 500 }}>
            No necesitas experiencia en tecnología. Nosotros nos encargamos de todo.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{ position: 'relative' }}>
          <div className="process-line" style={{
            position: 'absolute',
            top: '1.5rem',
            left: '12.5%',
            right: '12.5%',
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
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                >
                  {/* Circle */}
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: i === 0 ? 'var(--white)' : 'var(--bg-surface)',
                    border: `1px solid ${i === 0 ? 'var(--white)' : 'var(--bg-border)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    fontSize: '0.72rem', fontWeight: 800,
                    color: i === 0 ? '#000' : 'var(--text-muted)',
                    position: 'relative', zIndex: 1, flexShrink: 0,
                  }}>
                    {step.number}
                  </div>

                  <div style={{ marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>
                    <Icon size={20} color={i === 0 ? 'var(--white)' : 'var(--text-muted)'} strokeWidth={1.5} />
                  </div>

                  <h3 style={{
                    fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.625rem',
                    color: i === 0 ? 'var(--white)' : 'var(--text-primary)',
                    letterSpacing: '-0.01em',
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
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
          grid-template-columns: repeat(4, 1fr);
          position: relative;
          z-index: 1;
        }
        .process-step {
          padding: 0 1.25rem;
          text-align: center;
        }
        @media (max-width: 900px) {
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 3rem 1.5rem !important; }
          .process-line { display: none !important; }
          .process-step { padding: 0 0.75rem !important; }
        }
        @media (max-width: 480px) {
          .process-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .process-step { text-align: left !important; }
          .process-step > div:nth-child(1),
          .process-step > div:nth-child(2) { margin-left: 0 !important; justify-content: flex-start !important; }
        }
      `}</style>
    </section>
  );
}
