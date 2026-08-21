import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Valcor — Desarrollo Web Profesional',
  description: 'Disenamos y desarrollamos sitios web, e-commerce y aplicaciones a medida que impulsan el crecimiento de tu empresa.',
  keywords: ['desarrollo web', 'diseno web', 'e-commerce', 'aplicaciones web', 'SEO', 'Valcor'],
  authors: [{ name: 'Valcor' }],
  openGraph: {
    title: 'Valcor — Desarrollo Web Profesional',
    description: 'Construimos experiencias digitales que generan resultados reales.',
    type: 'website',
    locale: 'es_MX',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
