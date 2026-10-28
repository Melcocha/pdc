import React from 'react';
import { campaignData, deputyCandidate } from '../data/campaignData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function WixHero() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="wix-hero-section">
      <div className="wix-container">
        <div className="wix-hero-content">
          <div className="wix-hero-eyebrow">
            <span>{campaignData.coalition} • {campaignData.electionYear}</span>
          </div>

          <h1 className="wix-hero-quote">
            “{campaignData.slogan}”
          </h1>

          <p className="wix-hero-sub">
            Candidatura a Diputado por el Departamento de La Unión ({deputyCandidate.name} • {deputyCandidate.ballot}) y Plan de Gobierno Municipal para la Reactivación Económica Familiar (Luis Ortiz).
          </p>

          <div className="wix-hero-cta-group">
            <button
              onClick={() => handleScroll('candidatos')}
              className="btn-wix-primary"
            >
              <span>Conocer a los Candidatos</span>
              <ArrowRight size={15} />
            </button>

            <button
              onClick={() => handleScroll('propuestas')}
              className="btn-wix-outline"
            >
              <span>Ver Propuestas e Iniciativas</span>
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem', marginTop: '3.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="var(--color-primary)" /> Lic. Willian Méndez (Casilla 1)
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="var(--color-primary)" /> Licda. Carmen Torres (Suplente)
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="var(--color-primary)" /> Plan Municipal Luis Ortiz
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
