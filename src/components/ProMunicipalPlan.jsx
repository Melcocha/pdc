import React, { useState } from 'react';
import { municipalPlan } from '../data/campaignData';
import { CheckCircle2, ChevronRight, Layers } from 'lucide-react';

export default function ProMunicipalPlan() {
  const [selectedAxisId, setSelectedAxisId] = useState('salud');

  const activeAxis = municipalPlan.axes.find((a) => a.id === selectedAxisId) || municipalPlan.axes[0];

  return (
    <section className="pro-section pro-municipal-section" id="plan-municipal">
      <div className="pro-container">
        <div className="pro-section-header">
          <span className="pro-eyebrow">
            <span className="pro-eyebrow-pill">{municipalPlan.party} • {municipalPlan.campaign}</span>
          </span>
          <h2 className="pro-title">Plan de Gobierno Municipal: {municipalPlan.coreAxis}</h2>
          <p className="pro-subtitle">
            Propuesta de trabajo territorial liderada por {municipalPlan.author}, con 9 ejes diseñados para fortalecer directamente la economía familiar.
          </p>
        </div>

        {/* Dashboard Layout: Left Vertical Axis Navigator / Right Dynamic Preview */}
        <div className="pro-municipal-dashboard">
          {/* Left: 9 Axis Selector Buttons */}
          <div className="pro-axes-vertical-list">
            <span style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--slate-500)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Layers size={14} color="var(--pdc-green)" />
              Selecciona un Eje de Trabajo:
            </span>

            {municipalPlan.axes.map((axis) => {
              const isActive = axis.id === selectedAxisId;
              return (
                <button
                  key={axis.id}
                  onClick={() => setSelectedAxisId(axis.id)}
                  className={`pro-axis-btn ${isActive ? 'active' : ''}`}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span className="pro-axis-btn-num">{axis.number}.</span>
                    <span>{axis.name}</span>
                  </span>
                  <ChevronRight size={16} style={{ opacity: isActive ? 1 : 0.4 }} />
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Details Preview */}
          <div className="pro-axis-preview-panel">
            <div className="pro-axis-preview-header">
              <span className="pro-eyebrow" style={{ margin: '0 0 0.3rem' }}>
                Eje de Trabajo {activeAxis.number} de 9 • Plan {municipalPlan.author}
              </span>
              <h3>{activeAxis.name}</h3>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--slate-500)' }}>
                Eje articulador: {municipalPlan.coreAxis}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {activeAxis.programs.map((prog, i) => (
                <div key={i} className="pro-program-item">
                  <CheckCircle2 size={20} />
                  <span>{prog}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
