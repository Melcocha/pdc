import React from 'react';
import { ArrowDown, MapPin } from 'lucide-react';
import CampaignVideo from './CampaignVideo';
import { videos } from '../data/mediaData';
import { scrollToId } from '../hooks/useHashRoute';

// Portada: el video de bienvenida del candidato a alcalde arranca solo al entrar.
export default function HomeWelcome() {
  return (
    <section className="opencity-hero-section welcome-hero" id="inicio">
      <div className="opencity-slides-backdrop">
        <div
          className="opencity-bg-slide active"
          style={{ backgroundImage: 'url(/assets/slide_pescadores.png)' }}
        />
        <div className="opencity-backdrop-overlay" />
        <div className="welcome-fish-mark" aria-hidden="true" />
      </div>

      <div className="pro-container opencity-hero-container welcome-container">
        <div className="welcome-grid">
          <div className="opencity-green-block welcome-block">
            <span className="welcome-eyebrow">
              <span className="pro-pulse-dot" />
              Mensaje de bienvenida
            </span>

            <h1 className="opencity-hero-title">
              Bienvenido a <br />
              La Unión Sur con <em>Luis Ortiz</em>
            </h1>

            <p className="opencity-hero-sub">
              Candidato a Alcalde por el PDC, el partido del pescadito. Escucha su mensaje y
              conoce el plan de trabajo para los ocho distritos del municipio.
            </p>

            <div className="welcome-actions">
              <button className="welcome-btn-light" onClick={() => scrollToId('plataformas')}>
                <span>Ver las plataformas</span>
                <ArrowDown size={17} />
              </button>
            </div>
          </div>

          <div className="welcome-video-col">
            <div className="welcome-video-wrap">
              <CampaignVideo
                src={videos.luis.src}
                poster={videos.luis.poster}
                autoStart
                ratio="4 / 3"
                label="Mensaje de bienvenida de Luis Ortiz, candidato a alcalde"
              />
              <div className="welcome-video-tag">
                <span className="opencity-cutout-tag-casilla">Candidato a Alcalde</span>
                <h3 className="opencity-cutout-tag-name">Luis Ortiz</h3>
                <span className="opencity-cutout-tag-role">
                  <MapPin size={12} style={{ verticalAlign: '-1px' }} /> La Unión Sur · PDC
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="opencity-bottom-curve">
        <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none">
          <path d="M0,40 C320,0 1120,0 1440,40 L1440,40 L0,40 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
