'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Descubrimiento',
    description: 'Analizamos tu negocio, tu competencia y tus objetivos para entender exactamente que necesitas construir.',
  },
  {
    number: '02',
    title: 'Diseno',
    description: 'Creamos prototipos y disenos de alta fidelidad que reflejan tu identidad visual y priorizan la experiencia de usuario.',
  },
  {
    number: '03',
    title: 'Desarrollo',
    description: 'Construimos tu producto con codigo limpio, performante y escalable usando las mejores practicas de la industria.',
  },
  {
    number: '04',
    title: 'Lanzamiento',
    description: 'Desplegamos, optimizamos y te entregamos un producto listo para crecer, con soporte continuo de nuestro equipo.',
  },
];

export default function Process() {
  return (
    <section id="proceso" className="section" style={{ borderTop: '1px solid var(--bg-border)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '5rem' }}
        >
          <div className="section-label">Proceso</div>
          <h2 className="text-headline">
            Como llevamos tu idea<br />
            <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>a la realidad.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', position: 'relative' }}>
          {/* Connector line */}
          <div style={{
            position: 'absolute',
            top: '2.25rem',
            left: '12.5%',
            right: '12.5%',
            height: '1px',
            background: 'linear-gradient(to right, transparent, var(--blue-primary), transparent)',
            zIndex: 0,
          }} />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{ padding: '0 1.5rem', position: 'relative', zIndex: 1 }}
            >
              {/* Circle */}
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: i === 0 ? 'var(--blue-primary)' : 'var(--bg-surface)',
                border: `1px solid ${i === 0 ? 'var(--blue-primary)' : 'var(--bg-border)'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.75rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: i === 0 ? '#fff' : 'var(--text-muted)',
                letterSpacing: '0.05em',
              }}>
                {step.number}
              </div>

              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Responsive mobile stack */}
        <style>{`
          @media (max-width: 768px) {
            #proceso .steps-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
            #proceso .connector { display: none !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
