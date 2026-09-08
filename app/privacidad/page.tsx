import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad — Valcor',
  description: 'Política de privacidad de Valcor Digital Solutions.',
};

export default function Privacidad() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', padding: '6rem 1.5rem 4rem' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <Link href="/" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'inline-block', marginBottom: '2rem' }}>
          ← Volver al inicio
        </Link>

        <h1 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
          Política de Privacidad
        </h1>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
          Última actualización: septiembre 2026
        </p>

        {[
          {
            title: '1. Información que recopilamos',
            content: 'Cuando inicias sesión con Google en nuestro sitio, recopilamos únicamente tu nombre, correo electrónico y foto de perfil proporcionados por Google. No almacenamos contraseñas ni información de pago.',
          },
          {
            title: '2. Uso de la información',
            content: 'La información recopilada se utiliza exclusivamente para personalizar tu experiencia en el sitio, pre-llenar formularios de contacto y permitirte dejar comentarios. No vendemos, compartimos ni cedemos tu información a terceros.',
          },
          {
            title: '3. Autenticación con Google',
            content: 'Utilizamos Google OAuth 2.0 para la autenticación. Al iniciar sesión con Google, aceptas también los términos de servicio de Google. No tenemos acceso a tu contraseña de Google.',
          },
          {
            title: '4. Cookies y sesiones',
            content: 'Usamos cookies de sesión seguras para mantener tu sesión activa. Estas cookies son estrictamente necesarias para el funcionamiento del login y se eliminan al cerrar sesión.',
          },
          {
            title: '5. Retención de datos',
            content: 'Tus datos de sesión se eliminan al cerrar sesión. Los mensajes de contacto que envíes son almacenados en nuestra base de datos para poder responderte. Puedes solicitar la eliminación de tus datos en cualquier momento escribiéndonos.',
          },
          {
            title: '6. Seguridad',
            content: 'Implementamos medidas de seguridad técnicas para proteger tu información. Nuestra base de datos está alojada en infraestructura segura con cifrado en tránsito.',
          },
          {
            title: '7. Contacto',
            content: 'Si tienes preguntas sobre esta política de privacidad, contáctanos en: valcordigitalsolutions@gmail.com',
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
