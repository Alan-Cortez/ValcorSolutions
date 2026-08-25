'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FolderOpen, Users, Sparkles, Globe } from 'lucide-react';

const stats = [
  { value: 50, suffix: '+', label: 'Proyectos completados', Icon: FolderOpen },
  { value: 30, suffix: '+', label: 'Clientes satisfechos',  Icon: Users },
  { value: 5,  suffix: '',  label: 'Años de experiencia',   Icon: Sparkles },
  { value: 12, suffix: '',  label: 'Países alcanzados',      Icon: Globe },
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
      }}
    >
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => {
            const Icon = stat.Icon;
            return (
              <motion.div
                key={stat.label}
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
              >
                <Icon size={18} color="var(--text-muted)" strokeWidth={1.5} />
                <div style={{
                  fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.05em',
                  color: 'var(--white)',
                  lineHeight: 1,
                }}>
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div style={{
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                }}>
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .stat-item {
          padding: 2.5rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          border-right: 1px solid var(--bg-border);
        }
        .stat-item:last-child {
          border-right: none;
        }

        /* Tablet: 2 columns */
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .stat-item {
            border-right: none !important;
            border-bottom: 1px solid var(--bg-border);
          }
          .stat-item:nth-child(odd) {
            border-right: 1px solid var(--bg-border) !important;
          }
          .stat-item:nth-last-child(-n+2) {
            border-bottom: none;
          }
          .stat-item {
            padding: 2rem 1.5rem !important;
          }
        }

        /* Mobile: 2 columns compact */
        @media (max-width: 480px) {
          .stat-item {
            padding: 1.5rem 1rem !important;
            gap: 0.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
