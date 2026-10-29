import React, { useRef, useState } from 'react';
import { deputyProposals } from '../data/campaignData';
import { ArrowLeft, ArrowRight, X, CheckCircle2 } from 'lucide-react';

export default function ProBlueprintProposals() {
  const scrollRef = useRef(null);
  const [activeProposal, setActiveProposal] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -600 : 600;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="blueprint-editorial-section" id="propuestas">
      <div className="blueprint-editorial-container">
        
        {/* Top Header Deck (A Blueprint for Progress) */}
        <div className="blueprint-editorial-header">
          <div className="blueprint-editorial-title-wrap">
            <h2 className="blueprint-editorial-title">
              Propuestas <br />
              para el <em>Progreso</em>
            </h2>
            <p className="blueprint-editorial-sub">
              12 Iniciativas de Ley orientadas a aliviar la economía familiar y transformar La Unión.
            </p>
          </div>

          <div className="blueprint-editorial-controls">
            <button
              onClick={() => scroll('left')}
              className="blueprint-nav-arrow-btn"
              aria-label="Ver propuestas anteriores"
            >
              <ArrowLeft size={22} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="blueprint-nav-arrow-btn"
              aria-label="Ver siguientes propuestas"
            >
              <ArrowRight size={22} />
            </button>
          </div>
        </div>

        {/* Horizontal Alternating Ribbon (Text Card, Photo Card, Text Card, Photo Card...) */}
        <div className="blueprint-cards-track" ref={scrollRef}>
          {deputyProposals.map((prop) => (
            <React.Fragment key={prop.id}>
              {/* Text Card */}
              <div 
                className="blueprint-text-card"
                onClick={() => setActiveProposal(prop)}
                role="button"
                tabIndex={0}
                aria-label={`Ver detalles de ${prop.title}`}
              >
                <div className="blueprint-text-card-top">
                  <h3 className="blueprint-card-title">{prop.title}</h3>
                </div>

                <div className="blueprint-arrow-wrap">
                  <svg 
                    className="blueprint-custom-arrow" 
                    viewBox="0 0 54 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M0 10H50M50 10L38 2M50 10L38 18" 
                      stroke="#007a3d" 
                      strokeWidth="2.2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="blueprint-text-card-bottom">
                  <p className="blueprint-card-desc">{prop.shortDesc}</p>
                </div>
              </div>

              {/* Image Card */}
              <div 
                className="blueprint-img-card"
                onClick={() => setActiveProposal(prop)}
                role="button"
                tabIndex={0}
                aria-label={`Fotografía de ${prop.title}`}
              >
                <img 
                  src={prop.image} 
                  alt={prop.title} 
                  className="blueprint-editorial-img" 
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Detail Modal with High-Fidelity Information */}
      {activeProposal && (
        <div className="blueprint-modal-backdrop" onClick={() => setActiveProposal(null)}>
          <div className="blueprint-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button 
              className="blueprint-modal-close" 
              onClick={() => setActiveProposal(null)}
              aria-label="Cerrar ventana de detalles"
            >
              <X size={22} />
            </button>

            <div className="blueprint-modal-content">
              <div className="blueprint-modal-img-col">
                <img 
                  src={activeProposal.image} 
                  alt={activeProposal.title} 
                  className="blueprint-modal-img" 
                />
              </div>

              <div className="blueprint-modal-body">
                <span className="blueprint-modal-category">{activeProposal.category}</span>
                <h3 className="blueprint-modal-title">{activeProposal.title}</h3>
                <h4 className="blueprint-modal-official">{activeProposal.officialTitle}</h4>
                <p className="blueprint-modal-desc">{activeProposal.desc}</p>

                {activeProposal.impact && (
                  <div className="blueprint-modal-impact">
                    <CheckCircle2 size={22} className="blueprint-impact-icon" />
                    <div>
                      <strong>Beneficio Directo para La Unión:</strong>
                      <p>{activeProposal.impact}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
