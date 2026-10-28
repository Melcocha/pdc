import React from 'react';
import { partyInfo, partyStats } from '../data/partyData';
import { ArrowRight, Users, Building2, FileText, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Users: Users,
  Building2: Building2,
  FileText: FileText,
  ShieldCheck: ShieldCheck
};

export default function Hero({ onOpenAffiliation, onOpenManifesto }) {
  const scrollToProposals = () => {
    const el = document.getElementById('propuestas');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="hero-bg-wrapper">
        <img
          src="/assets/hero_rally.jpg"
          alt="Multitud de ciudadanos apoyando al PDC"
          className="hero-bg-img"
        />
        <div className="hero-overlay-gradient"></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>ELECCIONES GENERALES {partyInfo.currentElectionYear} • MOVIMIENTO CIUDADANO</span>
          </div>

          <h1 className="hero-title">
            La fuerza de la gente para <span>transformar nuestro país</span>
          </h1>

          <p className="hero-lead">
            {partyInfo.subSlogan} Dejemos atrás las promesas vacías y construyamos un Estado moderno, transparente y al servicio de cada familia.
          </p>

          <div className="hero-cta-group">
            <button onClick={onOpenAffiliation} className="btn btn-primary">
              <span>Unirme al Movimiento</span>
              <ArrowRight size={18} />
            </button>

            <button onClick={scrollToProposals} className="btn btn-outline-white">
              <span>Conoce las Propuestas</span>
            </button>

            <button onClick={onOpenManifesto} className="btn btn-secondary" style={{ background: 'rgba(15, 23, 42, 0.6)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>
              <FileText size={17} />
              <span>Manifiesto 2026</span>
            </button>
          </div>

          {/* Quick bullet values */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="#38bdf8" /> 100% Cuentas Claras
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="#38bdf8" /> Primarias Abiertas
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="#38bdf8" /> Paridad de Género e Inclusión
            </span>
          </div>
        </div>

        {/* Live Party Stats Bar */}
        <div className="hero-stats-grid">
          {partyStats.map((stat) => {
            const IconComponent = iconMap[stat.icon] || Users;
            return (
              <div key={stat.id} className="stat-card">
                <div className="stat-header">
                  <span className="stat-label">{stat.label}</span>
                  <IconComponent size={22} className="stat-icon" />
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-change">{stat.change}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
