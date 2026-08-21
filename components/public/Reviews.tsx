'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Carlos Mendez',
    company: 'Grupo Inmobiliario Apex',
    role: 'Director General',
    content: 'Valcor transformo por completo nuestra presencia digital. El resultado supero nuestras expectativas en diseno, velocidad y conversion.',
    rating: 5,
  },
  {
    name: 'Sofia Ramirez',
    company: 'Boutique Elara',
    role: 'Fundadora',
    content: 'Profesionales de primer nivel. Cada detalle del sitio refleja exactamente lo que queriamos y las ventas online crecieron un 40%.',
    rating: 5,
  },
  {
    name: 'Miguel Torres',
    company: 'TechFlow Solutions',
    role: 'CTO',
    content: 'Su stack tecnico y la calidad del codigo son sobresalientes. Entregaron a tiempo, documentado y sin sorpresas.',
    rating: 5,
  },
  {
    name: 'Ana Gutierrez',
    company: 'Restaurante Lumina',
    role: 'Gerente',
    content: 'Nuestras reservas online se triplicaron desde que lanzamos el nuevo sitio. La atencion al detalle de Valcor es incomparable.',
    rating: 5,
  },
  {
    name: 'Roberto Vega',
    company: 'FinSecure',
    role: 'CEO',
    content: 'Trabajar con Valcor fue una experiencia impecable. Comunicacion clara, entregas puntuales y un producto final de clase mundial.',
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

// Duplicate for infinite scroll
const all = [...reviews, ...reviews];

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div style={{
      minWidth: 360,
      background: 'var(--bg-surface)',
      border: '1px solid var(--bg-border)',
      borderRadius: 'var(--radius-md)',
      padding: '2rem',
      marginRight: '1.25rem',
    }}>
      {/* Stars */}
      <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={14} fill="var(--blue-primary)" color="var(--blue-primary)" />
        ))}
      </div>
      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
        &ldquo;{review.content}&rdquo;
      </p>
      <div>
        <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{review.name}</div>
        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
          {review.role} &mdash; {review.company}
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="testimonios" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--bg-border)', overflow: 'hidden' }}>
      <div className="container" style={{ marginBottom: '3.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Testimonios</div>
          <h2 className="text-headline">
            Lo que dicen<br />
            <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>nuestros clientes.</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee row 1 */}
      <div style={{ overflow: 'hidden', marginBottom: '1.25rem' }}>
        <div style={{
          display: 'flex',
          width: 'max-content',
          animation: 'marquee 35s linear infinite',
        }}>
          {all.map((r, i) => <ReviewCard key={i} review={r} />)}
        </div>
      </div>

      {/* Marquee row 2 (reverse) */}
      <div style={{ overflow: 'hidden' }}>
        <div style={{
          display: 'flex',
          width: 'max-content',
          animation: 'marquee 35s linear infinite reverse',
        }}>
          {[...all].reverse().map((r, i) => <ReviewCard key={i} review={r} />)}
        </div>
      </div>
    </section>
  );
}
