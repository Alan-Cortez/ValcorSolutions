'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot } from 'lucide-react';

type Message = { from: 'bot' | 'user'; text: string };

const botResponses: Record<string, string> = {
  servicios: 'Ofrecemos: Sistemas a medida, Páginas Web, E-commerce, Automatización y Soporte. ¿Sobre cuál te gustaría saber más?',
  precios: 'Los precios dependen del alcance. Por ejemplo, servicios rápidos inician en $150 MXN y sistemas completos desde $3,000 MXN. ¿Qué necesitas específicamente?',
  tiempo: 'Las tareas rápidas toman horas. Un sitio corporativo toma entre 3-4 semanas. ¿Tienes urgencia con tu proyecto?',
  contacto: 'Puedes dejarnos tu mensaje en el formulario de abajo o escribirnos a valcordigitalsolution@gmail.com.',
  default: 'Interesante. Para darte una solución exacta, te recomiendo dejarnos tus datos en el formulario de contacto más abajo.',
};

function getBotResponse(text: string): string {
  const lower = text.toLowerCase();
  if (lower.includes('servicio') || lower.includes('hacen') || lower.includes('ofrecen')) return botResponses.servicios;
  if (lower.includes('precio') || lower.includes('costo') || lower.includes('cuanto') || lower.includes('inversión')) return botResponses.precios;
  if (lower.includes('tiempo') || lower.includes('demora') || lower.includes('tarda') || lower.includes('plazo') || lower.includes('urgente')) return botResponses.tiempo;
  if (lower.includes('contacto') || lower.includes('hablar') || lower.includes('escribir') || lower.includes('correo')) return botResponses.contacto;
  return botResponses.default;
}

export default function InteractiveChat() {
  const [step, setStep] = useState<'name' | 'chat'>('name');
  const [name, setName] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const startChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setStep('chat');
    setMessages([
      { from: 'bot', text: `Hola ${name.trim()}, soy el asistente estratégico de Valcor. Estoy aquí para ayudarte a evaluar si tu tecnología actual está generando ventaja competitiva real. ¿Cuál es el mayor reto operativo o de ventas que enfrenta tu negocio hoy?` }
    ]);
  };

  const sendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;
    
    const userMsg: Message = { from: 'user', text: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const response = getBotResponse(userMsg.text);
      setTyping(false);
      setMessages((m) => [...m, { from: 'bot', text: response }]);
    }, 1000 + Math.random() * 800);
  };

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--bg-border)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background pattern (similar to screenshot) */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.3, pointerEvents: 'none',
        backgroundImage: `linear-gradient(45deg, var(--bg-border) 1px, transparent 1px), linear-gradient(-45deg, var(--bg-border) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 800 }}>
        
        <AnimatePresence mode="wait">
          {step === 'name' ? (
            <motion.div
              key="name-step"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{ textAlign: 'center' }}
            >
              <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 800, lineHeight: 1.3, letterSpacing: '-0.02em', color: 'var(--text-primary)', marginBottom: '3rem' }}>
                Conversa con nuestro asistente y evalúa qué solución tecnológica necesita tu negocio para generar <span className="accent">ventaja competitiva.</span>
              </h2>

              <form onSubmit={startChat} style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--bg-border)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
                display: 'flex',
                gap: '0.75rem',
                maxWidth: 600,
                margin: '0 auto',
                boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
              }}>
                <input
                  type="text"
                  placeholder="Escribe tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    fontSize: '1rem',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                  required
                />
                <button
                  type="submit"
                  disabled={!name.trim()}
                  style={{
                    background: name.trim() ? 'var(--blue-primary)' : 'var(--bg-border)',
                    color: name.trim() ? '#fff' : 'var(--text-muted)',
                    border: 'none',
                    borderRadius: 'var(--radius-sm)',
                    width: 48,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                    cursor: name.trim() ? 'pointer' : 'default',
                    flexShrink: 0
                  }}
                >
                  <Send size={18} />
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="chat-step"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--bg-border)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: '0 24px 64px rgba(0,0,0,0.2)',
                display: 'flex',
                flexDirection: 'column',
                height: 500
              }}
            >
              {/* Header */}
              <div style={{
                padding: '1.25rem 1.5rem',
                borderBottom: '1px solid var(--bg-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                background: 'var(--bg-secondary)',
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'var(--blue-primary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff'
                }}>
                  <Bot size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>Asistente Valcor</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Evaluación estratégica</div>
                </div>
              </div>

              {/* Messages Area */}
              <div style={{ flex: 1, overflowY: 'auto', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
                      maxWidth: '85%',
                      padding: '1rem 1.25rem',
                      borderRadius: msg.from === 'user'
                        ? '16px 16px 4px 16px'
                        : '16px 16px 16px 4px',
                      background: msg.from === 'user'
                        ? 'var(--blue-primary)'
                        : 'var(--bg-surface-2)',
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                      color: msg.from === 'user' ? '#fff' : 'var(--text-secondary)',
                      border: msg.from === 'bot' ? '1px solid var(--bg-border)' : 'none',
                    }}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {typing && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ display: 'flex', gap: '0.4rem', padding: '1rem 1.25rem', background: 'var(--bg-surface-2)', borderRadius: '16px 16px 16px 4px', width: 'fit-content', border: '1px solid var(--bg-border)' }}
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

              {/* Input Area */}
              <div style={{ padding: '1.5rem', borderTop: '1px solid var(--bg-border)', background: 'var(--bg-secondary)' }}>
                <form onSubmit={sendMessage} style={{
                  display: 'flex',
                  gap: '0.75rem',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--bg-border)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.5rem'
                }}>
                  <input
                    type="text"
                    placeholder="Escribe tu mensaje..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={{
                      flex: 1,
                      background: 'transparent',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      fontSize: '0.95rem',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                  />
                  <button
                    type="submit"
                    disabled={!input.trim()}
                    style={{
                      background: input.trim() ? 'var(--blue-primary)' : 'var(--bg-border)',
                      color: input.trim() ? '#fff' : 'var(--text-muted)',
                      border: 'none',
                      borderRadius: 'var(--radius-sm)',
                      width: 44,
                      height: 44,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s',
                      cursor: input.trim() ? 'pointer' : 'default',
                      flexShrink: 0
                    }}
                  >
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
