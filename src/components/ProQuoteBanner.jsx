import React from 'react';
import { campaignData } from '../data/campaignData';

export default function ProQuoteBanner() {
  return (
    <section className="pro-quote-section">
      <div className="pro-quote-fullwidth">
        <span className="pro-quote-badge">Compromiso Ciudadano</span>
        <h3 className="pro-quote-headline">
          “{campaignData.slogan}”
        </h3>
        <p className="pro-quote-subline">
          Educación, valores y oportunidades reales para el progreso de cada familia en La Unión.
        </p>
        <div className="pro-quote-author-pill">
          <span>{campaignData.party}</span>
        </div>
      </div>
    </section>
  );
}
