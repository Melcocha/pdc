import React from 'react';
import { campaignData } from '../data/campaignData';

export default function WixQuoteBanner() {
  return (
    <section className="wix-quote-section">
      <div className="wix-container">
        <p className="wix-quote-text">
          “{campaignData.coreMessage}”
        </p>
        <span className="wix-quote-author">
          {campaignData.party} • {campaignData.coalition}
        </span>
      </div>
    </section>
  );
}
