import { auth } from './lib/auth';
import { NextResponse } from 'next/server';

export default auth((req) => {
  const pathname = req.nextUrl.pathname;
  const isAdminRoute = pathname.startsWith('/admin');
  const isAdminLogin = pathname === '/admin/login';
  const session = req.auth;
  const isAuthenticated = !!session;
  const isAdmin = !!(session?.user as any)?.isAdmin;

  // Rutas /admin: requieren autenticacion Y ser admin
  if (isAdminRoute && !isAdminLogin) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/login?callbackUrl=/admin/dashboard', req.url));
    }
    if (!isAdmin) {
      // Usuario logueado pero no es admin -> redirigir al inicio
      return NextResponse.redirect(new URL('/?error=unauthorized', req.url));
    }
  }

  // Si ya es admin y va al login de admin, redirigir al dashboard
  if (isAdminLogin && isAdmin) {
    return NextResponse.redirect(new URL('/admin/dashboard', req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/admin/:path*'],
};
