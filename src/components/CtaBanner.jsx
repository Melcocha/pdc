import React from 'react';
import { Heart, UserPlus, ShieldAlert } from 'lucide-react';

export default function CtaBanner({ onOpenAffiliation, onOpenDonation }) {
  return (
    <section className="cta-banner-section">
      <div className="cta-banner-bg"></div>
      <div className="container">
        <div className="cta-banner-content">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#fbbf24', fontSize: '0.86rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
            <ShieldAlert size={18} />
            <span>Compromiso Nacional Inquebrantable</span>
          </div>

          <h2 className="cta-banner-title">
            Unidos contra la injusticia, la impunidad y <span>el atraso social</span>
          </h2>

          <p className="cta-banner-lead">
            El verdadero cambio no vendrá de las maquinarias de siempre, sino de los millones de ciudadanos honestos que decidimos dar un paso al frente por el futuro de nuestras familias.
          </p>

          <div className="cta-banner-actions">
            <button onClick={onOpenDonation} className="btn btn-donate">
              <Heart size={16} fill="#ffffff" />
              <span>Donar a la Campaña</span>
            </button>

            <button onClick={onOpenAffiliation} className="btn btn-gold">
              <UserPlus size={16} />
              <span>Afíliate Gratis Hoy</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
