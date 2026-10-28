import React from 'react';
import { campaignArticles } from '../data/partyData';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

export default function CampaignBlog({ onShowToast }) {
  const handleRead = (title) => {
    onShowToast(`Abriendo artículo de campaña: "${title}"`, 'info');
  };

  return (
    <section className="sec-padding blog-section" id="noticias">
      <div className="container">
        <div className="sec-header">
          <span className="badge-sub">Actualidad de Campaña</span>
          <h2 className="sec-title">Desde la Ruta Electoral (From the Campaign Trail)</h2>
          <p className="sec-desc">
            Crónicas, propuestas legislativas y reflexiones de nuestro equipo para mantener informada a la ciudadanía.
          </p>
        </div>

        <div className="blog-grid">
          {campaignArticles.map((art) => (
            <article key={art.id} className="blog-card">
              <div className="blog-img-box">
                <img src={art.image} alt={art.title} className="blog-img" />
                <span className="blog-category-tag">{art.category}</span>
              </div>

              <div className="blog-body">
                <div className="blog-meta">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Calendar size={14} /> {art.date}
                  </span>
                  <span>•</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Clock size={14} /> {art.readTime}
                  </span>
                </div>

                <h3 className="blog-title">{art.title}</h3>
                <p className="blog-summary">{art.summary}</p>

                <div style={{ marginTop: 'auto', paddingTop: '1.2rem', borderTop: '1px solid var(--border-light)' }}>
                  <button
                    onClick={() => handleRead(art.title)}
                    className="feature-link-btn"
                    style={{ width: '100%', justifyContent: 'space-between' }}
                  >
                    <span>Leer Artículo Completo (Read More)</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
