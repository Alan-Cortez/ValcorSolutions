'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import DotGrid from '../ui/DotGrid';

const stats = [
  { value: '+50', label: 'Proyectos\nentregados' },
  { value: '+30', label: 'Clientes\nsatisfechos' },
  { value: '5',   label: 'Años de\nexperiencia' },
  { value: '99%', label: 'Tasa de\nsatisfacción' },
];

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

      {/* Subtle radial glow — kept from original */}
      <div style={{
        position: 'absolute',
        top: '30%',
        right: '10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.08) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          paddingTop: '9rem',
          paddingBottom: '5rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        {/* LEFT — editorial content */}
        <div>
          {/* Badge — kept from original */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '2.5rem' }}
          >
            <span className="badge">
              <span className="badge-dot" />
              Disponibles para nuevos proyectos
            </span>
          </motion.div>

          {/* Headline — editorial super bold */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              className="text-display"
              style={{
                color: 'var(--white)',
                marginBottom: '1rem',
                textTransform: 'uppercase',
              }}
            >
              Construimos
            </h1>
            <h1
              className="text-display"
              style={{
                color: 'transparent',
                WebkitTextStroke: '1.5px rgba(255,255,255,0.25)',
                marginBottom: '2rem',
                textTransform: 'uppercase',
              }}
            >
              Digital.
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            className="text-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{
              color: 'var(--text-secondary)',
              maxWidth: '420px',
              fontSize: '1rem',
              marginBottom: '2.5rem',
              lineHeight: 1.8,
            }}
          >
            Diseñamos y desarrollamos sitios web y aplicaciones a medida que
            generan resultados reales para tu empresa.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}
          >
            <Link
              href="#proyectos"
              className="btn btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              Ver proyectos <ArrowUpRight size={15} />
            </Link>
            <Link href="#contacto" className="btn btn-ghost">
              Hablemos
            </Link>
          </motion.div>
        </div>

        {/* RIGHT — visual / stats card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}
        >
          {/* Big visual card */}
          <div
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--bg-border)',
              borderRadius: 'var(--radius-md)',
              padding: '3rem 2.5rem',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '1rem',
            }}
          >
            {/* Decorative glow */}
            <div style={{
              position: 'absolute',
              top: -60,
              right: -60,
              width: 200,
              height: 200,
              background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            <div style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '1.5rem',
            }}>
              Disponible para freelance
            </div>

            <div
              className="text-display-md"
              style={{
                color: 'var(--white)',
                lineHeight: 1,
                marginBottom: '0.25rem',
                textTransform: 'uppercase',
              }}
            >
              Exp.
            </div>
            <div style={{
              fontSize: 'clamp(4rem, 8vw, 7rem)',
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: '-0.04em',
              color: 'transparent',
              WebkitTextStroke: '1px rgba(255,255,255,0.2)',
            }}>
              Digital
            </div>

            {/* Small sparkle */}
            <div style={{
              position: 'absolute',
              bottom: '2rem',
              right: '2rem',
              fontSize: '1.5rem',
              opacity: 0.3,
            }}>
              ✦
            </div>
          </div>

          {/* Stats grid 2x2 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1px',
            background: 'var(--bg-border)',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
          }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
                style={{
                  background: 'var(--bg-surface)',
                  padding: '1.5rem',
                  textAlign: 'center',
                }}
              >
                <div style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                  color: 'var(--white)',
                  lineHeight: 1,
                  marginBottom: '0.4rem',
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.04em',
                  fontWeight: 500,
                  whiteSpace: 'pre-line',
                  lineHeight: 1.4,
                }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator — kept from original */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span style={{
          fontSize: '0.65rem',
          letterSpacing: '0.18em',
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
        }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} color="var(--text-muted)" />
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          #hero > .container { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
