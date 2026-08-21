import { SessionProvider } from 'next-auth/react';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <div className="admin-layout">
        <AdminSidebar />
        <div className="admin-main">
          {children}
        </div>
      </div>
    </SessionProvider>
  );
}
