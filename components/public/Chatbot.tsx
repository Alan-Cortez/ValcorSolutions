'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

type Message = { from: 'bot' | 'user'; text: string };

const botResponses: Record<string, string> = {
  servicios: 'Ofrecemos: Diseno Web, Desarrollo a Medida, E-commerce, SEO Tecnico, Apps Web y Mantenimiento. ?Sobre cual te gustaría saber mas?',
  precios: 'Los precios dependen del alcance del proyecto. Completá el formulario de contacto y te enviamos una propuesta personalizada sin costo.',
  tiempo: 'Un sitio corporativo tarda entre 3 y 4 semanas. Un e-commerce o app puede tomar de 6 a 12 semanas.',
  contacto: 'Podes escribirnos al formulario de la seccion Contacto o directamente a contacto@valcor.dev.',
  tecnologias: 'Trabajamos con Next.js, React, Node.js, TypeScript, bases de datos SQL/NoSQL, y plataformas como Vercel y AWS.',
  default: 'Gracias por tu mensaje. Para darte una respuesta mas precisa, te recomendamos completar el formulario de contacto o escribirnos a contacto@valcor.dev.',
};

const quickReplies = ['Servicios', 'Precios', 'Tiempo de entrega', 'Contacto', 'Tecnologias'];

function getBotResponse(text: string): string {
  const lower = text.toLowerCase();
  if (lower.includes('servicio') || lower.includes('hacen') || lower.includes('ofrecen')) return botResponses.servicios;
  if (lower.includes('precio') || lower.includes('costo') || lower.includes('cuanto')) return botResponses.precios;
  if (lower.includes('tiempo') || lower.includes('demora') || lower.includes('tardará') || lower.includes('plazo')) return botResponses.tiempo;
  if (lower.includes('contacto') || lower.includes('hablar') || lower.includes('escribir') || lower.includes('correo')) return botResponses.contacto;
  if (lower.includes('tecnolog') || lower.includes('stack') || lower.includes('framework') || lower.includes('react') || lower.includes('next')) return botResponses.tecnologias;
  return botResponses.default;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: 'Hola. Soy el asistente de Valcor. ¿En que puedo ayudarte?' },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { from: 'user', text: text.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const response = getBotResponse(text);
      setTyping(false);
      setMessages((m) => [...m, { from: 'bot', text: response }]);
    }, 900 + Math.random() * 500);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 300,
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'var(--blue-primary)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 24px rgba(37,99,235,0.4)',
          transition: 'background 0.2s',
        }}
        aria-label="Abrir chat"
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X size={22} />
              </motion.span>
            : <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <MessageCircle size={22} />
              </motion.span>
          }
        </AnimatePresence>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: 'fixed',
              bottom: '6rem',
              right: '2rem',
              zIndex: 299,
              width: 360,
              maxHeight: 540,
              background: 'var(--bg-surface)',
              border: '1px solid var(--bg-border)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
            }}
          >
            {/* Header */}
            <div style={{
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid var(--bg-border)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'var(--bg-secondary)',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: 'var(--blue-subtle)',
                border: '1px solid rgba(59,130,246,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <MessageCircle size={16} color="var(--blue-hover)" />
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Asistente Valcor</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.1rem' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>En linea</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: 'flex',
                    justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start',
                  }}
                >
                  <div style={{
                    maxWidth: '80%',
                    padding: '0.75rem 1rem',
                    borderRadius: msg.from === 'user'
                      ? '16px 16px 4px 16px'
                      : '16px 16px 16px 4px',
                    background: msg.from === 'user'
                      ? 'var(--blue-primary)'
                      : 'var(--bg-surface-2)',
                    fontSize: '0.85rem',
                    lineHeight: 1.6,
                    color: msg.from === 'user' ? '#fff' : 'var(--text-secondary)',
                  }}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ display: 'flex', gap: '0.3rem', padding: '0.75rem 1rem', background: 'var(--bg-surface-2)', borderRadius: '16px 16px 16px 4px', width: 'fit-content' }}
                >
                  {[0, 1, 2].map((i) => (
                    <span key={i} style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: 'var(--text-muted)',
                      display: 'inline-block',
                      animation: `blink 1.2s ease-in-out ${i * 0.2}s infinite`,
                    }} />
                  ))}
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick replies */}
            <div style={{
              padding: '0.75rem 1rem',
              borderTop: '1px solid var(--bg-border)',
              display: 'flex',
              gap: '0.4rem',
              flexWrap: 'wrap',
            }}>
              {quickReplies.map((qr) => (
                <button
                  key={qr}
                  onClick={() => sendMessage(qr)}
                  style={{
                    padding: '0.3rem 0.7rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.72rem',
                    border: '1px solid var(--bg-border)',
                    color: 'var(--text-secondary)',
                    background: 'transparent',
                    transition: 'all 0.2s',
                    fontWeight: 500,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--blue-subtle)';
                    e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)';
                    e.currentTarget.style.color = 'var(--blue-hover)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'var(--bg-border)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  {qr}
                </button>
              ))}
            </div>

            {/* Input */}
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              padding: '0.75rem 1rem',
              borderTop: '1px solid var(--bg-border)',
              background: 'var(--bg-secondary)',
            }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Escribe tu mensaje..."
                style={{
                  flex: 1,
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--bg-border)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.6rem 0.875rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  fontFamily: 'inherit',
                }}
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim()}
                style={{
                  width: 38, height: 38,
                  borderRadius: 'var(--radius-sm)',
                  background: input.trim() ? 'var(--blue-primary)' : 'var(--bg-surface)',
                  color: input.trim() ? '#fff' : 'var(--text-muted)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1px solid var(--bg-border)',
                  transition: 'all 0.2s',
                  flexShrink: 0,
                }}
              >
                <Send size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
