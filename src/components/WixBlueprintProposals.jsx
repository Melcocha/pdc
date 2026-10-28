import React from 'react';
import { deputyProposals } from '../data/campaignData';

export default function WixBlueprintProposals() {
  return (
    <section className="wix-section" id="propuestas">
      <div className="wix-container">
        <div className="wix-section-header">
          <span className="wix-eyebrow">A Blueprint for Progress • Gestión Legislativa</span>
          <h2 className="wix-title">Propuestas e Iniciativas para La Unión</h2>
          <p className="wix-lead">
            Iniciativas concretas a impulsar como Diputado por el departamento de La Unión, orientadas a resolver las necesidades reales del pueblo salvadoreño.
          </p>
        </div>

        <div className="wix-blueprint-grid">
          {deputyProposals.map((prop) => (
            <div key={prop.id} className="wix-proposal-card">
              <div className="wix-prop-header">
                <span className="wix-prop-number">{prop.id < 10 ? `0${prop.id}` : prop.id}</span>
                <span className="wix-prop-category">{prop.category}</span>
              </div>

              <h4 className="wix-prop-title">{prop.title}</h4>
              <p className="wix-prop-desc">{prop.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
