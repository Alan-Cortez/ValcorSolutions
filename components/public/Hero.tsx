'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, ArrowDown, Star, TrendingUp, Users } from 'lucide-react';
import DotGrid from '../ui/DotGrid';

export default function Hero() {
  return (
    <section id="hero" style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      overflow: 'hidden', background: 'var(--bg-primary)',
    }}>
      <DotGrid />

      {/* BLOBS */}
      <div className="blob blob-blue" style={{ width: 600, height: 600, top: '-10%', right: '-8%', opacity: 0.7 }} />
      <div className="blob blob-indigo" style={{ width: 400, height: 400, top: '50%', right: '5%', opacity: 0.5 }} />
      <div className="blob blob-cyan" style={{ width: 300, height: 300, bottom: '5%', left: '15%', opacity: 0.4 }} />

      <div className="container hero-grid" style={{ position: 'relative', zIndex: 10 }}>

        {/* LEFT */}
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ marginBottom: '2rem' }}>
            <span className="badge">
              <span className="badge-dot" />
              Aceptando nuevos clientes — cupos limitados
            </span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
            <h1 className="text-display" style={{ color: 'var(--white)', marginBottom: '0.2rem' }}>
              Tu negocio,
            </h1>
            <h1 className="text-display" style={{ color: 'var(--white)', marginBottom: '0.2rem' }}>
              en línea.
            </h1>
            <h1 className="text-display" style={{ marginBottom: '1.75rem' }}>
              <span className="accent">Y vendiendo.</span>
            </h1>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '2.5rem', lineHeight: 1.8, maxWidth: '460px' }}>
            Creamos sitios web que atraen clientes y generan ventas —{' '}
            <strong style={{ color: 'var(--text-primary)' }}>sin que tú tengas que saber nada de tecnología.</strong>
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link href="#contacto" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Quiero mi sitio web <ArrowUpRight size={15} />
            </Link>
            <Link href="#proyectos" className="btn btn-ghost">
              Ver ejemplos
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ display: 'flex' }}>
                {['CM','SE','MT','AG','RV'].map((init, i) => (
                  <div key={init} style={{
                    width: 30, height: 30, borderRadius: '50%',
                    background: `hsl(${210 + i * 30}, 50%, 25%)`,
                    border: '2px solid var(--bg-primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.58rem', fontWeight: 700, color: 'var(--text-secondary)',
                    marginLeft: i > 0 ? '-8px' : 0,
                  }}>{init}</div>
                ))}
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>+30 clientes felices</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              {[1,2,3,4,5].map(i => <Star key={i} size={13} fill="#fbbf24" color="#fbbf24" />)}
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '0.25rem' }}>5.0 / 5.0</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — floating glass cards */}
        <motion.div className="hero-right-panel"
          initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {/* Main glass card */}
          <motion.div className="glass" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'linear-gradient(135deg, rgba(37,99,255,0.12) 0%, transparent 60%)',
            }} />
            <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--blue-vivid)', marginBottom: '1.25rem' }}>
              ✦ Resultados reales
            </div>
            {[
              { label: 'Más clientes potenciales', value: '+65%', bar: 65 },
              { label: 'Más ventas online',         value: '+40%', bar: 40 },
              { label: 'Satisfacción garantizada',  value: '99%',  bar: 99 },
            ].map((item) => (
              <div key={item.label} style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{item.label}</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--blue-vivid)' }}>{item.value}</span>
                </div>
                <div style={{ height: '3px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
                  <motion.div
                    initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ height: '100%', width: `${item.bar}%`, borderRadius: '2px', transformOrigin: 'left',
                      background: 'linear-gradient(90deg, var(--blue-primary), var(--blue-vivid))' }}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Two small cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <motion.div className="glass" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.5 }}
              style={{ padding: '1.25rem', textAlign: 'center' }}>
              <Users size={18} color="var(--blue-vivid)" style={{ margin: '0 auto 0.5rem' }} />
              <div style={{ fontSize: '1.75rem', fontWeight: 900, letterSpacing: '-0.04em', color: 'var(--white)', lineHeight: 1 }}>+30</div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '0.3rem', fontWeight: 600 }}>Clientes felices</div>
            </motion.div>
            <motion.div className="glass" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
              style={{ padding: '1.25rem', textAlign: 'center' }}>
              <TrendingUp size={18} color="var(--blue-vivid)" style={{ margin: '0 auto 0.5rem' }} />
              <div style={{ fontSize: '1.75rem', fontWeight: 900, letterSpacing: '-0.04em', color: 'var(--white)', lineHeight: 1 }}>+50</div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '0.3rem', fontWeight: 600 }}>Proyectos listos</div>
            </motion.div>
          </div>

          {/* Testimonial mini */}
          <motion.div className="glass" animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 0.2 }}
            style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '0.6rem' }}>
              {[1,2,3,4,5].map(i => <Star key={i} size={11} fill="#fbbf24" color="#fbbf24" />)}
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '0.875rem' }}>
              "Las ventas de mi boutique crecieron 40% el primer mes. ¡Increíble!"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{
                width: 30, height: 30, borderRadius: '50%',
                background: 'linear-gradient(135deg, #1a3a8f, #2563ff)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.65rem', fontWeight: 700, color: '#fff',
              }}>SR</div>
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--white)' }}>Sofía Ramírez</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Boutique Elara</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.6 }}
        className="hero-scroll-indicator"
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
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
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 3rem !important; padding-top: 8rem !important; }
          .hero-right-panel { display: none !important; }
        }
        @media (max-width: 640px) {
          .hero-grid { padding-top: 7rem !important; padding-bottom: 4rem !important; }
          .hero-scroll-indicator { display: none !important; }
        }
      `}</style>
    </section>
  );
}
