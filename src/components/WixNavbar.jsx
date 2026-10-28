import React from 'react';
import { campaignData } from '../data/campaignData';
import { Phone, ArrowRight } from 'lucide-react';

export default function WixNavbar() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="wix-header" id="inicio">
      <div className="wix-container wix-nav-wrap">
        <a href="#inicio" className="wix-brand" onClick={(e) => { e.preventDefault(); handleScroll('inicio'); }}>
          <img
            src={campaignData.logos.pdc}
            alt="PDC El Salvador"
            className="wix-brand-logo"
          />
          <div className="wix-brand-text">
            <span className="wix-brand-name">WILLIAN MÉNDEZ & LUIS ORTIZ</span>
            <span className="wix-brand-sub">PDC • DEPARTAMENTO DE LA UNIÓN</span>
          </div>
        </a>

        <nav>
          <ul className="wix-menu">
            <li>
              <a href="#inicio" className="wix-menu-link" onClick={(e) => { e.preventDefault(); handleScroll('inicio'); }}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#candidatos" className="wix-menu-link" onClick={(e) => { e.preventDefault(); handleScroll('candidatos'); }}>
                Candidatos
              </a>
            </li>
            <li>
              <a href="#propuestas" className="wix-menu-link" onClick={(e) => { e.preventDefault(); handleScroll('propuestas'); }}>
                Propuestas Legislativas
              </a>
            </li>
            <li>
              <a href="#plan-municipal" className="wix-menu-link" onClick={(e) => { e.preventDefault(); handleScroll('plan-municipal'); }}>
                Plan Municipal
              </a>
            </li>
          </ul>
        </nav>

        <div className="wix-nav-action">
          <a href={`tel:${campaignData.contactPhone}`} className="wix-phone-badge">
            <Phone size={14} />
            <span>TEL. {campaignData.contactPhone}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
