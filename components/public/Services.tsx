'use client';

import { motion } from 'framer-motion';
import { Globe, ShoppingBag, Search, Phone, Wrench, LayoutDashboard } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Sitio Web que Vende',
    description: 'Una presencia online profesional que le da confianza a tus clientes y los convierte en compradores desde el primer clic.',
    benefit: 'Más clientes potenciales',
  },
  {
    icon: ShoppingBag,
    title: 'Tienda Online',
    description: 'Vende tus productos las 24 horas, los 7 días de la semana, sin depender de redes sociales ni ferias.',
    benefit: 'Ventas mientras duermes',
  },
  {
    icon: Search,
    title: 'Aparecer en Google',
    description: 'Cuando alguien busca lo que tú ofreces, queremos que te encuentre a ti primero — no a tu competencia.',
    benefit: 'Clientes que te buscan',
  },
  {
    icon: LayoutDashboard,
    title: 'Portal para tus Clientes',
    description: 'Un espacio digital exclusivo donde tus clientes pueden consultar pedidos, cotizaciones o reservas fácilmente.',
    benefit: 'Atención automática',
  },
  {
    icon: Phone,
    title: 'Tu Negocio en el Celular',
    description: 'Un sitio que se ve perfecto en cualquier dispositivo. Tus clientes te encontrarán desde donde sea.',
    benefit: 'Siempre disponible',
  },
  {
    icon: Wrench,
    title: 'Soporte Sin Estrés',
    description: 'Nos encargamos de que todo siga funcionando perfecto. Tú enfócate en tu negocio, nosotros en la tecnología.',
    benefit: 'Cero preocupaciones',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};

export default function Services() {
  return (
    <section id="servicios" className="section" style={{ borderTop: '1px solid var(--bg-border)' }}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem', maxWidth: 700 }}
        >
          <div className="section-label">¿Qué hacemos?</div>
          <h2 className="text-headline">
            Todo lo que tu negocio necesita{' '}
            <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>para crecer en internet.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1.25rem', fontSize: '1rem', lineHeight: 1.75 }}>
            Sin tecnicismos, sin complicaciones. Te explicamos todo en tu idioma y nos encargamos del resto.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="services-cards"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--bg-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem',
                  cursor: 'default',
                  transition: 'border-color 0.25s, box-shadow 0.25s',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
                whileHover={{
                  borderColor: 'rgba(255,255,255,0.15)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                  y: -4,
                }}
              >
                {/* Icon */}
                <div style={{
                  width: 42, height: 42,
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-surface-2)',
                  border: '1px solid var(--bg-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={19} color="var(--text-secondary)" strokeWidth={1.5} />
                </div>

                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--white)' }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {service.description}
                  </p>
                </div>

                {/* Benefit tag */}
                <div style={{
                  marginTop: 'auto',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
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
        .services-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        @media (max-width: 900px) {
          .services-cards { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .services-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
