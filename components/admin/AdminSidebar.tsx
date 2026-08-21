'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import {
  LayoutDashboard,
  FolderOpen,
  Inbox,
  Mail,
  Star,
  LogOut,
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Proyectos', href: '/admin/proyectos', icon: FolderOpen },
  { label: 'Solicitudes', href: '/admin/solicitudes', icon: Inbox },
  { label: 'Contactos', href: '/admin/contactos', icon: Mail },
  { label: 'Resenas', href: '/admin/resenas', icon: Star },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <aside className="admin-sidebar">
      {/* Brand */}
      <div style={{ padding: '0 1.5rem', marginBottom: '2rem' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Image src="/logo.png" alt="Valcor" width={30} height={30} style={{ objectFit: 'contain' }} />
          <span style={{ fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.02em' }}>Valcor</span>
        </Link>
        <div style={{
          marginTop: '0.5rem',
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          paddingLeft: '2.5rem',
        }}>
          Admin
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1 }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href || pathname.startsWith(item.href + '/');
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`admin-nav-item${active ? ' active' : ''}`}
            >
              <Icon size={17} strokeWidth={1.75} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* User */}
      {session?.user && (
        <div style={{
          margin: '1rem 1rem 0',
          padding: '1rem',
          background: 'var(--bg-surface)',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--bg-border)',
        }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 500, marginBottom: '0.25rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {session.user.name}
          </div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.75rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {session.user.email}
          </div>
          <button
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              transition: 'color 0.2s',
              fontFamily: 'inherit',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#f87171')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <LogOut size={14} /> Cerrar sesion
          </button>
        </div>
      )}
    </aside>
  );
}
