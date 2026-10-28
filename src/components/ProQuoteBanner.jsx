import React from 'react';
import { campaignData } from '../data/campaignData';

export default function ProQuoteBanner() {
  return (
    <section className="pro-quote-section">
      <div className="pro-container">
        <p className="pro-quote-text">
          “{campaignData.coreMessage}”
        </p>
        <span className="pro-quote-author">
          {campaignData.party} • {campaignData.coalition}
        </span>
      </div>
    </section>
  );
}
