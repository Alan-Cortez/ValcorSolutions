'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  'Diseno Web',
  'Desarrollo a Medida',
  'E-commerce',
  'SEO Tecnico',
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
      setError('Ocurrio un error. Por favor intentalo de nuevo.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contacto" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--bg-border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label">Contacto</div>
            <h2 className="text-headline" style={{ marginBottom: '1.5rem' }}>
              Comencemos<br />
              <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>tu proyecto.</span>
            </h2>
            <p className="text-body text-muted" style={{ marginBottom: '2.5rem', lineHeight: 1.8 }}>
              Cuentanos sobre tu idea. Respondemos en menos de 24 horas con una propuesta inicial sin compromiso.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'Correo', value: 'contacto@valcor.dev' },
                { label: 'Respuesta', value: 'Menos de 24 horas' },
                { label: 'Disponibilidad', value: 'Lunes a Viernes, 9:00 - 18:00' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: 'var(--blue-primary)', flexShrink: 0,
                  }} />
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.label}:</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
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
                  background: 'var(--bg-surface)',
                  border: '1px solid rgba(59,130,246,0.2)',
                  borderRadius: 'var(--radius-md)',
                  padding: '3rem',
                  textAlign: 'center',
                }}
              >
                <div style={{
                  width: 56, height: 56,
                  borderRadius: '50%',
                  background: 'var(--blue-subtle)',
                  border: '1px solid rgba(59,130,246,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  fontSize: '1.5rem',
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
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-field">
                    <label className="form-label">Nombre</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                      className="form-input"
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Correo</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@correo.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-label">Empresa (opcional)</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Tu empresa"
                    className="form-input"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">Servicio de interes</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="form-input"
                    style={{ appearance: 'none', cursor: 'pointer' }}
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label">Mensaje</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Cuentanos sobre tu proyecto..."
                    className="form-input"
                    style={{ resize: 'vertical', lineHeight: 1.7 }}
                  />
                </div>

                {error && (
                  <p style={{ fontSize: '0.85rem', color: '#f87171' }}>{error}</p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', opacity: sending ? 0.7 : 1 }}
                >
                  {sending ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contacto .container > div { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
