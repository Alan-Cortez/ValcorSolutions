'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  { name: 'Carlos Mendez',   company: 'Grupo Inmobiliario Apex', role: 'Director General', content: 'Valcor transformó por completo nuestra presencia digital. El resultado superó nuestras expectativas en diseño, velocidad y conversión.', rating: 5 },
  { name: 'Sofía Ramírez',   company: 'Boutique Elara',          role: 'Fundadora',        content: 'Profesionales de primer nivel. Cada detalle del sitio refleja exactamente lo que queríamos y las ventas online crecieron un 40%.', rating: 5 },
  { name: 'Miguel Torres',   company: 'TechFlow Solutions',       role: 'CEO',              content: 'Entregaron a tiempo, sin sorpresas y con una calidad impresionante. El sitio se ve increíble en todos los dispositivos.', rating: 5 },
  { name: 'Ana Gutiérrez',   company: 'Restaurante Lumina',       role: 'Gerente',          content: 'Nuestras reservas online se triplicaron desde que lanzamos el nuevo sitio. La atención al detalle es incomparable.', rating: 5 },
  { name: 'Roberto Vega',    company: 'FinSecure',                role: 'Director',         content: 'Comunicación clara, entregas puntuales y un producto final de clase mundial. Los recomiendo sin dudarlo.', rating: 5 },
  { name: 'Laura Castillo',  company: 'Academia Digital Pro',     role: 'Directora',        content: 'Construyeron nuestra plataforma desde cero. Robusta, elegante y exactamente lo que nuestros alumnos necesitaban.', rating: 5 },
];

const all = [...reviews, ...reviews];

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="glass" style={{
      minWidth: 340, padding: '1.75rem', marginRight: '1rem', flexShrink: 0,
    }}>
      <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '0.875rem' }}>
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={12} fill="#fbbf24" color="#fbbf24" />
        ))}
      </div>
      <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem', fontStyle: 'italic' }}>
        &ldquo;{review.content}&rdquo;
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'linear-gradient(135deg, #1a2a8f, var(--blue-primary))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.7rem', fontWeight: 700, color: '#fff', flexShrink: 0,
        }}>
          {review.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--white)' }}>{review.name}</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>
            {review.role} — {review.company}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="testimonios" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--bg-border)', overflow: 'hidden', padding: '7rem 0', position: 'relative' }}>

      {/* blob */}
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-5%', width: 400, height: 400,
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        background: 'rgba(37,99,255,0.08)', filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div className="container" style={{ marginBottom: '3.5rem', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="section-label">Testimonios</div>
          <h2 className="text-headline">
            Clientes que <span className="accent">aman</span> trabajar con nosotros.
          </h2>
        </motion.div>
      </div>

      {/* Marquee row 1 */}
      <div style={{ overflow: 'hidden', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', width: 'max-content', animation: 'marquee 40s linear infinite' }}>
          {all.map((r, i) => <ReviewCard key={i} review={r} />)}
        </div>
      </div>

      {/* Marquee row 2 reverse */}
      <div style={{ overflow: 'hidden' }}>
        <div style={{ display: 'flex', width: 'max-content', animation: 'marquee 40s linear infinite reverse' }}>
          {[...all].reverse().map((r, i) => <ReviewCard key={i} review={r} />)}
        </div>
      </div>

      <style>{`
        @media (max-width:768px) { #testimonios { padding:5rem 0 !important; } }
        @media (max-width:480px) { #testimonios { padding:4rem 0 !important; } }
      `}</style>
    </section>
  );
}
