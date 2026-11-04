import React from 'react';
import { campaignData } from '../data/campaignData';
import { goTo, scrollToId } from '../hooks/useHashRoute';
import { Phone } from 'lucide-react';

export default function ProFooter() {
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
                <a href="#/" onClick={(e) => { e.preventDefault(); goTo('/'); }}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#/municipal" onClick={(e) => { e.preventDefault(); goTo('/municipal'); }}>
                  Plataforma Municipal · Luis Ortiz
                </a>
              </li>
              <li>
                <a href="#/legislativa" onClick={(e) => { e.preventDefault(); goTo('/legislativa'); }}>
                  Plataforma Legislativa · Willian Méndez
                </a>
              </li>
              <li>
                <a href="#redes" onClick={(e) => { e.preventDefault(); scrollToId('redes'); }}>
                  Redes y código QR
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
