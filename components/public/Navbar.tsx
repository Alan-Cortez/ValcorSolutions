'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import { Menu, X, ChevronDown, LayoutDashboard, LogOut, User } from 'lucide-react';

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { data: session } = useSession();
  const isAdmin = !!(session?.user as any)?.isAdmin;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const close = () => setUserMenuOpen(false);
    if (userMenuOpen) document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [userMenuOpen]);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Image src="/logo.png" alt="Valcor" width={36} height={36} style={{ objectFit: 'contain' }} />
          <span style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>Valcor</span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {l.label}
            </Link>
          ))}

          {session ? (
            /* User menu */
            <div style={{ position: 'relative' }} onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--bg-border)',
                  background: 'var(--bg-surface)',
                  color: 'var(--text-primary)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--blue-primary)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--bg-border)')}
              >
                {session.user?.image ? (
                  <img src={session.user.image} alt="" style={{ width: 24, height: 24, borderRadius: '50%', objectFit: 'cover' }} />
                ) : (
                  <User size={16} />
                )}
                <span style={{ maxWidth: 120, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {session.user?.name?.split(' ')[0]}
                </span>
                <ChevronDown size={14} style={{ color: 'var(--text-muted)', transition: 'transform 0.2s', transform: userMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </button>

              {userMenuOpen && (
                <div style={{
                  position: 'absolute',
                  top: 'calc(100% + 0.5rem)',
                  right: 0,
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--bg-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.5rem',
                  minWidth: 180,
                  boxShadow: 'var(--shadow-card)',
                  zIndex: 200,
                }}>
                  <div style={{ padding: '0.5rem 0.75rem', borderBottom: '1px solid var(--bg-border)', marginBottom: '0.5rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {session.user?.name}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {session.user?.email}
                    </div>
                  </div>
                  {isAdmin && (
                    <Link
                      href="/admin/dashboard"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 0.75rem',
                        fontSize: '0.85rem',
                        color: 'var(--blue-hover)',
                        borderRadius: 'var(--radius-sm)',
                        transition: 'background 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'var(--blue-subtle)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                    >
                      <LayoutDashboard size={14} />
                      Panel admin
                    </Link>
                  )}
                  <button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem 0.75rem',
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                      borderRadius: 'var(--radius-sm)',
                      transition: 'all 0.2s',
                      fontFamily: 'inherit',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(248,113,113,0.08)';
                      e.currentTarget.style.color = '#f87171';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    <LogOut size={14} />
                    Cerrar sesion
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login" className="btn btn-ghost" style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}>
              Iniciar sesion
            </Link>
          )}

          <Link href="#contacto" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>
            Hablemos
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{ color: 'var(--text-primary)', display: 'none' }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          background: 'rgba(8,8,8,0.98)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid var(--bg-border)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-secondary)', padding: '0.5rem 0' }}
            >
              {l.label}
            </Link>
          ))}
          {session ? (
            <>
              {isAdmin && (
                <Link href="/admin/dashboard" style={{ fontSize: '0.9rem', color: 'var(--blue-hover)', padding: '0.5rem 0' }}>
                  Panel admin
                </Link>
              )}
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                style={{ textAlign: 'left', color: '#f87171', fontSize: '0.9rem', padding: '0.5rem 0', fontFamily: 'inherit', cursor: 'pointer' }}
              >
                Cerrar sesion
              </button>
            </>
          ) : (
            <Link href="/login" onClick={() => setOpen(false)} className="btn btn-ghost">
              Iniciar sesion
            </Link>
          )}
          <Link href="#contacto" className="btn btn-primary" onClick={() => setOpen(false)}>
            Hablemos
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
