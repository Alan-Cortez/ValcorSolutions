'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'Servicios',    href: '#servicios' },
  { label: 'Proyectos',   href: '#proyectos' },
  { label: 'Proceso',     href: '#proceso' },
  { label: 'Testimonios', href: '#testimonios' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(8,12,20,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--bg-border)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>
          <Image src="/logo.png" alt="Valcor" width={30} height={30} style={{ objectFit: 'contain' }} />
          <span style={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.03em', color: 'var(--white)' }}>
            Valcor
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '2.25rem' }}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ fontSize: '0.825rem', fontWeight: 500, color: 'var(--text-secondary)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA pill — desktop */}
        <Link href="#contacto" className="btn-pill nav-desktop">
          Hablemos <ArrowUpRight size={13} />
        </Link>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="nav-mobile-btn"
          aria-label="Menu"
          style={{ color: 'var(--text-primary)', display: 'none', padding: '0.25rem' }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          background: 'rgba(8,12,20,0.98)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid var(--bg-border)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
        }}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: '1rem', fontWeight: 500,
                color: 'var(--text-secondary)',
                padding: '0.875rem 0',
                borderBottom: '1px solid var(--bg-border)',
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            className="btn btn-primary"
            onClick={() => setOpen(false)}
            style={{ marginTop: '1.25rem', justifyContent: 'center' }}
          >
            Hablemos
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
