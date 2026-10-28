import React, { useState } from 'react';
import { municipalPlan } from '../data/campaignData';
import {
  HeartPulse,
  Wheat,
  Ship,
  Users,
  Building2,
  GraduationCap,
  Trees,
  Footprints,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  HeartPulse: HeartPulse,
  Wheat: Wheat,
  Ship: Ship,
  Users: Users,
  Building2: Building2,
  GraduationCap: GraduationCap,
  Trees: Trees,
  Road: Footprints,
  HeartHandshake: HeartHandshake,
};

export default function ProRadialMunicipalPlan() {
  const [selectedAxisId, setSelectedAxisId] = useState('salud');

  const activeAxis = municipalPlan.axes.find((a) => a.id === selectedAxisId) || municipalPlan.axes[0];
  const IconComponent = iconMap[activeAxis.icon] || Layers;

  return (
    <section className="pro-section pro-radial-section" id="plan-municipal">
      <div className="pro-container">
        <div className="pro-section-header">
          <span className="pro-eyebrow">
            <span className="pro-eyebrow-pill">
              <Sparkles size={14} style={{ display: 'inline', marginRight: '5px' }} />
              Propuesta Municipal • {municipalPlan.author}
            </span>
          </span>
          <h2 className="pro-title">Plan de Trabajo Municipal: Los 9 Ejes Articuladores</h2>
          <p className="pro-subtitle">
            Basado en el diagrama circular de la <strong>Página 3</strong> del documento oficial, con el eje central articulador en la <strong>Economía Familiar</strong>. Haz clic en cada eje para conocer sus proyectos concretos.
          </p>
        </div>

        <div className="pro-radial-dashboard">
          {/* Left Column: Visual 9-Axes Control Panel */}
          <div className="pro-radial-control-side">
            {/* Center Hub Graphic */}
            <div className="pro-hub-card">
              <span className="pro-hub-eyebrow">EJE CENTRAL ARTICULADOR</span>
              <h3 className="pro-hub-title">{municipalPlan.coreAxis}</h3>
              <p className="pro-hub-sub">
                PDC • Propuesta OCT2026 - FEB2027
              </p>
            </div>

            {/* 9 Orbital Axis Selector Buttons */}
            <div className="pro-axes-button-grid">
              {municipalPlan.axes.map((axis) => {
                const isActive = axis.id === selectedAxisId;
                const AxisIcon = iconMap[axis.icon] || Layers;
                return (
                  <button
                    key={axis.id}
                    onClick={() => setSelectedAxisId(axis.id)}
                    className={`pro-axis-selector-btn ${isActive ? 'active' : ''}`}
                    title={axis.name}
                  >
                    <span className="pro-axis-num">0{axis.number}</span>
                    <span className="pro-axis-btn-title">{axis.name}</span>
                    <AxisIcon size={16} className="pro-axis-btn-icon" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Detailed Programs View */}
          <div className="pro-radial-detail-side">
            <div className="pro-detail-header-card">
              <div className="pro-detail-header-meta">
                <span className="pro-detail-badge">
                  EJE 0{activeAxis.number} DE 09 • ECONOMÍA FAMILIAR
                </span>
                <div className="pro-detail-icon-pill">
                  <IconComponent size={24} color="var(--pdc-green)" />
                </div>
              </div>

              <h3 className="pro-detail-title">{activeAxis.name}</h3>
              <p className="pro-detail-tagline">{activeAxis.tagline}</p>
            </div>

            <div className="pro-programs-list-wrap">
              <h4 className="pro-programs-heading">Programas y Acciones Concretas:</h4>
              <div className="pro-programs-grid">
                {activeAxis.programs.map((program, idx) => (
                  <div key={idx} className="pro-program-card">
                    <div className="pro-program-bullet-icon">
                      <CheckCircle2 size={18} color="var(--pdc-green)" />
                    </div>
                    <p className="pro-program-text">{program}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pro-detail-footer">
              <div className="pro-detail-source">
                <span>Eje Programático Oficial • Plan de Gobierno Municipal Luis Ortiz (PDC)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
