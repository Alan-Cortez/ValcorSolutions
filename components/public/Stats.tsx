'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FolderOpen, Users, Sparkles, Globe } from 'lucide-react';

const stats = [
  { value: 50, suffix: '+', label: 'Proyectos completados', Icon: FolderOpen },
  { value: 30, suffix: '+', label: 'Clientes satisfechos',  Icon: Users },
  { value: 5,  suffix: '',  label: 'Años de experiencia',  Icon: Sparkles },
  { value: 12, suffix: '',  label: 'Países alcanzados',     Icon: Globe },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span ref={ref} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      id="metricas"
      style={{
        borderTop: '1px solid var(--bg-border)',
        borderBottom: '1px solid var(--bg-border)',
        background: 'var(--bg-secondary)',
        padding: '0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
          }}
        >
          {stats.map((stat, i) => {
            const Icon = stat.Icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                style={{
                  padding: '2.5rem 2rem',
                  borderRight: i < 3 ? '1px solid var(--bg-border)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                {/* Icon */}
                <Icon size={18} color="var(--text-muted)" strokeWidth={1.5} />

                {/* Number */}
                <div
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 900,
                    letterSpacing: '-0.05em',
                    color: 'var(--white)',
                    lineHeight: 1,
                  }}
                >
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #metricas .container > div { grid-template-columns: repeat(2, 1fr) !important; }
          #metricas .container > div > div { border-right: none !important; border-bottom: 1px solid var(--bg-border); }
        }
      `}</style>
    </section>
  );
}
