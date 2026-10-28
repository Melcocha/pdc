import React, { useState } from 'react';
import { deputyProposals } from '../data/campaignData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProBlueprintProposals() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = deputyProposals.length;
  const current = deputyProposals[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  return (
    <section className="pro-section pro-proposals-section" id="propuestas">
      <div className="pro-proposals-fullwidth">
        {/* Section Header (Clean, icon-free, no eyebrow tag) */}
        <div className="pro-section-header pro-proposals-header">
          <h2 className="pro-title pro-proposals-title">12 Propuestas e Iniciativas de Ley</h2>
          <p className="pro-subtitle pro-proposals-subtitle">
            Iniciativas concretas diseñadas para aliviar la economía de las familias y fortalecer los servicios públicos.
          </p>
        </div>

        {/* Hero-Grade Split Showcase Card (100% Width) */}
        <div className="pro-proposal-hero-card">
          {/* Left Column: Thematic Photography Showcase */}
          <div className="pro-proposal-image-col">
            <div className="pro-proposal-image-wrapper">
              <img
                key={current.id}
                src={current.image}
                alt={current.title}
                className="pro-proposal-hero-img"
              />
              <div className="pro-proposal-img-gradient" />
              <div className="pro-proposal-img-badge">
                <span>{current.id < 10 ? `0${current.id}` : current.id} / {total} • PROPUESTA DE LEY</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Content Block (High-Contrast, Elegant) */}
          <div className="pro-proposal-content-col" key={`content-${current.id}`}>
            <h3 className="pro-proposal-card-title">{current.title}</h3>

            <p className="pro-proposal-card-desc">{current.shortDesc}</p>

            {current.impact && (
              <div className="pro-proposal-impact-card">
                <span className="pro-proposal-impact-label">Beneficio Directo para La Unión:</span>
                <p className="pro-proposal-impact-text">{current.impact}</p>
              </div>
            )}

            {/* Navigation Controls */}
            <div className="pro-proposal-nav-row">
              <div className="pro-proposal-nav-buttons">
                <button
                  onClick={handlePrev}
                  className="pro-proposal-nav-btn pro-proposal-nav-btn-prev"
                  aria-label="Propuesta anterior"
                >
                  <ChevronLeft size={18} />
                  <span>Anterior</span>
                </button>
                <button
                  onClick={handleNext}
                  className="pro-proposal-nav-btn pro-proposal-nav-btn-next"
                  aria-label="Siguiente propuesta"
                >
                  <span>Siguiente</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quick-Jump Selector Pills (Clean short tags, no truncation) */}
        <div className="pro-proposal-pills-bar">
          {deputyProposals.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setCurrentIndex(idx)}
              className={`pro-proposal-pill-tab ${idx === currentIndex ? 'active' : ''}`}
            >
              <span className="pro-proposal-pill-num">{p.id < 10 ? `0${p.id}` : p.id}</span>
              <span className="pro-proposal-pill-tag">{p.tag || p.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
