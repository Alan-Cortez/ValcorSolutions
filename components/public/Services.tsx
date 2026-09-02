'use client';

import { motion } from 'framer-motion';
import { Globe, ShoppingBag, Search, Phone, Wrench, LayoutDashboard } from 'lucide-react';

const services = [
  { icon: LayoutDashboard,title: 'Desarrollo a la Medida',    description: 'Sistemas únicos diseñados específicamente para resolver los retos operativos y estratégicos de tu empresa.', benefit: 'Operación centralizada' },
  { icon: Globe,          title: 'Plataformas Web',            description: 'Aplicaciones web robustas, rápidas y escalables que conectan a tu equipo y a tus clientes en la nube.', benefit: 'Acceso global' },
  { icon: ShoppingBag,    title: 'Comercio B2B y B2C',         description: 'Plataformas de comercio electrónico avanzadas, integradas directamente con tus inventarios y sistemas ERP.', benefit: 'Ventas automatizadas' },
  { icon: Search,         title: 'Integración de Sistemas',    description: 'Conectamos tus herramientas actuales (CRMs, ERPs, APIs) para lograr un flujo de información sin interrupciones.', benefit: 'Datos sincronizados' },
  { icon: Phone,          title: 'Desarrollo Móvil',           description: 'Aplicaciones móviles diseñadas para ofrecer experiencias fluidas y poner tu negocio en manos de tus usuarios.', benefit: 'Alta disponibilidad' },
  { icon: Wrench,         title: 'Mantenimiento y Soporte',    description: 'Aseguramos la estabilidad, seguridad y actualización continua de toda tu infraestructura tecnológica.', benefit: 'Infraestructura segura' },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const cardVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4,0,0.2,1] } } };

export default function Services() {
  return (
    <section id="servicios" style={{ background: 'var(--light-bg)', position: 'relative', overflow: 'hidden', padding: '7rem 0' }}>

      {/* Subtle blob on light bg */}
      <div style={{
        position: 'absolute', top: '-15%', right: '-5%', width: 500, height: 500,
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        background: 'rgba(37,99,255,0.05)', filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem', maxWidth: 700 }}>
          <div className="section-label-light">¿Qué hacemos?</div>
          <h2 className="text-headline" style={{ color: 'var(--light-text)' }}>
            Soluciones tecnológicas para{' '}
            <span className="accent-light">escalar tu operación.</span>
          </h2>
          <p style={{ color: 'var(--light-muted)', marginTop: '1.25rem', fontSize: '1rem', lineHeight: 1.75 }}>
            Transformamos tus retos de negocio en software eficiente, seguro y 100% a la medida.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }} className="services-cards">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={cardVariants}
                style={{
                  background: 'var(--light-surface)',
                  border: '1px solid var(--light-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.75rem',
                  cursor: 'default',
                  transition: 'all 0.3s',
                  display: 'flex', flexDirection: 'column', gap: '1rem',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                }}
                whileHover={{
                  y: -6,
                  boxShadow: '0 16px 48px rgba(37,99,255,0.1)',
                  borderColor: 'rgba(37,99,255,0.25)',
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 'var(--radius-sm)',
                  background: 'var(--blue-subtle)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1px solid rgba(37,99,255,0.15)',
                }}>
                  <Icon size={20} color="var(--blue-primary)" strokeWidth={1.5} />
                </div>

                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--light-text)' }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--light-muted)', lineHeight: 1.7 }}>
                    {service.description}
                  </p>
                </div>

                <div style={{
                  marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em',
                  color: 'var(--blue-primary)', textTransform: 'uppercase',
                }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ade80' }} />
                  {service.benefit}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        .services-cards { display:grid; grid-template-columns:repeat(3,1fr); gap:1.25rem; }
        @media (max-width:900px) { .services-cards { grid-template-columns:repeat(2,1fr) !important; } }
        @media (max-width:560px) { .services-cards { grid-template-columns:1fr !important; } }
        @media (max-width:768px) { #servicios { padding:5rem 0 !important; } }
        @media (max-width:480px) { #servicios { padding:4rem 0 !important; } }
      `}</style>
    </section>
  );
}
