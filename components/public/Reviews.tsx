'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Carlos Mendez',
    company: 'Grupo Inmobiliario Apex',
    role: 'Director General',
    content: 'Valcor transformó por completo nuestra presencia digital. El resultado superó nuestras expectativas en diseño, velocidad y conversión.',
    rating: 5,
  },
  {
    name: 'Sofía Ramírez',
    company: 'Boutique Elara',
    role: 'Fundadora',
    content: 'Profesionales de primer nivel. Cada detalle del sitio refleja exactamente lo que queríamos y las ventas online crecieron un 40%.',
    rating: 5,
  },
  {
    name: 'Miguel Torres',
    company: 'TechFlow Solutions',
    role: 'CTO',
    content: 'Su stack técnico y la calidad del código son sobresalientes. Entregaron a tiempo, documentado y sin sorpresas.',
    rating: 5,
  },
  {
    name: 'Ana Gutiérrez',
    company: 'Restaurante Lumina',
    role: 'Gerente',
    content: 'Nuestras reservas online se triplicaron desde que lanzamos el nuevo sitio. La atención al detalle de Valcor es incomparable.',
    rating: 5,
  },
  {
    name: 'Roberto Vega',
    company: 'FinSecure',
    role: 'CEO',
    content: 'Trabajar con Valcor fue una experiencia impecable. Comunicación clara, entregas puntuales y un producto final de clase mundial.',
    rating: 5,
  },
  {
    name: 'Laura Castillo',
    company: 'Academia Digital Pro',
    role: 'Directora',
    content: 'Construyeron nuestra plataforma e-learning desde cero. Robusta, elegante y exactamente lo que nuestros alumnos necesitaban.',
    rating: 5,
  },
];

const all = [...reviews, ...reviews];

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div
      style={{
        minWidth: 340,
        background: 'var(--bg-surface)',
        border: '1px solid var(--bg-border)',
        borderRadius: 'var(--radius-md)',
        padding: '2rem',
        marginRight: '1rem',
        flexShrink: 0,
      }}
    >
      {/* Stars */}
      <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={12} fill="var(--white)" color="var(--white)" />
        ))}
      </div>

      <p style={{
        fontSize: '0.875rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.75,
        marginBottom: '1.5rem',
        fontStyle: 'italic',
      }}>
        &ldquo;{review.content}&rdquo;
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {/* Avatar initials */}
        <div style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          background: 'var(--bg-surface-2)',
          border: '1px solid var(--bg-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.75rem',
          fontWeight: 700,
          color: 'var(--text-secondary)',
          flexShrink: 0,
        }}>
          {review.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--white)' }}>{review.name}</div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>
            {review.role} — {review.company}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      id="testimonios"
      className="section"
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--bg-border)',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ marginBottom: '3.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Testimonios</div>
          <h2 className="text-headline">
            Lo que dicen{' '}
            <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>nuestros clientes.</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee row 1 — left */}
      <div style={{ overflow: 'hidden', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', width: 'max-content', animation: 'marquee 40s linear infinite' }}>
          {all.map((r, i) => <ReviewCard key={i} review={r} />)}
        </div>
      </div>

      {/* Marquee row 2 — right (reverse) */}
      <div style={{ overflow: 'hidden' }}>
        <div style={{ display: 'flex', width: 'max-content', animation: 'marquee 40s linear infinite reverse' }}>
          {[...all].reverse().map((r, i) => <ReviewCard key={i} review={r} />)}
        </div>
      </div>
    </section>
  );
}
