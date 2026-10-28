import React, { useState } from 'react';
import { newsAndEvents } from '../data/partyData';
import { Calendar, Clock, MapPin, ChevronRight, CheckCircle, Bell } from 'lucide-react';

export default function NewsEvents({ onShowToast }) {
  const [rsvpList, setRsvpList] = useState({});

  const handleRsvp = (id, title) => {
    setRsvpList((prev) => {
      const isRegistered = !prev[id];
      if (isRegistered) {
        onShowToast(`¡Registro confirmado para: "${title}"! Te hemos reservado un cupo con enlace de streaming.`, 'success');
      } else {
        onShowToast(`Cancelaste tu registro para "${title}".`, 'info');
      }
      return { ...prev, [id]: isRegistered };
    });
  };

  return (
    <section className="section-padding" id="noticias">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">Actualidad PDC</span>
          <h2 className="section-title">Noticias, Comunicados y Agenda Ciudadana</h2>
          <p className="section-desc">
            Sigue de cerca cada paso de nuestra campaña, declaraciones oficiales y los próximos encuentros abiertos al público.
          </p>
        </div>

        <div className="news-events-grid">
          {newsAndEvents.map((item) => {
            const isRsvped = rsvpList[item.id];
            return (
              <article key={item.id} className="glass-card news-card">
                <div className="news-img-wrap">
                  <img src={item.image} alt={item.title} className="news-img" />
                  <span className="news-badge">{item.type}</span>
                </div>

                <div className="news-body">
                  <div className="news-meta">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Calendar size={14} /> {item.date}
                    </span>
                    {item.time && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Clock size={14} /> {item.time}
                      </span>
                    )}
                    {item.readTime && <span>• {item.readTime}</span>}
                  </div>

                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-summary">{item.summary}</p>

                  {item.location && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.2rem' }}>
                      <MapPin size={16} color="var(--primary-500)" />
                      <span>{item.location}</span>
                    </div>
                  )}

                  <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                    {item.type === 'Evento' ? (
                      <button
                        onClick={() => handleRsvp(item.id, item.title)}
                        className={`btn btn-sm ${isRsvped ? 'btn-secondary' : 'btn-primary'}`}
                        style={{ width: '100%' }}
                      >
                        {isRsvped ? (
                          <>
                            <CheckCircle size={15} color="#10b981" />
                            <span>¡Asistencia Confirmada!</span>
                          </>
                        ) : (
                          <>
                            <Bell size={15} />
                            <span>{item.action || 'Confirmar Asistencia'}</span>
                          </>
                        )}
                      </button>
                    ) : (
                      <button
                        onClick={() => onShowToast(`Abriendo comunicado oficial: "${item.title}"`, 'info')}
                        className="btn btn-secondary btn-sm"
                        style={{ width: '100%', justifyContent: 'space-between' }}
                      >
                        <span>Leer Comunicado Completo</span>
                        <ChevronRight size={16} />
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
