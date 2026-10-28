import React from 'react';
import { voicesOfSupport } from '../data/partyData';
import { Star, Quote } from 'lucide-react';

export default function VoicesOfSupport() {
  return (
    <section className="sec-padding voices-section" id="testimonios">
      <div className="container">
        <div className="sec-header">
          <span className="badge-sub">Testimonios de la Comunidad</span>
          <h2 className="sec-title">Voces de Apoyo (Voices of Support)</h2>
          <p className="sec-desc">
            Ciudadanos comunes, trabajadores, docentes y emprendedores que confían en nuestro proyecto para transformar el país.
          </p>
        </div>

        <div className="voices-grid">
          {voicesOfSupport.map((v) => (
            <div key={v.id} className="voice-card">
              <div className="voice-stars">
                {[...Array(v.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              <p className="voice-quote">{v.quote}</p>

              <div className="voice-author-info">
                <div className="voice-avatar">
                  {v.author.charAt(0)}
                </div>
                <div>
                  <h4 className="voice-name">{v.author}</h4>
                  <div className="voice-role">{v.role}</div>
                  <div className="voice-city">{v.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
