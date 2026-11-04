import React, { useState } from 'react';
import { ExternalLink, QrCode } from 'lucide-react';
import GreenQR from './GreenQR';
import { FacebookIcon, InstagramIcon, TiktokIcon } from './SocialIcons';
import { socialNetworks, qrTargetUrl } from '../data/mediaData';

const networkIcons = {
  facebook: FacebookIcon,
  tiktok: TiktokIcon,
  instagram: InstagramIcon,
};

// Tarjeta de perfil para redes que no se pueden incrustar de forma estable (TikTok).
function ProfileCard({ network }) {
  const Icon = networkIcons[network.icon];
  return (
    <div className="social-profile-card">
      <span className="social-profile-avatar">
        <img src="/assets/pdc_logo.jpg" alt="PDC La Unión" />
        <span className="social-profile-badge">
          <Icon size={18} />
        </span>
      </span>
      <strong className="social-profile-handle">{network.handle}</strong>
      <p>Síguenos en {network.platform} para ver los videos y novedades de la campaña.</p>
      <a className="social-profile-btn" href={network.url} target="_blank" rel="noreferrer">
        {network.cta} <ExternalLink size={15} />
      </a>
    </div>
  );
}

// Redes activas (incrustadas), canales extra y código QR. Se usa al final de cada página.
export default function SocialHub() {
  const [active, setActive] = useState(socialNetworks[0].id);
  const current = socialNetworks.find((n) => n.id === active);
  const qrValue = qrTargetUrl || (typeof window !== 'undefined' ? window.location.origin : '');

  return (
    <section className="social-section" id="redes">
      <div className="social-container">
        <div className="social-header">
          <span className="social-eyebrow">
            <span className="pro-pulse-dot" /> Redes activas
          </span>
          <h2 className="social-title">
            Síguenos y comparte <em>la campaña</em>
          </h2>
          <p className="social-sub">
            Todo lo que publicamos, en un solo lugar. Elige tu red favorita o escanea el código.
          </p>
        </div>

        <div className="social-grid">
          {/* Incrustaciones */}
          <div className="social-embed-card">
            <div className="social-tabs" role="tablist" aria-label="Redes sociales">
              {socialNetworks.map((n) => {
                const Icon = networkIcons[n.icon];
                return (
                  <button
                    key={n.id}
                    role="tab"
                    aria-selected={active === n.id}
                    className={`social-tab ${active === n.id ? 'active' : ''}`}
                    onClick={() => setActive(n.id)}
                  >
                    <Icon size={17} />
                    <span className="social-tab-text"><strong>{n.platform}</strong><small>{n.name}</small></span>
                  </button>
                );
              })}
            </div>

            <div className="social-embed-stage" role="tabpanel">
              {current.card ? (
                <ProfileCard key={current.id} network={current} />
              ) : (
                <iframe
                  key={current.id}
                  src={current.embed}
                  title={`${current.platform} ${current.name}`}
                  loading="lazy"
                  allow="encrypted-media; picture-in-picture; clipboard-write"
                  allowFullScreen
                  className={`social-iframe social-iframe-${current.icon}`}
                />
              )}
            </div>

            <div className="social-embed-foot">
              <span>
                {current.platform} · <strong>{current.handle}</strong>
              </span>
              <a href={current.url} target="_blank" rel="noreferrer">
                Abrir en {current.platform} <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* QR + canales */}
          <aside className="social-side">
            <div className="social-qr-card">
              <span className="social-qr-label">
                <QrCode size={15} /> Escanea y comparte
              </span>
              <div className="social-qr-plate">
                <GreenQR value={qrValue} size={220} />
              </div>
              <p>Apunta la cámara de tu celular para abrir la página de la campaña.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
