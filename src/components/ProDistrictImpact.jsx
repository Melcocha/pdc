import React, { useState } from 'react';
import { districtImpacts } from '../data/campaignData';
import { ArrowRight, X, CheckCircle2 } from 'lucide-react';

export default function ProDistrictImpact() {
  const [activeDistrict, setActiveDistrict] = useState(null);

  return (
    <section className="vance-principles-section" id="distritos">
      <div className="vance-principles-container">
        
        {/* Centered Editorial Header (Matching 'The Vance Principles') */}
        <div className="vance-principles-header">
          <h2 className="vance-principles-title">
            Impacto <br />
            <em>Territorial</em>
          </h2>

          <p className="vance-principles-sub">
            Compromisos prioritarios y acciones estratégicas para impulsar el desarrollo, la economía y el bienestar de los 4 distritos de La Unión.
          </p>
        </div>

        {/* 4 White Square Cards in a 4-Column Row (Matching Image 2) */}
        <div className="vance-principles-grid">
          {districtImpacts.map((district, index) => {
            const num = index + 1;
            return (
              <div
                key={district.id}
                className="vance-principle-card"
                onClick={() => setActiveDistrict(district)}
                role="button"
                tabIndex={0}
                aria-label={`Ver propuestas para ${district.name}`}
              >
                {/* Hand-sketched circled number matching reference */}
                <div className="vance-card-num-box">
                  <svg className="vance-circle-svg" viewBox="0 0 54 54" fill="none">
                    <ellipse
                      cx="27"
                      cy="27"
                      rx="23"
                      ry="23.5"
                      stroke="#007a3d"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      transform="rotate(-5 27 27)"
                    />
                    <ellipse
                      cx="27.5"
                      cy="26.8"
                      rx="21"
                      ry="21.5"
                      stroke="#007a3d"
                      strokeWidth="1.2"
                      opacity="0.65"
                      strokeLinecap="round"
                      transform="rotate(8 27.5 26.8)"
                    />
                    <text
                      x="27"
                      y="35"
                      textAnchor="middle"
                      fontSize="22"
                      fontFamily="'Playfair Display', Georgia, serif"
                      fontWeight="600"
                      fill="#007a3d"
                    >
                      {num}
                    </text>
                  </svg>
                </div>

                {/* Middle Breathing Space with Subtle Category */}
                <div className="vance-card-middle">
                  <span className="vance-card-badge">{district.badge}</span>
                </div>

                {/* Bottom Title matching Image 2 */}
                <div className="vance-card-bottom">
                  <h3 className="vance-card-title">
                    {district.id === 'la-union-cabecera' ? 'LA UNIÓN CABECERA' : district.name.toUpperCase()}
                  </h3>
                  <span className="vance-card-cta">
                    Ver {district.projects.length} Proyectos <ArrowRight size={14} className="vance-card-arrow" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* District Detail Modal */}
      {activeDistrict && (
        <div className="vance-modal-backdrop" onClick={() => setActiveDistrict(null)}>
          <div className="vance-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              className="vance-modal-close"
              onClick={() => setActiveDistrict(null)}
              aria-label="Cerrar modal"
            >
              <X size={20} />
            </button>

            <div className="vance-modal-header">
              <span className="vance-modal-eyebrow">
                Compromiso Territorial • PDC La Unión
              </span>
              <h3 className="vance-modal-title">{activeDistrict.name}</h3>
              <p className="vance-modal-badge">{activeDistrict.badge}</p>
            </div>

            <div className="vance-modal-body">
              <h4 className="vance-modal-subtitle">
                Proyectos y Acciones Concretas:
              </h4>

              <div className="vance-modal-list">
                {activeDistrict.projects.map((proj, pIdx) => (
                  <div key={pIdx} className="vance-modal-item">
                    <span className="vance-modal-num">0{pIdx + 1}</span>
                    <p className="vance-modal-text">{proj}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="vance-modal-footer">
              <div className="vance-modal-tagline">
                <CheckCircle2 size={18} className="vance-modal-check" />
                <span>Iniciativas diseñadas para generar impacto real e inmediato en las familias del distrito.</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
