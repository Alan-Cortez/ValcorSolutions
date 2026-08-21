'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import DotGrid from '../ui/DotGrid';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--bg-primary)',
      }}
    >
      <DotGrid />

      {/* Blue radial glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '400px',
        background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '7rem', paddingBottom: '6rem' }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <span className="badge">
            <span className="badge-dot" />
            Disponibles para nuevos proyectos
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-display gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ maxWidth: '880px', marginBottom: '1.5rem' }}
        >
          Construimos<br />experiencias digitales.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-body text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{ maxWidth: '520px', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: 1.8 }}
        >
          Disenamos y desarrollamos sitios web y aplicaciones a medida que
          generan resultados reales para tu empresa.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
        >
          <Link href="#proyectos" className="btn btn-primary">
            Ver proyectos
          </Link>
          <Link href="#contacto" className="btn btn-ghost">
            Hablemos
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{
            display: 'flex',
            gap: '3rem',
            marginTop: '5rem',
            paddingTop: '3rem',
            borderTop: '1px solid var(--bg-border)',
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: '+50', label: 'Proyectos entregados' },
            { value: '+30', label: 'Clientes satisfechos' },
            { value: '5', label: 'Anos de experiencia' },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem', letterSpacing: '0.02em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div style={{
          width: '1px',
          height: '48px',
          background: 'linear-gradient(to bottom, var(--blue-primary), transparent)',
          animation: 'fadeIn 1.5s ease-in-out infinite alternate',
        }} />
      </motion.div>
    </section>
  );
}
