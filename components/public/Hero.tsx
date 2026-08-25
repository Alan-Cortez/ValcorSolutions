'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, ArrowDown, TrendingUp, Users, Star } from 'lucide-react';
import DotGrid from '../ui/DotGrid';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'var(--bg-primary)',
      }}
    >
      <DotGrid />

      <div style={{
        position: 'absolute', top: '30%', right: '10%',
        width: '500px', height: '500px',
        background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.08) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="container hero-grid" style={{ position: 'relative', zIndex: 10 }}>

        {/* LEFT */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '2rem' }}
          >
            <span className="badge">
              <span className="badge-dot" />
              Aceptando nuevos clientes — cupos limitados
            </span>
          </motion.div>

          {/* Headline — enfocado en beneficios */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-display hero-h1-solid">
              Tu negocio,
            </h1>
            <h1 className="text-display hero-h1-solid" style={{ marginBottom: '0.5rem' }}>
              en línea.
            </h1>
            <h1 className="text-display hero-h1-outline">
              Y vendiendo.
            </h1>
          </motion.div>

          {/* Subtext — sin tecnicismos */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.05rem',
              marginBottom: '2.5rem',
              lineHeight: 1.8,
              maxWidth: '460px',
            }}
          >
            Creamos sitios web profesionales que atraen clientes, generan confianza
            y hacen crecer tu negocio — <strong style={{ color: 'var(--text-primary)' }}>sin que tú tengas que saber nada de tecnología.</strong>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}
          >
            <Link href="#contacto" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Quiero mi sitio web <ArrowUpRight size={15} />
            </Link>
            <Link href="#proyectos" className="btn btn-ghost">
              Ver ejemplos
            </Link>
          </motion.div>

          {/* Social proof mini */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '2.5rem', flexWrap: 'wrap' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ display: 'flex' }}>
                {['CM','SE','MT','AG','RV'].map((init, i) => (
                  <div key={init} style={{
                    width: 30, height: 30, borderRadius: '50%',
                    background: `hsl(${i * 60}, 40%, 25%)`,
                    border: '2px solid var(--bg-primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.6rem', fontWeight: 700, color: 'var(--text-secondary)',
                    marginLeft: i > 0 ? '-8px' : 0,
                  }}>
                    {init}
                  </div>
                ))}
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>+30 clientes felices</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={13} fill="#fbbf24" color="#fbbf24" />
              ))}
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '0.25rem' }}>5.0 / 5.0</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — social proof + resultado visual */}
        <motion.div
          className="hero-right-panel"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          {/* Resultado card */}
          <div style={{
            background: 'var(--bg-surface)', border: '1px solid var(--bg-border)',
            borderRadius: 'var(--radius-md)', padding: '2rem',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: -60, right: -60,
              width: 180, height: 180,
              background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  Resultado promedio
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  Nuestros clientes reportan:
                </div>
              </div>
              <TrendingUp size={20} color="var(--text-muted)" strokeWidth={1.5} />
            </div>

            {[
              { label: 'Más clientes potenciales', value: '+65%' },
              { label: 'Más ventas online',        value: '+40%' },
              { label: 'Más tiempo libre',         value: '+∞'   },
            ].map((item, i) => (
              <div key={item.label} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '0.875rem 0',
                borderBottom: i < 2 ? '1px solid var(--bg-border)' : 'none',
              }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{item.label}</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--white)', letterSpacing: '-0.02em' }}>{item.value}</span>
              </div>
            ))}
          </div>

          {/* Testimonial mini */}
          <div style={{
            background: 'var(--bg-surface)', border: '1px solid var(--bg-border)',
            borderRadius: 'var(--radius-md)', padding: '1.5rem',
          }}>
            <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '0.75rem' }}>
              {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="#fbbf24" color="#fbbf24" />)}
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem', fontStyle: 'italic' }}>
              "Las ventas de mi boutique online crecieron 40% el primer mes. ¡No puedo creer que antes no tenía un sitio así!"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: 34, height: 34, borderRadius: '50%',
                background: 'var(--bg-surface-2)', border: '1px solid var(--bg-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-secondary)',
              }}>
                SR
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--white)' }}>Sofía Ramírez</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Boutique Elara</div>
              </div>
            </div>
          </div>

          {/* Quick stat pills */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--bg-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            {[
              { icon: Users,     value: '+30',   label: 'Clientes felices' },
              { icon: TrendingUp, value: '+50',   label: 'Proyectos listos' },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.label} style={{ background: 'var(--bg-surface)', padding: '1.25rem', textAlign: 'center' }}>
                  <Icon size={16} color="var(--text-muted)" strokeWidth={1.5} style={{ margin: '0 auto 0.5rem' }} />
                  <div style={{ fontSize: '1.75rem', fontWeight: 900, letterSpacing: '-0.04em', color: 'var(--white)', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '0.3rem', fontWeight: 600, letterSpacing: '0.06em' }}>{s.label}</div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="hero-scroll-indicator"
        style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        }}
      >
        <span style={{ fontSize: '0.62rem', letterSpacing: '0.18em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}>
          <ArrowDown size={14} color="var(--text-muted)" />
        </motion.div>
      </motion.div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          padding-top: 9rem;
          padding-bottom: 5rem;
        }
        .hero-h1-solid {
          color: var(--white);
          text-transform: uppercase;
          line-height: 1;
          margin-bottom: 0.2rem;
        }
        .hero-h1-outline {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.22);
          margin-bottom: 1.75rem;
          text-transform: uppercase;
          line-height: 1;
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 3rem !important; padding-top: 8rem !important; }
          .hero-right-panel { display: none !important; }
        }
        @media (max-width: 640px) {
          .hero-grid { padding-top: 7rem !important; padding-bottom: 4rem !important; }
          .hero-scroll-indicator { display: none !important; }
          .hero-h1-outline { -webkit-text-stroke: 1px rgba(255,255,255,0.22) !important; }
        }
      `}</style>
    </section>
  );
}
