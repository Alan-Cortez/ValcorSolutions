'use client';

import Link from 'next/link';
import Image from 'next/image';

const footerLinks = [
  {
    title: 'Servicios',
    links: [
      { label: 'Diseno Web', href: '#servicios' },
      { label: 'Desarrollo a Medida', href: '#servicios' },
      { label: 'E-commerce', href: '#servicios' },
      { label: 'SEO Tecnico', href: '#servicios' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Proyectos', href: '#proyectos' },
      { label: 'Proceso', href: '#proceso' },
      { label: 'Testimonios', href: '#testimonios' },
      { label: 'Contacto', href: '#contacto' },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid var(--bg-border)',
      background: 'var(--bg-primary)',
      padding: '4rem 0 2.5rem',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto auto',
          gap: '4rem',
          marginBottom: '3.5rem',
          alignItems: 'start',
        }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <Image src="/logo.png" alt="Valcor" width={32} height={32} style={{ objectFit: 'contain' }} />
              <span style={{ fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.02em' }}>Valcor</span>
            </Link>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: 300 }}>
              Disenamos y desarrollamos experiencias digitales que impulsan el crecimiento de tu empresa.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <div style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '1.25rem',
              }}>
                {col.title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {col.links.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          borderTop: '1px solid var(--bg-border)',
          paddingTop: '1.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            &copy; {year} Valcor. Todos los derechos reservados.
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Hecho con precision en Mexico
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          footer .container > div:first-child { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </footer>
  );
}
