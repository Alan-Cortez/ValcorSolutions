'use client';

import { motion } from 'framer-motion';
import { Globe, Code2, ShoppingCart, Search, Smartphone, Settings } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Diseno Web',
    description: 'Interfaces modernas y elegantes que comunican la esencia de tu marca y convierten visitantes en clientes.',
  },
  {
    icon: Code2,
    title: 'Desarrollo a Medida',
    description: 'Soluciones web personalizadas construidas con tecnologias de vanguardia adaptadas a tus necesidades.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Tiendas en linea optimizadas para la conversion, con experiencias de compra rapidas y seguras.',
  },
  {
    icon: Search,
    title: 'SEO Tecnico',
    description: 'Optimizacion en buscadores desde la arquitectura del codigo para posicionarte donde te buscan.',
  },
  {
    icon: Smartphone,
    title: 'Apps Web',
    description: 'Aplicaciones web progresivas y responsivas que funcionan con fluidez en cualquier dispositivo.',
  },
  {
    icon: Settings,
    title: 'Mantenimiento',
    description: 'Soporte continuo, actualizaciones y mejoras para que tu sitio siempre funcione a su maximo nivel.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export default function Services() {
  return (
    <section id="servicios" className="section" style={{ borderTop: '1px solid var(--bg-border)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <div className="section-label">Servicios</div>
          <h2 className="text-headline" style={{ maxWidth: 560 }}>
            Todo lo que necesitas<br />
            <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>en un solo equipo.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1px',
            background: 'var(--bg-border)',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
          }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                style={{
                  background: 'var(--bg-primary)',
                  padding: '2.5rem',
                  transition: 'background 0.25s',
                  cursor: 'default',
                }}
                whileHover={{ background: 'var(--bg-surface)' }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--blue-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    border: '1px solid rgba(59,130,246,0.15)',
                  }}
                >
                  <Icon size={20} color="var(--blue-hover)" strokeWidth={1.5} />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
