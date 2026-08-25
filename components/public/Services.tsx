'use client';

import { motion } from 'framer-motion';
import { Globe, ShoppingBag, Search, Phone, Wrench, LayoutDashboard } from 'lucide-react';

const services = [
  { icon: Globe,          title: 'Sitio Web que Vende',        description: 'Una presencia online profesional que le da confianza a tus clientes y los convierte en compradores desde el primer clic.', benefit: 'Más clientes potenciales' },
  { icon: ShoppingBag,    title: 'Tienda Online',               description: 'Vende tus productos las 24 horas, los 7 días de la semana, sin depender de redes sociales ni ferias.', benefit: 'Ventas mientras duermes' },
  { icon: Search,         title: 'Aparecer en Google',          description: 'Cuando alguien busca lo que tú ofreces, queremos que te encuentren a ti primero — no a tu competencia.', benefit: 'Clientes que te buscan' },
  { icon: LayoutDashboard,title: 'Portal para tus Clientes',    description: 'Un espacio digital donde tus clientes pueden consultar pedidos, cotizaciones o reservas fácilmente.', benefit: 'Atención automática' },
  { icon: Phone,          title: 'Tu Negocio en el Celular',    description: 'Un sitio que se ve perfecto en cualquier dispositivo. Tus clientes te encontrarán desde donde sea.', benefit: 'Siempre disponible' },
  { icon: Wrench,         title: 'Soporte Sin Estrés',          description: 'Nos encargamos de que todo siga funcionando perfecto. Tú enfócate en tu negocio, nosotros en la tecnología.', benefit: 'Cero preocupaciones' },
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
            Todo lo que necesitas para{' '}
            <span className="accent-light">crecer en internet.</span>
          </h2>
          <p style={{ color: 'var(--light-muted)', marginTop: '1.25rem', fontSize: '1rem', lineHeight: 1.75 }}>
            Sin tecnicismos. Te explicamos todo en tu idioma y nos encargamos del resto.
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
