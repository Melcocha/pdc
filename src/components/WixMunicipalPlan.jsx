import React, { useState } from 'react';
import { municipalPlan } from '../data/campaignData';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export default function WixMunicipalPlan() {
  const [activeAxisId, setActiveAxisId] = useState('salud');

  const activeAxis = municipalPlan.axes.find((a) => a.id === activeAxisId) || municipalPlan.axes[0];

  return (
    <section className="wix-section wix-municipal-section" id="plan-municipal">
      <div className="wix-container">
        <div className="wix-section-header">
          <span className="wix-eyebrow">
            {municipalPlan.party} • {municipalPlan.campaign}
          </span>
          <h2 className="wix-title">{municipalPlan.title}: {municipalPlan.coreAxis}</h2>
          <p className="wix-lead">
            Propuesta de diseño municipal liderada por {municipalPlan.author}, estructurada en 9 ejes de trabajo directo con las comunidades y sectores productivos.
          </p>
        </div>

        {/* 9 Axes Selector Tabs */}
        <div className="wix-axes-nav">
          {municipalPlan.axes.map((axis) => (
            <button
              key={axis.id}
              onClick={() => setActiveAxisId(axis.id)}
              className={`wix-axis-tab ${activeAxisId === axis.id ? 'active' : ''}`}
            >
              <span>{axis.number}. {axis.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Axis Detail Box */}
        <div className="wix-axis-detail-box">
          <div className="wix-axis-detail-header">
            <div>
              <span className="wix-eyebrow" style={{ marginBottom: '0.3rem' }}>
                Eje de Trabajo {activeAxis.number} de 9 • Plan {municipalPlan.author}
              </span>
              <h3 style={{ fontSize: '1.8rem', margin: 0 }}>{activeAxis.name}</h3>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Enfoque: Economía Familiar
              </span>
            </div>
          </div>

          <ul className="wix-axis-programs-list">
            {activeAxis.programs.map((program, idx) => (
              <li key={idx} className="wix-program-item">
                <CheckCircle2 size={20} />
                <span>{program}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
