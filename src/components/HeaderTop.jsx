import React from 'react';
import { partyInfo } from '../data/partyData';
import { Mail, Phone, Clock } from 'lucide-react';
import { TwitterIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from './SocialIcons';

export default function HeaderTop() {
  return (
    <div className="header-top">
      <div className="container header-top-inner">
        {/* Breaking News Ticker (OpenCity style) */}
        <div className="breaking-news-box">
          <span className="breaking-badge">
            <span className="breaking-pulse"></span>
            ÚLTIMA HORA
          </span>
          <span className="breaking-text">{partyInfo.breakingNews}</span>
        </div>

        {/* Contact Info & Socials */}
        <div className="header-top-meta">
          <div className="meta-item">
            <Mail size={14} color="#38bdf8" />
            <a href={`mailto:${partyInfo.email}`}>{partyInfo.email}</a>
          </div>

          <div className="meta-item">
            <Phone size={14} color="#38bdf8" />
            <span>{partyInfo.phone}</span>
          </div>

          <div className="meta-item">
            <Clock size={14} color="#38bdf8" />
            <span>{partyInfo.officeHours}</span>
          </div>

          <div className="top-socials">
            <a href={partyInfo.socials.twitter} target="_blank" rel="noreferrer" className="top-social-link" aria-label="X (Twitter)">
              <TwitterIcon size={14} />
            </a>
            <a href={partyInfo.socials.facebook} target="_blank" rel="noreferrer" className="top-social-link" aria-label="Facebook">
              <FacebookIcon size={14} />
            </a>
            <a href={partyInfo.socials.instagram} target="_blank" rel="noreferrer" className="top-social-link" aria-label="Instagram">
              <InstagramIcon size={14} />
            </a>
            <a href={partyInfo.socials.youtube} target="_blank" rel="noreferrer" className="top-social-link" aria-label="YouTube">
              <YoutubeIcon size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
