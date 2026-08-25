'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  'Sitio Web',
  'Tienda Online',
  'Aparecer en Google',
  'Portal para Clientes',
  'Rediseño de Sitio',
  'Soporte y Mantenimiento',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError('Ocurrió un error. Por favor inténtalo de nuevo.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contacto" style={{ borderTop: '1px solid var(--bg-border)', background: 'var(--bg-primary)', overflow: 'hidden' }}>

      {/* Big CTA block */}
      <div style={{
        borderBottom: '1px solid var(--bg-border)',
        background: 'var(--bg-secondary)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '30%',
          transform: 'translate(-50%, -50%)',
          width: '600px', height: '300px',
          background: 'radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container contact-cta-inner">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="contact-big-title">¿Listo para tener</h2>
            <h2 className="contact-big-title">más clientes?</h2>
            <h2 className="contact-big-title contact-big-outline">Empecemos hoy.</h2>
            <p style={{
              marginTop: '1.5rem', fontSize: '0.95rem',
              color: 'var(--text-secondary)', maxWidth: 400, lineHeight: 1.75,
            }}>
              Primera consulta <strong style={{ color: 'var(--text-primary)' }}>gratis y sin compromiso.</strong>{' '}
              Respondemos en menos de 24 horas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="contact-cta-right"
          >
            {[
              { label: 'Email',        value: 'contacto@valcor.dev' },
              { label: 'Respuesta',    value: 'Menos de 24 horas' },
              { label: 'Consulta',     value: 'Gratis, sin compromiso' },
              { label: 'Ubicación',    value: 'México (atendemos todo LATAM)' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{
                  fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'var(--text-muted)', minWidth: 70, paddingTop: '1px',
                }}>
                  {item.label}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{item.value}</span>
              </div>
            ))}

            <a
              href="#contacto-form"
              className="btn btn-primary"
              style={{ marginTop: '0.5rem', justifyContent: 'center', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              Sí, quiero empezar <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Form section */}
      <div id="contacto-form" className="section">
        <div className="container">
          <div className="contact-form-grid">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="section-label">Escríbenos</div>
              <h3 className="text-headline" style={{ marginBottom: '1.25rem' }}>
                Cuéntanos{' '}
                <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>tu idea.</span>
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.8, fontSize: '0.95rem' }}>
                No necesitas tener todo claro todavía. Cuéntanos en qué estás pensando y nosotros te orientamos.
              </p>

              {/* Garantías */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { emoji: '✅', text: 'Respuesta en menos de 24 horas' },
                  { emoji: '🎯', text: 'Propuesta personalizada para tu negocio' },
                  { emoji: '💬', text: 'Sin tecnicismos, en tu idioma' },
                  { emoji: '🔒', text: 'Tus datos están seguros con nosotros' },
                ].map((item) => (
                  <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1rem' }}>{item.emoji}</span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    background: 'var(--bg-surface)', border: '1px solid var(--bg-border)',
                    borderRadius: 'var(--radius-md)', padding: '3rem', textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>🎉</div>
                  <h3 style={{ fontWeight: 700, marginBottom: '0.75rem', fontSize: '1.1rem' }}>¡Mensaje recibido!</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    Gracias por escribirnos. Te contactaremos en menos de 24 horas con una propuesta para tu negocio.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="contact-form-row">
                    <div className="form-field">
                      <label className="form-label">Tu nombre</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="¿Cómo te llamas?" className="form-input" />
                    </div>
                    <div className="form-field">
                      <label className="form-label">Tu correo</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="correo@ejemplo.com" className="form-input" />
                    </div>
                  </div>

                  <div className="form-field">
                    <label className="form-label">Tu negocio o empresa</label>
                    <input name="company" value={form.company} onChange={handleChange} placeholder="¿Cómo se llama tu negocio?" className="form-input" />
                  </div>

                  <div className="form-field">
                    <label className="form-label">¿Qué necesitas?</label>
                    <select name="service" value={form.service} onChange={handleChange} className="form-input" style={{ appearance: 'none', cursor: 'pointer' }}>
                      <option value="">Selecciona una opción</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="form-field">
                    <label className="form-label">Cuéntanos más</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={4}
                      placeholder="¿Qué quieres lograr con tu sitio web? No hay respuestas incorrectas 😊"
                      className="form-input" style={{ resize: 'vertical', lineHeight: 1.7 }} />
                  </div>

                  {error && <p style={{ fontSize: '0.85rem', color: '#f87171' }}>{error}</p>}

                  <button type="submit" disabled={sending} className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', opacity: sending ? 0.7 : 1, fontSize: '0.95rem' }}>
                    {sending ? 'Enviando...' : '¡Quiero empezar! →'}
                  </button>

                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                    Sin spam. Te responderemos solo para ayudarte con tu proyecto.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-cta-inner {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 4rem;
          align-items: center;
          padding-top: 5rem;
          padding-bottom: 5rem;
        }
        .contact-big-title {
          font-size: clamp(2rem, 5.5vw, 4.5rem);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          color: var(--white);
          margin-bottom: 0.15rem;
        }
        .contact-big-outline {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.2);
        }
        .contact-cta-right {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-width: 250px;
        }
        .contact-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
        }
        .contact-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @media (max-width: 900px) {
          .contact-cta-inner { grid-template-columns: 1fr !important; gap: 2.5rem !important; padding-top: 4rem !important; padding-bottom: 4rem !important; }
          .contact-cta-right { min-width: unset !important; }
          .contact-form-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        @media (max-width: 560px) {
          .contact-big-title { font-size: clamp(1.75rem, 9vw, 2.25rem) !important; }
          .contact-form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
