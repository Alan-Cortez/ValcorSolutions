import type { Metadata } from 'next';
import Script from 'next/script';
import Providers from '@/components/Providers';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://valcor-solutions.vercel.app'),
  title: {
    default: 'Valcor Digital Solutions — Desarrollo Web Profesional en México',
    template: '%s | Valcor Digital Solutions',
  },
  description:
    'Valcor Digital Solutions: agencia de desarrollo web en México. Creamos sitios web, tiendas online, aplicaciones y posicionamiento SEO para empresas que quieren crecer.',
  keywords: [
    'desarrollo web México',
    'diseño web profesional',
    'agencia web México',
    'tienda online México',
    'SEO México',
    'aplicaciones web',
    'Valcor Digital Solutions',
    'sitios web empresas',
    'e-commerce México',
    'páginas web profesionales',
  ],
  authors: [{ name: 'Valcor Digital Solutions', url: 'https://valcor-solutions.vercel.app' }],
  creator: 'Valcor Digital Solutions',
  publisher: 'Valcor Digital Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://valcor-solutions.vercel.app',
    siteName: 'Valcor Digital Solutions',
    title: 'Valcor Digital Solutions — Desarrollo Web Profesional en México',
    description:
      'Creamos sitios web, tiendas online y aplicaciones que impulsan el crecimiento de tu empresa. Equipo profesional en México.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Valcor Digital Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valcor Digital Solutions — Desarrollo Web en México',
    description: 'Agencia de desarrollo web profesional. Sitios, tiendas y apps a medida.',
  },
  alternates: {
    canonical: 'https://valcor-solutions.vercel.app',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Valcor Digital Solutions',
  url: 'https://valcor-solutions.vercel.app',
  logo: 'https://valcor-solutions.vercel.app/logo.png',
  description:
    'Agencia de desarrollo web profesional en México. Sitios web, tiendas online, aplicaciones y SEO.',
  email: 'valcordigitalsolutions@gmail.com',
  areaServed: 'MX',
  serviceType: ['Desarrollo Web', 'Diseño Web', 'E-commerce', 'SEO', 'Aplicaciones Web'],
  sameAs: ['https://github.com/Alan-Cortez/ValcorSolutions'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'valcordigitalsolutions@gmail.com',
    availableLanguage: 'Spanish',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
