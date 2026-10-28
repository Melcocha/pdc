import React from 'react';
import { campaignData } from '../data/campaignData';

export default function WixFooter() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="wix-footer">
      <div className="wix-container">
        <div className="wix-footer-content">
          <div className="wix-footer-logos">
            <img src={campaignData.logos.pdc} alt="PDC" className="wix-footer-logo-img" />
            <img src={campaignData.logos.fs} alt="Fuerza Solidaria" className="wix-footer-logo-img" />
          </div>

          <div style={{ maxWidth: '640px' }}>
            <h4 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '0.4rem', fontFamily: 'var(--font-serif)' }}>
              {campaignData.party}
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>
              {campaignData.coalition} para diputados. {campaignData.department} • {campaignData.electionYear}.
            </p>
          </div>

          <ul className="wix-footer-links">
            <li><a href="#inicio" onClick={(e) => { e.preventDefault(); handleScroll('inicio'); }}>Inicio</a></li>
            <li><a href="#candidatos" onClick={(e) => { e.preventDefault(); handleScroll('candidatos'); }}>Candidatos</a></li>
            <li><a href="#propuestas" onClick={(e) => { e.preventDefault(); handleScroll('propuestas'); }}>Propuestas Legislativas</a></li>
            <li><a href="#plan-municipal" onClick={(e) => { e.preventDefault(); handleScroll('plan-municipal'); }}>Plan Municipal</a></li>
          </ul>
        </div>

        <div className="wix-footer-bottom">
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} {campaignData.coalition} • La Unión, El Salvador. Teléfono oficial: {campaignData.contactPhone}.
          </p>
        </div>
      </div>
    </footer>
  );
}
