import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import client from './db';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    // Cualquier cuenta de Google puede iniciar sesion en el sitio publico
    async signIn() {
      return true;
    },
    // Inyectamos isAdmin en la sesion para controlar acceso al panel
    async session({ session }) {
      if (session.user?.email) {
        try {
          const result = await client.execute({
            sql: 'SELECT id FROM admin_emails WHERE email = ?',
            args: [session.user.email],
          });
          (session.user as any).isAdmin = result.rows.length > 0;
        } catch {
          (session.user as any).isAdmin = false;
        }
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
});
