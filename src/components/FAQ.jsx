import React, { useState } from 'react';
import { faqs } from '../data/partyData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export default function FAQ({ onOpenAffiliation }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="section-padding" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">Respuestas Claras</span>
          <h2 className="section-title">Preguntas Frecuentes de la Ciudadanía</h2>
          <p className="section-desc">
            Todo lo que necesitas saber sobre el funcionamiento, ideología y cómo ser parte activa del PDC.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="faq-item">
                <button
                  onClick={() => toggle(idx)}
                  className="faq-question"
                  aria-expanded={isOpen}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <HelpCircle size={18} color="var(--primary-500)" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0,
                      color: 'var(--text-muted)',
                    }}
                  />
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
            ¿Tienes otra duda o deseas contactar directamente a tu comité municipal?
          </p>
          <button onClick={onOpenAffiliation} className="btn btn-primary btn-sm">
            <MessageCircle size={16} />
            <span>Hablar con un Coordinador Ciudadano</span>
          </button>
        </div>
      </div>
    </section>
  );
}
