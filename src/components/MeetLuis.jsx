import React from 'react';
import { Hotel, Handshake, Briefcase, Anchor, Users, GraduationCap, Award } from 'lucide-react';
import { luisProfile } from '../data/mediaData';

const timelineIcons = {
  hotel: Hotel,
  handshake: Handshake,
  briefcase: Briefcase,
  anchor: Anchor,
  users: Users,
};

// "Conoce a Luis Ortiz": perfil y trayectoria (provisional, tomado de su hoja de vida).
export default function MeetLuis() {
  const p = luisProfile;

  return (
    <section className="meet-section" id="conoce-luis">
      <div className="meet-container">
        <div className="meet-top">
          <div className="meet-photo-col">
            <div className="meet-photo-frame">
              <img src={p.photo} alt={p.shortName} />
            </div>
            <div className="meet-photo-badge">
              <strong>{p.shortName}</strong>
              <span>
                {p.role} · {p.municipality}
              </span>
            </div>
          </div>

          <div className="meet-intro">
            <span className="social-eyebrow">
              <span className="pro-pulse-dot" /> Conoce al candidato
            </span>
            <h2 className="meet-title">
              Conoce a <br />
              <em>{p.name}</em>
            </h2>
            <p className="meet-summary">{p.summary}</p>

            <div className="meet-highlights">
              {p.highlights.map((h) => (
                <div className="meet-highlight" key={h.label}>
                  <span className="meet-highlight-value">{h.value}</span>
                  <strong>{h.label}</strong>
                  <small>{h.note}</small>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="meet-bottom">
          <div className="meet-col">
            <h3 className="meet-col-title">
              <Briefcase size={18} /> Trayectoria y liderazgo
            </h3>
            <ol className="meet-timeline">
              {p.timeline.map((t) => {
                const Icon = timelineIcons[t.icon] || Briefcase;
                return (
                  <li className="meet-timeline-item" key={t.org}>
                    <span className="meet-timeline-dot">
                      <Icon size={16} />
                    </span>
                    <div>
                      <strong>{t.role}</strong>
                      <span className="meet-timeline-org">{t.org}</span>
                      <p>{t.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="meet-col">
            <h3 className="meet-col-title">
              <GraduationCap size={18} /> Formación académica
            </h3>
            <div className="meet-edu">
              {p.education.map((e) => (
                <div className="meet-edu-item" key={e.title}>
                  <span className="meet-edu-year">{e.year}</span>
                  <div>
                    <strong>{e.title}</strong>
                    <small>{e.place}</small>
                    {e.desc && <small className="meet-edu-note">{e.desc}</small>}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="meet-col-title meet-col-title-2">
              <Award size={18} /> Diplomados y capacitaciones
            </h3>
            <div className="meet-tags">
              {p.diplomas.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
