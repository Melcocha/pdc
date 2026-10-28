import React, { useState } from 'react';
import { municipalPlan } from '../data/campaignData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProRadialMunicipalPlan() {
  const [selectedAxisIndex, setSelectedAxisIndex] = useState(0);

  const total = municipalPlan.axes.length;
  const currentAxis = municipalPlan.axes[selectedAxisIndex];

  const handlePrev = () => {
    setSelectedAxisIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setSelectedAxisIndex((prev) => (prev + 1) % total);
  };

  return (
    <section className="pro-section pro-municipal-section" id="plan-municipal">
      <div className="pro-municipal-container">
        {/* Section Header */}
        <div className="pro-section-header">
          <span className="pro-eyebrow">
            <span className="pro-eyebrow-pill">
              Propuesta Municipal • Luis Ortiz • PDC
            </span>
          </span>
          <h2 className="pro-title">Plan de Trabajo Municipal: Los 9 Ejes Articuladores</h2>
          <p className="pro-subtitle">
            Basado en la <strong>Economía Familiar</strong> como eje central articulador para llevar oportunidades reales y servicios dignos a cada municipio.
          </p>
        </div>

        {/* 9 Ejes Quick-Jump Selector Tabs (Icon-free, clean & modern) */}
        <div className="pro-municipal-tabs-bar">
          {municipalPlan.axes.map((axis, idx) => (
            <button
              key={axis.id}
              onClick={() => setSelectedAxisIndex(idx)}
              className={`pro-municipal-tab ${idx === selectedAxisIndex ? 'active' : ''}`}
            >
              <span className="pro-muni-tab-num">0{axis.number}</span>
              <span className="pro-muni-tab-name">{axis.name}</span>
            </button>
          ))}
        </div>

        {/* Hero-Style Split Showcase: Image + Green Feature Card */}
        <div className="pro-municipal-hero-card">
          {/* Left Column: Thematic Image with Overlay & Badges */}
          <div className="pro-municipal-img-col">
            <div className="pro-municipal-img-wrap">
              <img
                key={currentAxis.id}
                src={currentAxis.image}
                alt={currentAxis.name}
                className="pro-municipal-img"
              />
              <div className="pro-municipal-img-gradient" />

              {/* Top Floating Badge */}
              <div className="pro-municipal-floating-hub">
                <span>EJE CENTRAL: {municipalPlan.coreAxis}</span>
              </div>

              {/* Bottom Floating Counter */}
              <div className="pro-municipal-floating-count">
                <span>0{currentAxis.number} / 0{total} • Plan Municipal</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Green Feature Block (OpenCity Aesthetic) */}
          <div className="pro-municipal-green-block" key={`axis-${currentAxis.id}`}>
            <div className="pro-municipal-block-meta">
              <span className="pro-municipal-badge-tag">
                EJE 0{currentAxis.number} DE 0{total}
              </span>
              <span className="pro-municipal-dept-tag">PDC • LA UNIÓN</span>
            </div>

            <h3 className="pro-municipal-block-title">{currentAxis.name}</h3>

            <p className="pro-municipal-block-tagline">{currentAxis.tagline}</p>

            {/* Concrete Actions List (Clean, icon-free lines) */}
            <div className="pro-municipal-actions-wrap">
              <span className="pro-municipal-actions-title">
                Programas y Acciones Concretas:
              </span>
              <div className="pro-municipal-actions-list">
                {currentAxis.programs.map((prog, pIdx) => (
                  <div key={pIdx} className="pro-municipal-action-row">
                    <span className="pro-municipal-action-num">0{pIdx + 1}</span>
                    <p className="pro-municipal-action-text">{prog}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Navigation Controls */}
            <div className="pro-municipal-nav-row">
              <div className="pro-municipal-nav-btns">
                <button
                  onClick={handlePrev}
                  className="pro-municipal-nav-btn"
                  aria-label="Eje anterior"
                >
                  <ChevronLeft size={18} />
                  <span>Anterior</span>
                </button>
                <button
                  onClick={handleNext}
                  className="pro-municipal-nav-btn pro-municipal-nav-btn-next"
                  aria-label="Siguiente eje"
                >
                  <span>Siguiente</span>
                  <ChevronRight size={18} />
                </button>
              </div>

              <span className="pro-municipal-counter-pill">
                0{currentAxis.number} / 0{total} Ejes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
