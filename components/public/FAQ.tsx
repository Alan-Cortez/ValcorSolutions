'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: '¿Cuanto tiempo tarda en desarrollarse un proyecto?',
    a: 'Depende del alcance. Un sitio web corporativo suele estar listo en 3 a 4 semanas. Un e-commerce o aplicacion web puede tomar entre 6 y 12 semanas. En el primer contacto te damos una estimacion precisa.',
  },
  {
    q: '¿Cuanto cuesta un sitio web con Valcor?',
    a: 'Cada proyecto es unico. Los precios varían segun la complejidad, funcionalidades y plazos. Contáctanos para recibir una propuesta personalizada sin costo.',
  },
  {
    q: '¿Que incluye el servicio de mantenimiento?',
    a: 'Actualizaciones de seguridad, monitoreo de rendimiento, backups automaticos, correcciones de bugs y hasta 2 horas de cambios menores por mes.',
  },
  {
    q: '¿Puedo ver avances durante el desarrollo?',
    a: 'Si. Compartimos acceso a un ambiente de staging donde puedes revisar el progreso en tiempo real y dar retroalimentacion antes del lanzamiento.',
  },
  {
    q: '¿Trabajan con clientes internacionales?',
    a: 'Trabajamos con clientes en toda America Latina, Estados Unidos y Espana. Nos adaptamos a tu zona horaria y preferencias de comunicacion.',
  },
  {
    q: '¿Que pasa si necesito cambios despues del lanzamiento?',
    a: 'Ofrecemos soporte post-lanzamiento. Pequenas modificaciones estan incluidas en el primer mes. Cambios mayores se cotizan por separado.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="section" style={{ borderTop: '1px solid var(--bg-border)' }}>
      <div className="container" style={{ maxWidth: 740, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem', textAlign: 'center' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>
            FAQ
          </div>
          <h2 className="text-headline">
            Preguntas frecuentes
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              style={{ borderBottom: '1px solid var(--bg-border)' }}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.5rem 0',
                  textAlign: 'left',
                  gap: '1rem',
                }}
              >
                <span style={{ fontWeight: 500, fontSize: '0.95rem', lineHeight: 1.5 }}>
                  {faq.q}
                </span>
                <span style={{
                  flexShrink: 0,
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  border: '1px solid var(--bg-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: openIdx === i ? 'var(--blue-hover)' : 'var(--text-muted)',
                  transition: 'color 0.2s',
                }}>
                  {openIdx === i ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIdx === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{
                      paddingBottom: '1.5rem',
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.8,
                    }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
