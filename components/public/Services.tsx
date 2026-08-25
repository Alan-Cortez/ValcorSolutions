'use client';

import { motion } from 'framer-motion';
import { Globe, Code2, ShoppingCart, Search, Smartphone, Settings } from 'lucide-react';

const capabilities = [
  { icon: Globe,         title: 'Diseño Web',           description: 'Interfaces modernas que comunican tu marca y convierten.' },
  { icon: Code2,         title: 'Desarrollo a Medida',  description: 'Soluciones personalizadas con tecnologías de vanguardia.' },
  { icon: ShoppingCart,  title: 'E-commerce',            description: 'Tiendas optimizadas para la conversión y la escalabilidad.' },
  { icon: Search,        title: 'SEO Técnico',           description: 'Posicionamiento desde la arquitectura del código.' },
  { icon: Smartphone,    title: 'Apps Web',              description: 'Aplicaciones progresivas que fluyen en cualquier dispositivo.' },
  { icon: Settings,      title: 'Mantenimiento',         description: 'Soporte continuo para que siempre estés al máximo.' },
];

const tools = [
  { name: 'Next.js',      color: '#fff' },
  { name: 'React',        color: '#61dafb' },
  { name: 'TypeScript',   color: '#3178c6' },
  { name: 'Node.js',      color: '#8cc84b' },
  { name: 'PostgreSQL',   color: '#336791' },
  { name: 'Stripe',       color: '#635bff' },
  { name: 'Vercel',       color: '#fff' },
  { name: 'Figma',        color: '#f24e1e' },
  { name: 'Supabase',     color: '#3ecf8e' },
  { name: 'Framer',       color: '#0055ff' },
  { name: 'MongoDB',      color: '#47a248' },
  { name: 'Firebase',     color: '#ffa611' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export default function Services() {
  return (
    <section id="servicios" className="section" style={{ borderTop: '1px solid var(--bg-border)' }}>
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '5rem' }}
        >
          <div className="section-label">Capacidades</div>
          <h2 className="text-headline" style={{ maxWidth: 680 }}>
            Todo lo que necesitas{' '}
            <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>en un solo equipo.</span>
          </h2>
        </motion.div>

        {/* Split layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'start',
          }}
        >
          {/* LEFT — Capabilities list */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            {capabilities.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  style={{
                    display: 'flex',
                    gap: '1.25rem',
                    alignItems: 'flex-start',
                    padding: '1.5rem 0',
                    borderBottom: '1px solid var(--bg-border)',
                    cursor: 'default',
                  }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Index + icon */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', paddingTop: '2px' }}>
                    <span style={{
                      fontSize: '0.6rem',
                      fontWeight: 700,
                      color: 'var(--text-muted)',
                      letterSpacing: '0.12em',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <Icon size={16} color="var(--text-secondary)" strokeWidth={1.5} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '0.975rem',
                      fontWeight: 700,
                      marginBottom: '0.35rem',
                      letterSpacing: '-0.01em',
                      color: 'var(--white)',
                    }}>
                      {service.title}
                    </h3>
                    <p style={{
                      fontSize: '0.835rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                    }}>
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* RIGHT — Tools & Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--bg-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem',
                  marginBottom: '1rem',
                }}
              >
                <div
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '1.5rem',
                  }}
                >
                  Herramientas &amp; Tecnologías
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {tools.map((tool) => (
                    <span
                      key={tool.name}
                      style={{
                        padding: '0.3rem 0.75rem',
                        borderRadius: 'var(--radius-pill)',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        background: 'var(--bg-surface-2)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--bg-border)',
                        transition: 'all var(--transition)',
                        cursor: 'default',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = tool.color + '55';
                        e.currentTarget.style.color = tool.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--bg-border)';
                        e.currentTarget.style.color = 'var(--text-secondary)';
                      }}
                    >
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications / Quick stats */}
              <div
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--bg-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem',
                }}
              >
                <div
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '1.5rem',
                  }}
                >
                  Lo que nos define
                </div>

                {[
                  { label: 'Entrega puntual',      pct: 98 },
                  { label: 'Código bien documentado', pct: 100 },
                  { label: 'Satisfacción del cliente', pct: 99 },
                ].map((item) => (
                  <div key={item.label} style={{ marginBottom: '1.25rem' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '0.5rem',
                    }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{item.label}</span>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--white)' }}>{item.pct}%</span>
                    </div>
                    <div style={{
                      height: '2px',
                      background: 'var(--bg-border)',
                      borderRadius: '1px',
                      overflow: 'hidden',
                    }}>
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                          height: '100%',
                          width: `${item.pct}%`,
                          background: 'var(--white)',
                          transformOrigin: 'left',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #servicios > .container > div:last-child { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
