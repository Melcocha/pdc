import React from 'react';
import { ArrowRight, Landmark, Scale } from 'lucide-react';
import { goTo } from '../hooks/useHashRoute';

const platforms = [
  {
    route: '/municipal',
    tone: 'municipal',
    icon: Landmark,
    kicker: 'Alcaldía de La Unión Sur',
    title: 'Plataforma Municipal',
    person: 'Luis Ortiz',
    role: 'Candidato a Alcalde',
    photo: '/assets/luis_ortiz_portrait.jpg',
    desc: 'Conoce a Luis Ortiz y sus 9 ejes de trabajo con la economía familiar en el centro.',
    points: ['Plan de 9 ejes', 'Hoja de vida', 'Ocho distritos'],
    cta: 'Entrar a la plataforma municipal',
  },
  {
    route: '/legislativa',
    tone: 'legislativa',
    icon: Scale,
    kicker: 'Asamblea Legislativa · Casilla 1',
    title: 'Plataforma Legislativa',
    person: 'Willian Méndez',
    role: 'Candidato a Diputado',
    photo: '/assets/willian_mendez_transparent.png',
    desc: 'La fórmula PDC y Fuerza Solidaria con 12 iniciativas de ley para el departamento.',
    points: ['12 iniciativas de ley', 'Fórmula de diputados', 'Impacto territorial'],
    cta: 'Entrar a la plataforma legislativa',
  },
];

export default function PlatformChooser() {
  return (
    <section className="vance-principles-section chooser-section" id="plataformas">
      <div className="vance-principles-container">
        <div className="vance-principles-header">
          <h2 className="vance-principles-title">
            Elige tu <br />
            <em>plataforma</em>
          </h2>
          <p className="vance-principles-sub">
            Dos propuestas, un mismo compromiso con La Unión. Entra a la que quieras conocer.
          </p>
        </div>

        <div className="chooser-grid">
          {platforms.map((p) => {
            const Icon = p.icon;
            return (
              <a
                key={p.route}
                href={`#${p.route}`}
                className={`chooser-card chooser-${p.tone}`}
                onClick={(e) => {
                  e.preventDefault();
                  goTo(p.route);
                }}
              >
                <div className="chooser-card-body">
                  <span className="chooser-kicker">
                    <Icon size={15} />
                    {p.kicker}
                  </span>
                  <h3 className="chooser-title">{p.title}</h3>
                  <p className="chooser-desc">{p.desc}</p>
                  <ul className="chooser-points">
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <span className="chooser-cta">
                    {p.cta}
                    <ArrowRight size={17} />
                  </span>
                </div>

                <div className="chooser-photo-col">
                  <img src={p.photo} alt={`${p.person}, ${p.role}`} className="chooser-photo" />
                  <div className="chooser-person-tag">
                    <strong>{p.person}</strong>
                    <span>{p.role}</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
