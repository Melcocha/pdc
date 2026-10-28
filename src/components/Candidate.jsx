import React from 'react';
import { candidateData } from '../data/partyData';
import { Award, CheckCircle2, FileCheck, ArrowRight, Quote } from 'lucide-react';

export default function Candidate({ onOpenManifesto }) {
  return (
    <section className="section-padding" id="liderazgo">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">Liderazgo Ético</span>
          <h2 className="section-title">Nuestra Visión de Futuro</h2>
          <p className="section-desc">
            Conoce el perfil, la trayectoria y los compromisos inquebrantables de nuestra dirigencia nacional.
          </p>
        </div>

        <div className="candidate-wrapper">
          {/* Visual Side */}
          <div className="candidate-visual">
            <div className="candidate-img-card">
              <img
                src={candidateData.image}
                alt={candidateData.name}
                className="candidate-img"
              />
              <div className="candidate-card-overlay">
                <span className="badge-tag amber" style={{ marginBottom: '0.4rem' }}>
                  {candidateData.role}
                </span>
                <h3 style={{ color: '#ffffff', fontSize: '1.8rem', marginBottom: '0.2rem' }}>
                  {candidateData.name}
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
                  Economista & Líder Social de PDC
                </p>
              </div>
            </div>

            {/* Floating verification badge */}
            <div
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                borderRadius: 'var(--radius-pill)',
                padding: '0.45rem 0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#38bdf8',
                fontSize: '0.8rem',
                fontWeight: 600,
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <FileCheck size={16} />
              <span>Patrimonio Declarado 100% Público</span>
            </div>
          </div>

          {/* Text Side */}
          <div className="candidate-info-side">
            <div className="candidate-quote-card">
              <Quote size={24} color="#f59e0b" style={{ marginBottom: '0.5rem', opacity: 0.8 }} />
              <p>{candidateData.slogan}</p>
            </div>

            <p style={{ fontSize: '1.08rem', lineHeight: '1.7', marginBottom: '1.8rem' }}>
              {candidateData.bio}
            </p>

            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={20} color="var(--primary-500)" />
              Hitos de Servicio Comunitario
            </h4>

            <div className="milestones-list">
              {candidateData.keyMilestones.map((milestone) => (
                <div key={milestone.year} className="milestone-item">
                  <span className="milestone-year">{milestone.year}</span>
                  <div className="milestone-text">
                    <h4>{milestone.title}</h4>
                    <p>{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <button onClick={onOpenManifesto} className="btn btn-primary">
                <span>Leer Carta Abierta a los Ciudadanos</span>
                <ArrowRight size={17} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>Elegida por más de 120,000 votos en primarias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
