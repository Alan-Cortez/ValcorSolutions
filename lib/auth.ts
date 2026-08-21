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
    async signIn({ user }) {
      try {
        const result = await client.execute({
          sql: 'SELECT id FROM admin_emails WHERE email = ?',
          args: [user.email!],
        });
        return result.rows.length > 0;
      } catch {
        return false;
      }
    },
    async session({ session }) {
      return session;
    },
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
});
