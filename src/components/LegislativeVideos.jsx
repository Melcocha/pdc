import React from 'react';
import { MousePointerClick } from 'lucide-react';
import CampaignVideo from './CampaignVideo';
import { videos } from '../data/mediaData';
import { campaignData } from '../data/campaignData';

const cards = [videos.willian, videos.carmen];

// Dos videos (diputado propietario PDC y diputada suplente Fuerza Solidaria).
// No arrancan solos: la persona debe hacer clic para activarlos.
export default function LegislativeVideos() {
  return (
    <section className="legvid-section" id="videos">
      <div className="legvid-container">
        <div className="legvid-intro">
          <span className="social-eyebrow">
            <span className="pro-pulse-dot" /> Mensajes de la fórmula
          </span>
          <h2 className="legvid-title">
            Escucha a tu <br />
            <em>fórmula a la diputación</em>
          </h2>
          <p className="legvid-text">
            Dos voces, una coalición. Presiona cada video para conocer el compromiso de quienes
            representarán a La Unión en la Asamblea Legislativa.
          </p>
          <span className="legvid-hint">
            <MousePointerClick size={16} /> Toca un video para activarlo
          </span>

          <div className="legvid-logos">
            <img src={campaignData.logos.pdc} alt="PDC" />
            <span>+</span>
            <img src={campaignData.logos.fs} alt="Fuerza Solidaria" />
          </div>
        </div>

        <div className="legvid-cards">
          {cards.map((v) => (
            <figure className="legvid-card" key={v.name}>
              <CampaignVideo
                src={v.src}
                poster={v.poster}
                ratio="9 / 16"
                label={`Mensaje de ${v.name}`}
              />
              <figcaption className="legvid-caption">
                <span className="legvid-party">{v.party}</span>
                <strong>{v.name}</strong>
                <small>{v.role}</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
