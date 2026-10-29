import React from 'react';
import { campaignData } from '../data/campaignData';
import { Phone } from 'lucide-react';

export default function ProFooter() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="pro-footer">
      <div className="pro-footer-fullwidth">
        <div className="pro-footer-grid">
          {/* Col 1: Identity & Brand */}
          <div className="pro-footer-col-brand">
            <div className="pro-footer-logo-wrap">
              <img
                src={campaignData.logos.pdc}
                alt="PDC El Salvador"
                className="pro-footer-logo-img"
              />
              <div>
                <h4 className="pro-footer-brand-title">Partido Demócrata Cristiano</h4>
                <span className="pro-footer-brand-sub">Departamento de La Unión</span>
              </div>
            </div>

            <a href={`tel:${campaignData.contactPhone}`} className="pro-footer-phone-pill">
              <Phone size={14} />
              <span>Coordinación: <strong>{campaignData.contactPhone}</strong></span>
            </a>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="pro-footer-col-nav">
            <h5 className="pro-footer-heading">Secciones</h5>
            <ul className="pro-footer-links">
              <li>
                <a href="#inicio" onClick={(e) => { e.preventDefault(); handleScroll('inicio'); }}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#candidatos" onClick={(e) => { e.preventDefault(); handleScroll('candidatos'); }}>
                  Fórmula a Diputados
                </a>
              </li>
              <li>
                <a href="#propuestas" onClick={(e) => { e.preventDefault(); handleScroll('propuestas'); }}>
                  12 Propuestas de Ley
                </a>
              </li>
              <li>
                <a href="#plan-municipal" onClick={(e) => { e.preventDefault(); handleScroll('plan-municipal'); }}>
                  Plan Municipal (9 Ejes)
                </a>
              </li>
              <li>
                <a href="#distritos" onClick={(e) => { e.preventDefault(); handleScroll('distritos'); }}>
                  Impacto Territorial
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Ballot & Election Callout */}
          <div className="pro-footer-col-ballot">
            <h5 className="pro-footer-heading">Elecciones 2027</h5>
            <div className="pro-footer-ballot-box">
              <span className="pro-footer-ballot-chip">MARCA LA CASILLA 1</span>
              <p className="pro-footer-ballot-desc">
                Coalición oficial PDC & Fuerza Solidaria por el bienestar y futuro de nuestras comunidades.
              </p>
            </div>
          </div>
        </div>

        {/* Minimal Copyright Ribbon */}
        <div className="pro-footer-bottom-ribbon">
          <p>© {new Date().getFullYear()} Partido Demócrata Cristiano (PDC) • La Unión, El Salvador.</p>
        </div>
      </div>
    </footer>
  );
}
