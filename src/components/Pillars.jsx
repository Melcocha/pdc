import React from 'react';
import { partyPillars } from '../data/partyData';
import { Shield, TrendingUp, GraduationCap, HeartPulse, Scale, Leaf, Check } from 'lucide-react';

const iconMap = {
  Shield: Shield,
  TrendingUp: TrendingUp,
  GraduationCap: GraduationCap,
  HeartPulse: HeartPulse,
  Scale: Scale,
  Leaf: Leaf
};

export default function Pillars() {
  return (
    <section className="section-padding" id="valores">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">Nuestros Principios</span>
          <h2 className="section-title">Pilares Ideológicos y Compromiso Social</h2>
          <p className="section-desc">
            No creemos en dogmas del pasado. Nuestra ideología se fundamenta en resultados concretos, integridad comprobable y respeto absoluto por la dignidad humana.
          </p>
        </div>

        <div className="pillars-grid">
          {partyPillars.map((pillar) => {
            const Icon = iconMap[pillar.icon] || Shield;
            return (
              <div key={pillar.id} className="glass-card pillar-card">
                <div className="pillar-icon-box">
                  <Icon size={28} />
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.description}</p>
                <div style={{ marginTop: 'auto', paddingTop: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-500)' }}>
                  <Check size={16} /> Compromiso Fundacional PDC
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
