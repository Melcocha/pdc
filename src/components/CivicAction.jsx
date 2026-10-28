import React from 'react';
import { Users2, MessageSquareCheck, HeartHandshake, MapPin, ArrowRight } from 'lucide-react';

export default function CivicAction({ onOpenAffiliation, onShowToast }) {
  const handleJoinLocal = () => {
    onOpenAffiliation();
    onShowToast('Selecciona "Voluntariado territorial" en el formulario para conectarte con tu comité más cercano.', 'info');
  };

  return (
    <section className="section-padding" id="participacion">
      <div className="container">
        <div className="civic-card">
          <div className="civic-img-side">
            <img
              src="/assets/civic_townhall.jpg"
              alt="Mesa de trabajo y participación ciudadana del PDC"
              className="civic-img"
            />
            <div
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                right: '1.5rem',
                background: 'rgba(7, 14, 23, 0.85)',
                backdropFilter: 'blur(10px)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem 1.4rem',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#38bdf8', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase' }}>
                <MapPin size={15} /> Asambleas Barriales Activas
              </div>
              <div style={{ fontSize: '0.92rem', color: '#e2e8f0', marginTop: '0.2rem' }}>
                Más de 320 comités vecinales debatiendo soluciones locales cada fin de semana.
              </div>
            </div>
          </div>

          <div className="civic-content-side">
            <span className="badge-tag">Poder Ciudadano</span>
            <h2 style={{ fontSize: '2.1rem', marginBottom: '1rem' }}>
              La política vuelve a las calles y a la gente
            </h2>
            <p style={{ fontSize: '1.02rem', lineHeight: '1.6' }}>
              En el PDC las decisiones no se toman a puerta cerrada entre cuatro paredes. Cada ciudadano tiene voz y voto vinculante en nuestras asambleas territoriales.
            </p>

            <div className="civic-features">
              <div className="civic-feature-item">
                <Users2 className="civic-feature-icon" size={24} />
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '0.2rem' }}>Presupuestos Participativos</h4>
                  <p style={{ fontSize: '0.92rem' }}>Vota qué obras públicas deben priorizarse en tu municipio o barrio.</p>
                </div>
              </div>

              <div className="civic-feature-item">
                <MessageSquareCheck className="civic-feature-icon" size={24} />
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '0.2rem' }}>Iniciativa Popular de Ley</h4>
                  <p style={{ fontSize: '0.92rem' }}>Cualquier afiliado puede redactar proyectos de ley que el partido radicará oficialmente en el Congreso.</p>
                </div>
              </div>

              <div className="civic-feature-item">
                <HeartHandshake className="civic-feature-icon" size={24} />
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '0.2rem' }}>Brigadas de Voluntariado Social</h4>
                  <p style={{ fontSize: '0.92rem' }}>Jornadas de reforestación, asesoría legal gratuita comunitaria y apoyo alimentario.</p>
                </div>
              </div>
            </div>

            <div>
              <button onClick={handleJoinLocal} className="btn btn-accent">
                <span>Sumarme a mi Comité Barrial</span>
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
