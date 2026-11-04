import React from 'react';
import { ArrowLeft, ArrowDown, MapPin } from 'lucide-react';
import { luisProfile } from '../data/mediaData';
import { goTo, scrollToId } from '../hooks/useHashRoute';

const stats = [
  { num: '9', title: 'Ejes de Trabajo', text: 'Plan Economía Familiar' },
  { num: '8', title: 'Distritos', text: 'Recorridos en La Unión Sur' },
  { num: '20', title: 'Guías Turísticos', text: 'Contratación local propuesta' },
  { num: '1', title: 'Mini Banco Municipal', text: 'Para mujeres emprendedoras' },
];

export default function MunicipalHero() {
  return (
    <>
      <section className="opencity-hero-section welcome-hero muni-hero" id="inicio">
        <div className="opencity-slides-backdrop">
          <div
            className="opencity-bg-slide active"
            style={{ backgroundImage: 'url(/assets/slide_pescadores.png)' }}
          />
          <div className="opencity-backdrop-overlay" />
          <div className="welcome-fish-mark" aria-hidden="true" />
        </div>

        <div className="pro-container opencity-hero-container welcome-container">
          <div className="muni-hero-grid">
            <div className="opencity-green-block welcome-block">
              <a
                href="#/"
                className="page-back"
                onClick={(e) => {
                  e.preventDefault();
                  goTo('/');
                }}
              >
                <ArrowLeft size={15} /> Volver al inicio
              </a>

              <span className="welcome-eyebrow">
                <span className="pro-pulse-dot" />
                Plataforma Municipal
              </span>

              <h1 className="opencity-hero-title">
                Plan de Trabajo con la <em>Economía Familiar</em> al centro
              </h1>

              <p className="opencity-hero-sub">
                Nueve ejes para el desarrollo de los ocho distritos de La Unión Sur: salud, campo,
                turismo, educación, ambiente, infraestructura y oportunidades para las mujeres.
              </p>

              <div className="welcome-actions">
                <button className="welcome-btn-light" onClick={() => scrollToId('conoce-luis')}>
                  <span>Conoce a Luis Ortiz</span>
                  <ArrowDown size={17} />
                </button>
                <button className="welcome-btn-ghost" onClick={() => scrollToId('plan-municipal')}>
                  <span>Ver los 9 ejes</span>
                </button>
              </div>
            </div>

            <div className="muni-portrait-col">
              <div className="muni-portrait-frame">
                <img src={luisProfile.photo} alt={`${luisProfile.shortName}, ${luisProfile.role}`} />
                <div className="welcome-video-tag">
                  <span className="opencity-cutout-tag-casilla">{luisProfile.role}</span>
                  <h3 className="opencity-cutout-tag-name">{luisProfile.shortName}</h3>
                  <span className="opencity-cutout-tag-role">
                    <MapPin size={12} style={{ verticalAlign: '-1px' }} /> {luisProfile.municipality} · PDC
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

      <section className="opencity-stats-ribbon">
        <div className="pro-container">
          <div className="opencity-stats-grid">
            {stats.map((s) => (
              <div className="opencity-stat-box" key={s.title}>
                <span className="opencity-stat-num">{s.num}</span>
                <div>
                  <strong>{s.title}</strong>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
