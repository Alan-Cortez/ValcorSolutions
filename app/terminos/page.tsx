import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos de Servicio — Valcor',
  description: 'Términos y condiciones de servicio de Valcor Digital Solutions.',
};

export default function Terminos() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', padding: '6rem 1.5rem 4rem' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <Link href="/" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'inline-block', marginBottom: '2rem' }}>
          ← Volver al inicio
        </Link>

        <h1 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
          Términos de Servicio
        </h1>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
          Última actualización: septiembre 2026
        </p>

        {[
          {
            title: '1. Aceptación de términos',
            content: 'Al acceder y usar este sitio web, aceptas estar sujeto a estos Términos de Servicio. Si no estás de acuerdo con alguna parte de estos términos, no podrás acceder al servicio.',
          },
          {
            title: '2. Descripción del servicio',
            content: 'Valcor Digital Solutions ofrece servicios de desarrollo web, diseño de sitios, tiendas en línea y aplicaciones web a medida. El presente sitio sirve como portafolio e interfaz de contacto para la contratación de dichos servicios.',
          },
          {
            title: '3. Uso de la cuenta',
            content: 'Al iniciar sesión con Google, te comprometes a no usar el sitio para actividades ilegales, no publicar contenido ofensivo o falso en comentarios, y mantener la confidencialidad de tu sesión.',
          },
          {
            title: '4. Propiedad intelectual',
            content: 'Todo el contenido del sitio — incluyendo textos, diseños, logos e imágenes — es propiedad de Valcor Digital Solutions y está protegido por derechos de autor. Queda prohibida su reproducción sin autorización expresa.',
          },
          {
            title: '5. Limitación de responsabilidad',
            content: 'Valcor no será responsable por daños directos, indirectos o consecuentes derivados del uso o la imposibilidad de uso de este sitio. El servicio se proporciona "tal como está" sin garantías de ningún tipo.',
          },
          {
            title: '6. Modificaciones',
            content: 'Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entran en vigor al publicarse en esta página. El uso continuado del sitio implica la aceptación de los nuevos términos.',
          },
          {
            title: '7. Ley aplicable',
            content: 'Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier disputa se resolverá en los tribunales competentes de México.',
          },
          {
            title: '8. Contacto',
            content: 'Para preguntas sobre estos términos: valcordigitalsolutions@gmail.com',
          },
        ].map((section) => (
          <div key={section.title} style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.6rem', color: 'var(--text-primary)' }}>
              {section.title}
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
