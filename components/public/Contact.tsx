'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  'Diseño Web',
  'Desarrollo a Medida',
  'E-commerce',
  'SEO Técnico',
  'App Web',
  'Mantenimiento',
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
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '30%',
          transform: 'translate(-50%, -50%)',
          width: '600px', height: '300px',
          background: 'radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container contact-cta-inner">
          {/* Big text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="contact-big-title">Creemos Algo</h2>
            <h2 className="contact-big-title contact-big-outline">Extraordinario</h2>
            <p style={{
              marginTop: '1.25rem',
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              maxWidth: 380,
              lineHeight: 1.7,
            }}>
              Actualmente disponible para proyectos freelance y colaboraciones.
              Respondemos en menos de 24 horas.
            </p>
          </motion.div>

          {/* Right info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="contact-cta-right"
          >
            {[
              { label: 'Email',     value: 'contacto@valcor.dev' },
              { label: 'Respuesta', value: 'Menos de 24 horas' },
              { label: 'Ubicación', value: 'México' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{
                  fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'var(--text-muted)',
                  minWidth: 65, paddingTop: '1px',
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
              Trabajemos Juntos <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Form section */}
      <div id="contacto-form" className="section">
        <div className="container">
          <div className="contact-form-grid">

            {/* Left info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="section-label">Contacto</div>
              <h3 className="text-headline" style={{ marginBottom: '1.5rem' }}>
                Comencemos{' '}
                <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>tu proyecto.</span>
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.8, fontSize: '0.95rem' }}>
                Cuéntanos sobre tu idea. Respondemos con una propuesta inicial sin compromiso.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { label: 'Disponibilidad',    value: 'Lunes a Viernes, 9:00 – 18:00' },
                  { label: 'Tiempo de respuesta', value: 'Menos de 24 horas' },
                  { label: 'Propuesta inicial',  value: 'Gratis y sin compromiso' },
                ].map((item) => (
                  <div key={item.label}>
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right form */}
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
                  <div style={{
                    width: 52, height: 52, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 1.5rem', fontSize: '1.3rem',
                  }}>
                    ✓
                  </div>
                  <h3 style={{ fontWeight: 700, marginBottom: '0.75rem' }}>Mensaje enviado</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Gracias por contactarnos. Te responderemos pronto.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="contact-form-row">
                    <div className="form-field">
                      <label className="form-label">Nombre</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Tu nombre" className="form-input" />
                    </div>
                    <div className="form-field">
                      <label className="form-label">Correo</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="tu@correo.com" className="form-input" />
                    </div>
                  </div>

                  <div className="form-field">
                    <label className="form-label">Empresa (opcional)</label>
                    <input name="company" value={form.company} onChange={handleChange} placeholder="Tu empresa" className="form-input" />
                  </div>

                  <div className="form-field">
                    <label className="form-label">Servicio de interés</label>
                    <select name="service" value={form.service} onChange={handleChange} className="form-input" style={{ appearance: 'none', cursor: 'pointer' }}>
                      <option value="">Selecciona un servicio</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="form-field">
                    <label className="form-label">Mensaje</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Cuéntanos sobre tu proyecto..." className="form-input" style={{ resize: 'vertical', lineHeight: 1.7 }} />
                  </div>

                  {error && <p style={{ fontSize: '0.85rem', color: '#f87171' }}>{error}</p>}

                  <button type="submit" disabled={sending} className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', opacity: sending ? 0.7 : 1 }}>
                    {sending ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
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
          font-size: clamp(2.25rem, 6vw, 5rem);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          color: var(--white);
        }
        .contact-big-outline {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.2);
        }
        .contact-cta-right {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-width: 240px;
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

        /* Tablet */
        @media (max-width: 900px) {
          .contact-cta-inner {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            padding-top: 4rem !important;
            padding-bottom: 4rem !important;
          }
          .contact-cta-right {
            min-width: unset !important;
          }
          .contact-form-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }

        /* Mobile */
        @media (max-width: 560px) {
          .contact-big-title {
            font-size: clamp(2rem, 10vw, 2.5rem) !important;
          }
          .contact-big-outline {
            -webkit-text-stroke: 1px rgba(255,255,255,0.2) !important;
          }
          .contact-form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
