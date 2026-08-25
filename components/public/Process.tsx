'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, Rocket, HeartHandshake } from 'lucide-react';

const steps = [
  { number:'01', title:'Nos platicas tu idea',    description:'Cuéntanos qué hace tu negocio y qué quieres lograr. No necesitas saber nada de tecnología.', Icon:MessageSquare },
  { number:'02', title:'Diseñamos juntos',         description:'Creamos el diseño y te mostramos cómo quedará antes de construirlo. Tú apruebas cada detalle.', Icon:Lightbulb },
  { number:'03', title:'Lo lanzamos',              description:'En pocas semanas tu negocio está en internet, funcionando y listo para recibir clientes.', Icon:Rocket },
  { number:'04', title:'Siempre estamos aquí',     description:'No te dejamos solo. Si algo no funciona o quieres cambios, estamos a un mensaje de distancia.', Icon:HeartHandshake },
];

export default function Process() {
  return (
    <section id="proceso" style={{ background:'var(--light-bg)', position:'relative', overflow:'hidden', padding:'7rem 0' }}>

      {/* Blob */}
      <div style={{
        position:'absolute', bottom:'-10%', right:'-5%', width:450, height:450,
        borderRadius:'60% 40% 30% 70% / 60% 30% 70% 40%',
        background:'rgba(37,99,255,0.06)', filter:'blur(60px)', pointerEvents:'none',
      }} />

      <div className="container" style={{ position:'relative', zIndex:1 }}>

        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6 }} style={{ marginBottom:'5rem' }}>
          <div className="section-label-light">¿Cómo funciona?</div>
          <h2 className="text-headline" style={{ color:'var(--light-text)', maxWidth:540 }}>
            De tu idea a tu sitio web{' '}
            <span className="accent-light">en 4 pasos simples.</span>
          </h2>
          <p style={{ color:'var(--light-muted)', marginTop:'1.25rem', fontSize:'1rem', lineHeight:1.75, maxWidth:500 }}>
            Nos encargamos de todo. Tú solo tienes que decirnos qué quieres lograr.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{ position:'relative' }}>
          {/* connector line */}
          <div className="process-line" style={{
            position:'absolute', top:'1.6rem', left:'12.5%', right:'12.5%',
            height:'1px', background:'linear-gradient(to right, transparent, rgba(37,99,255,0.25), transparent)',
            zIndex:0,
          }} />

          <div className="process-grid">
            {steps.map((step, i) => {
              const Icon = step.Icon;
              return (
                <motion.div key={step.number} className="process-step"
                  initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true }} transition={{ duration:0.6, delay:i*0.12 }}>

                  {/* Circle */}
                  <div style={{
                    width:50, height:50, borderRadius:'50%',
                    background: i===0 ? 'var(--blue-primary)' : 'var(--light-surface)',
                    border:`2px solid ${i===0 ? 'var(--blue-primary)' : 'rgba(37,99,255,0.2)'}`,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    margin:'0 auto 1.25rem',
                    fontSize:'0.72rem', fontWeight:800,
                    color: i===0 ? '#fff' : 'var(--blue-primary)',
                    position:'relative', zIndex:1, flexShrink:0,
                    boxShadow: i===0 ? '0 0 20px rgba(37,99,255,0.4)' : 'none',
                  }}>
                    {step.number}
                  </div>

                  <div style={{ marginBottom:'0.75rem', display:'flex', justifyContent:'center' }}>
                    <Icon size={20} color={i===0 ? 'var(--blue-primary)' : 'var(--light-muted)'} strokeWidth={1.5} />
                  </div>

                  <h3 style={{ fontSize:'0.95rem', fontWeight:700, marginBottom:'0.625rem', color: i===0 ? 'var(--blue-primary)' : 'var(--light-text)' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize:'0.825rem', color:'var(--light-muted)', lineHeight:1.7 }}>
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .process-grid { display:grid; grid-template-columns:repeat(4,1fr); position:relative; z-index:1; }
        .process-step { padding:0 1.25rem; text-align:center; }
        @media (max-width:900px) {
          .process-grid { grid-template-columns:repeat(2,1fr) !important; gap:3rem 1.5rem !important; }
          .process-line { display:none !important; }
          .process-step { padding:0 0.75rem !important; }
        }
        @media (max-width:480px) {
          .process-grid { grid-template-columns:1fr !important; gap:2.5rem !important; }
          .process-step { text-align:left !important; }
          .process-step > div:nth-child(1), .process-step > div:nth-child(2) { margin-left:0 !important; justify-content:flex-start !important; }
        }
        @media (max-width:768px) { #proceso { padding:5rem 0 !important; } }
        @media (max-width:480px)  { #proceso { padding:4rem 0 !important; } }
      `}</style>
    </section>
  );
}
