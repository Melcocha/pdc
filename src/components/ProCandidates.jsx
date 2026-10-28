import React from 'react';
import { deputyCandidate, campaignData } from '../data/campaignData';
import {
  GraduationCap,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Quote,
  Sparkles
} from 'lucide-react';

export default function ProCandidates() {
  return (
    <section className="pro-section pro-candidates-section" id="candidatos">
      <div className="pro-candidates-fullwidth">
        {/* Section Header */}
        <div className="pro-section-header pro-candidates-header">
          <h2 className="pro-title">Fórmula a la Diputación por La Unión</h2>
          <p className="pro-subtitle">
            Liderazgo preparado, profesionalismo comprobado y vocación de servicio para nuestras comunidades.
          </p>
        </div>

        {/* 100% Width Duo Grid */}
        <div className="pro-candidates-duo-grid">
          {/* 1. Propietario Card: Lic. Willian Méndez */}
          <div className="pro-candidate-card-propietario">
            {/* Top Bar with Ballot & Casilla */}
            <div className="pro-card-header-bar">
              <div className="pro-casilla-chip">
                <span className="pro-casilla-pill">{deputyCandidate.ballot}</span>
                <span className="pro-casilla-dept">{deputyCandidate.department}</span>
              </div>
              <span className="pro-role-badge">Diputado Propietario</span>
            </div>

            {/* Profile Intro Row */}
            <div className="pro-candidate-intro-row">
              <div className="pro-candidate-avatar-wrap">
                <img
                  src={deputyCandidate.photo}
                  alt={deputyCandidate.name}
                  className="pro-candidate-avatar-img"
                />
                <span className="pro-avatar-status-dot" title="Candidato Oficial"></span>
              </div>
              <div className="pro-candidate-intro-info">
                <h3 className="pro-candidate-hero-name">{deputyCandidate.name}</h3>
                <div className="pro-candidate-origin-tag">
                  <MapPin size={15} color="var(--pdc-green)" />
                  <span>{deputyCandidate.origin}</span>
                </div>
              </div>
            </div>

            {/* Academic Credentials Grid */}
            <div className="pro-credentials-section">
              <span className="pro-credentials-title">
                <GraduationCap size={16} />
                Formación y Preparación Académica
              </span>

              <div className="pro-credentials-grid">
                {deputyCandidate.academicProfile.map((item, idx) => (
                  <div key={idx} className="pro-credential-card-item">
                    <div className="pro-credential-icon-wrap">
                      <GraduationCap size={16} color="var(--pdc-green)" />
                    </div>
                    <div>
                      <strong className="pro-credential-degree">{item.title}</strong>
                      <p className="pro-credential-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Candidate Message Quote */}
            <div className="pro-candidate-quote-callout">
              <Quote size={20} className="pro-candidate-quote-icon" />
              <p className="pro-candidate-quote-text">
                “{deputyCandidate.message}”
              </p>
            </div>

            {/* Territorial Commitment Card */}
            <div className="pro-territorial-commitment-box">
              <div className="pro-commitment-header">
                <CheckCircle2 size={18} color="var(--pdc-green)" />
                <strong>Compromiso Territorial con La Unión Sur y La Unión Norte</strong>
              </div>
              <p className="pro-commitment-text">
                {deputyCandidate.commitment}
              </p>
            </div>
          </div>

          {/* 2. Suplente Card: Licda. Carmen Torres Jiménez & Coalición */}
          <div className="pro-candidate-card-suplente">
            {/* Top Bar */}
            <div className="pro-card-header-bar">
              <span className="pro-coalition-chip">Fórmula en Coalición</span>
              <span className="pro-role-badge pro-role-suplente">Diputada Suplente</span>
            </div>

            {/* Profile Intro Row */}
            <div className="pro-suplente-profile-header">
              <div className="pro-suplente-photo-wrap">
                <img
                  src={deputyCandidate.deputySubstitute.photo}
                  alt={deputyCandidate.deputySubstitute.name}
                  className="pro-suplente-photo-img"
                />
              </div>

              <h4 className="pro-suplente-name">
                {deputyCandidate.deputySubstitute.name}
              </h4>
              <span className="pro-suplente-role-tag">
                {deputyCandidate.deputySubstitute.role} • La Unión
              </span>
              <p className="pro-suplente-desc">
                {deputyCandidate.deputySubstitute.desc}
              </p>
            </div>

            {/* Coalition Representation Box */}
            <div className="pro-coalition-highlight-card">
              <div className="pro-coalition-card-title">
                <ShieldCheck size={18} color="var(--pdc-green)" />
                <span>Alianza Estratégica por La Unión</span>
              </div>
              <p className="pro-coalition-card-text">
                Trabajo coordinado entre el <strong>Partido Demócrata Cristiano (PDC)</strong> y <strong>Fuerza Solidaria</strong> para unir esfuerzos y representar con dignidad y paridad a los municipios y distritos de La Unión.
              </p>

              {/* Logos Showcase */}
              <div className="pro-coalition-logos-duo">
                <div className="pro-coalition-logo-wrap">
                  <img src={campaignData.logos.pdc} alt="PDC" className="pro-partner-logo" />
                  <span>PDC</span>
                </div>
                <span className="pro-coalition-plus">+</span>
                <div className="pro-coalition-logo-wrap">
                  <img src={campaignData.logos.fs} alt="Fuerza Solidaria" className="pro-partner-logo" />
                  <span>Fuerza Solidaria</span>
                </div>
              </div>
            </div>

            {/* Values / Pillars list */}
            <div className="pro-suplente-pillars">
              <div className="pro-pillar-item">
                <CheckCircle2 size={16} color="var(--pdc-green)" />
                <span>Representación con paridad de género y cercanía</span>
              </div>
              <div className="pro-pillar-item">
                <CheckCircle2 size={16} color="var(--pdc-green)" />
                <span>Gestión legislativa coordinada en todo el departamento</span>
              </div>
              <div className="pro-pillar-item">
                <CheckCircle2 size={16} color="var(--pdc-green)" />
                <span>Monitoreo directo en los distritos y comunidades</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
