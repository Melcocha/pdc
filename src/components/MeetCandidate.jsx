import React from 'react';
import { candidateProfile } from '../data/partyData';
import { ShieldCheck, CheckCircle2, Award, FileText, ArrowRight } from 'lucide-react';

export default function MeetCandidate({ onOpenManifesto, onShowToast }) {
  const handleViewDeclaration = () => {
    onShowToast('Abriendo Declaración Juramentada de Bienes y Rentas 2026 de Dra. Elena Valenzuela (Auditada ante la Contraloría)...', 'info');
  };

  return (
    <section className="sec-padding candidate-section" id="candidata">
      <div className="container">
        <div className="sec-header">
          <span className="badge-sub gold">Liderazgo & Servicio Cívico</span>
          <h2 className="sec-title">Conoce a Elena Valenzuela (Meet Elena)</h2>
          <p className="sec-desc">
            Una trayectoria intachable al servicio de las causas comunitarias, con la preparación técnica y el coraje ético para guiar el destino de nuestra patria.
          </p>
        </div>

        <div className="candidate-grid">
          {/* Visual Column */}
          <div className="candidate-photo-frame">
            <div className="candidate-photo-card">
              <img
                src={candidateProfile.image}
                alt={candidateProfile.name}
                className="candidate-photo"
              />
              <div className="candidate-name-overlay">
                <span className="badge-sub gold" style={{ marginBottom: '0.4rem' }}>
                  {candidateProfile.role}
                </span>
                <h3 style={{ color: '#ffffff', fontSize: '2rem', marginBottom: '0.2rem' }}>
                  {candidateProfile.name}
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.92rem' }}>
                  Economista & Defensora de los Derechos Ciudadanos
                </p>
              </div>
            </div>

            {/* Verified Stamp */}
            <div className="candidate-verified-stamp">
              <ShieldCheck size={16} />
              <span>Patrimonio 100% Público y Auditado</span>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="candidate-details-col">
            <div className="candidate-duty-quote">
              <p>“{candidateProfile.quote}”</p>
            </div>

            <p style={{ fontSize: '1.08rem', lineHeight: '1.7', marginBottom: '1.8rem', color: 'var(--text-secondary)' }}>
              {candidateProfile.bio}
            </p>

            <h4 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={20} color="var(--primary-accent)" />
              Prioridades Inquebrantables de Gestión
            </h4>

            <div className="candidate-priorities-list">
              {candidateProfile.keyPriorities.map((item, idx) => (
                <div key={idx} className="priority-item">
                  <CheckCircle2 size={18} className="priority-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Milestones timeline */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '2rem 0' }}>
              {candidateProfile.milestones.map((m) => (
                <div key={m.year} style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.15rem', color: 'var(--primary-accent)', minWidth: '55px' }}>
                    {m.year}
                  </span>
                  <div>
                    <h5 style={{ fontSize: '1rem', marginBottom: '0.2rem', color: 'var(--text-main)' }}>{m.title}</h5>
                    <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--text-secondary)' }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button onClick={onOpenManifesto} className="btn btn-primary">
                <FileText size={17} />
                <span>Leer Plan de Gobierno Completo</span>
              </button>

              <button onClick={handleViewDeclaration} className="btn btn-secondary">
                <ShieldCheck size={17} />
                <span>Declaración Juramentada</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
