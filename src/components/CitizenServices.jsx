import React from 'react';
import { citizenServices } from '../data/partyData';
import { UserCheck, FileSignature, Scale, Users, Eye, Sparkles, ArrowRight } from 'lucide-react';

const iconMap = {
  UserCheck: UserCheck,
  FileSignature: FileSignature,
  Scale: Scale,
  Users: Users,
  Eye: Eye,
  Sparkles: Sparkles
};

export default function CitizenServices({ onOpenAffiliation, onShowToast }) {
  const handleServiceClick = (serv) => {
    if (serv.actionType === 'affiliation') {
      onOpenAffiliation();
    } else if (serv.actionType === 'proposal') {
      const el = document.getElementById('buzon');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      onShowToast('Utiliza el Buzón Ciudadano para radicar tu propuesta de iniciativa popular.', 'info');
    } else if (serv.actionType === 'contact') {
      const el = document.getElementById('buzon');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      onShowToast('Selecciona "Asesoría Legal" en la categoría del formulario para agendar tu consulta gratuita.', 'info');
    } else if (serv.actionType === 'transparency') {
      onShowToast('Descargando el último balance semanal de Cuentas Claras en formato Excel/PDF...', 'success');
    }
  };

  return (
    <section className="sec-padding services-section" id="servicios">
      <div className="container">
        <div className="sec-header">
          <span className="badge-sub gold">Servicios & Trámites Abiertos</span>
          <h2 className="sec-title">Explora los Servicios Ciudadanos (Explore Online Services)</h2>
          <p className="sec-desc">
            Al estilo de una administración moderna y transparente, ponemos a tu disposición herramientas directas de participación, asesoría jurídica y control social.
          </p>
        </div>

        <div className="services-grid">
          {citizenServices.map((serv) => {
            const Icon = iconMap[serv.icon] || UserCheck;
            return (
              <div key={serv.id} className="service-card">
                <div className="service-card-top">
                  <div className="service-icon-box">
                    <Icon size={28} />
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>SERVICIO 24/7</span>
                </div>

                <h3 className="service-title">{serv.title}</h3>
                <p className="service-desc">{serv.desc}</p>

                <div style={{ marginTop: 'auto', paddingTop: '1.2rem', borderTop: '1px solid var(--border-light)' }}>
                  <button
                    onClick={() => handleServiceClick(serv)}
                    className="feature-link-btn"
                  >
                    <span>Acceder al Servicio</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
