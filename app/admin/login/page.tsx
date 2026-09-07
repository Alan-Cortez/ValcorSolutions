import { redirect } from 'next/navigation';

// El login unificado es /login — esta ruta redirige ahi
export default function AdminLoginRedirect() {
  redirect('/login?callbackUrl=/admin/dashboard');
}
