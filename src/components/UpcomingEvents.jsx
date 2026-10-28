import React, { useState } from 'react';
import { upcomingEvents } from '../data/partyData';
import { Clock, MapPin, CheckCircle, Bell } from 'lucide-react';

export default function UpcomingEvents({ onShowToast }) {
  const [rsvpState, setRsvpState] = useState({});

  const handleToggleRsvp = (id, title) => {
    setRsvpState((prev) => {
      const isRegistered = !prev[id];
      if (isRegistered) {
        onShowToast(`¡Asistencia reservada para "${title}"! Te enviamos los detalles de acceso a tu correo.`, 'success');
      } else {
        onShowToast(`Has cancelado tu reserva para "${title}".`, 'info');
      }
      return { ...prev, [id]: isRegistered };
    });
  };

  return (
    <section className="sec-padding events-section" id="eventos">
      <div className="container">
        <div className="sec-header">
          <span className="badge-sub gold">Agenda Abierta 2026</span>
          <h2 className="sec-title">Próximos Eventos y Cabildos (Upcoming Events)</h2>
          <p className="sec-desc">
            Espacios presenciales y virtuales donde dialogamos de cara a la ciudadanía. Conoce las fechas, participa y haz oír tu voz.
          </p>
        </div>

        <div className="events-list">
          {upcomingEvents.map((ev) => {
            const isConfirmed = rsvpState[ev.id];
            return (
              <div key={ev.id} className="event-item-card">
                {/* Date Box OpenCity style */}
                <div className="event-date-box">
                  <span className="event-date-day">{ev.day}</span>
                  <span className="event-date-month">{ev.month}</span>
                </div>

                {/* Details */}
                <div>
                  <h3 className="event-title">{ev.title}</h3>

                  <div className="event-meta-row">
                    <span className="event-meta-item">
                      <Clock size={15} color="var(--primary-accent)" />
                      <span>{ev.time}</span>
                    </span>
                    <span className="event-meta-item">
                      <MapPin size={15} color="var(--primary-accent)" />
                      <span>{ev.location}</span>
                    </span>
                  </div>

                  <p className="event-desc">{ev.desc}</p>
                </div>

                {/* RSVP Action */}
                <div>
                  <button
                    onClick={() => handleToggleRsvp(ev.id, ev.title)}
                    className={`btn ${isConfirmed ? 'btn-secondary' : 'btn-primary'} btn-sm`}
                    style={{ width: '100%' }}
                  >
                    {isConfirmed ? (
                      <>
                        <CheckCircle size={16} color="#10b981" />
                        <span>Confirmado</span>
                      </>
                    ) : (
                      <>
                        <Bell size={16} />
                        <span>Asistir (RSVP)</span>
                      </>
                    )}
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
