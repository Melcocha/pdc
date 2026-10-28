import React from 'react';
import { campaignData, deputyCandidate } from '../data/campaignData';
import { Phone, MapPin, FileText, ShieldCheck, HeartHandshake } from 'lucide-react';

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
      <div className="pro-container">
        {/* Community Call Strip */}
        <div className="pro-footer-callout">
          <div className="pro-footer-callout-icon">
            <HeartHandshake size={28} color="#86efac" />
          </div>
          <div className="pro-footer-callout-text">
            <p>“{campaignData.communityCall}”</p>
            <span>— {deputyCandidate.name} • {deputyCandidate.ballot}</span>
          </div>
        </div>

        <div className="pro-footer-main">
          {/* Col 1: Brand & Coalition */}
          <div className="pro-footer-col-brand">
            <div className="pro-footer-logos-row">
              <img src={campaignData.logos.pdc} alt="PDC El Salvador" className="pro-footer-logo-img" />
              <img src={campaignData.logos.fs} alt="Fuerza Solidaria" className="pro-footer-logo-img" />
            </div>

            <h4 className="pro-footer-brand-title">
              {campaignData.party}
            </h4>
            <p className="pro-footer-brand-sub">
              {campaignData.coalition} • {campaignData.department} • {campaignData.electionYear}
            </p>

            <div className="pro-footer-phone-box">
              <Phone size={15} color="#86efac" />
              <a href={`tel:${campaignData.contactPhone}`} className="pro-footer-phone-link">
                Coordinación Ciudadana: <strong>{campaignData.contactPhone}</strong>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="pro-footer-col-links">
            <h5 className="pro-footer-links-title">Plataforma</h5>
            <ul className="pro-footer-nav-list">
              <li><a href="#inicio" onClick={(e) => { e.preventDefault(); handleScroll('inicio'); }}>Inicio</a></li>
              <li><a href="#candidatos" onClick={(e) => { e.preventDefault(); handleScroll('candidatos'); }}>Fórmula a Diputados</a></li>
              <li><a href="#propuestas" onClick={(e) => { e.preventDefault(); handleScroll('propuestas'); }}>12 Propuestas de Ley</a></li>
              <li><a href="#plan-municipal" onClick={(e) => { e.preventDefault(); handleScroll('plan-municipal'); }}>Plan Municipal (9 Ejes)</a></li>
              <li><a href="#distritos" onClick={(e) => { e.preventDefault(); handleScroll('distritos'); }}>Impacto por Distritos</a></li>
            </ul>
          </div>

          {/* Col 3: Formula Details */}
          <div className="pro-footer-col-formula">
            <h5 className="pro-footer-links-title">Fórmula Electoral 2027</h5>
            <div className="pro-footer-formula-card">
              <strong>{deputyCandidate.name}</strong>
              <span>Diputado Propietario • {deputyCandidate.ballot}</span>
              <p>Licenciado en Trabajo Social y Maestro en Investigación Social.</p>
            </div>
            <div className="pro-footer-formula-card" style={{ marginTop: '0.8rem' }}>
              <strong>{deputyCandidate.deputySubstitute.name}</strong>
              <span>{deputyCandidate.deputySubstitute.role}</span>
              <p>Coalición PDC & Fuerza Solidaria por La Unión.</p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Ethics Ribbon */}
        <div className="pro-footer-bottom">
          <div className="pro-footer-legal">
            <ShieldCheck size={16} color="#86efac" />
            <span>Información oficial para fines cívicos y pedagógicos electorales • Elecciones El Salvador 2027.</span>
          </div>
          <p className="pro-footer-copy">
            © {new Date().getFullYear()} {campaignData.coalition}. Departamento de La Unión.
          </p>
        </div>
      </div>
    </footer>
  );
}
