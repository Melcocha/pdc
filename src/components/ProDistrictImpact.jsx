import React, { useState } from 'react';
import { districtImpacts } from '../data/campaignData';
import { MapPin, CheckCircle2, ArrowRight, ShieldCheck, Compass } from 'lucide-react';

export default function ProDistrictImpact() {
  const [activeDistrictId, setActiveDistrictId] = useState('conchagua');

  const currentDistrict = districtImpacts.find((d) => d.id === activeDistrictId) || districtImpacts[0];

  return (
    <section className="pro-section pro-district-section" id="distritos">
      <div className="pro-container">
        <div className="pro-section-header">
          <span className="pro-eyebrow">
            <span className="pro-eyebrow-pill">
              <Compass size={14} style={{ display: 'inline', marginRight: '5px' }} />
              Territorio y Comunidades
            </span>
          </span>
          <h2 className="pro-title">Impacto Directo por Distritos de La Unión</h2>
          <p className="pro-subtitle">
            Compromisos legislativos y municipales específicos diseñados para atender las realidades de cada zona del departamento.
          </p>
        </div>

        {/* District Selector Tabs */}
        <div className="pro-district-tabs-bar">
          {districtImpacts.map((district) => {
            const isActive = district.id === activeDistrictId;
            return (
              <button
                key={district.id}
                onClick={() => setActiveDistrictId(district.id)}
                className={`pro-district-tab-btn ${isActive ? 'active' : ''}`}
              >
                <MapPin size={16} />
                <span>{district.name}</span>
                {isActive && <span className="pro-district-active-pip"></span>}
              </button>
            );
          })}
        </div>

        {/* District Content Card */}
        <div className="pro-district-card">
          <div className="pro-district-card-header">
            <div>
              <span className="pro-district-badge">{currentDistrict.badge}</span>
              <h3 className="pro-district-title">{currentDistrict.name}</h3>
              <p className="pro-district-lead">
                Iniciativas prioritarias respaldadas en el Broshure Legislativo de Willian Méndez y el Plan Municipal de Luis Ortiz:
              </p>
            </div>
            <div className="pro-district-seal">
              <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', color: 'var(--pdc-green)' }}>
                DEPARTAMENTO DE LA UNIÓN
              </span>
              <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--slate-900)' }}>
                ELECCIONES 2027
              </strong>
            </div>
          </div>

          <div className="pro-district-grid">
            {currentDistrict.projects.map((project, idx) => (
              <div key={idx} className="pro-district-item">
                <div className="pro-district-icon-wrap">
                  <CheckCircle2 size={18} color="var(--pdc-green)" />
                </div>
                <div className="pro-district-item-content">
                  <span className="pro-district-item-num">Prioridad 0{idx + 1}</span>
                  <p>{project}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pro-district-card-footer">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--slate-600)', fontSize: '0.88rem' }}>
              <ShieldCheck size={16} color="var(--pdc-green)" />
              <span>Articulación permanente con líderes comunitarios y municipalidades de La Unión Sur y Norte.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
