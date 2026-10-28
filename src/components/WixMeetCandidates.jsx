import React from 'react';
import { deputyCandidate, campaignData } from '../data/campaignData';
import { GraduationCap, Phone, CheckCircle2, MapPin } from 'lucide-react';

export default function WixMeetCandidates() {
  return (
    <section className="wix-section wix-meet-section" id="candidatos">
      <div className="wix-container">
        <div className="wix-meet-grid">
          {/* Visual Column */}
          <div className="wix-candidate-visual">
            <div className="wix-photo-box">
              <img
                src={deputyCandidate.photo}
                alt={deputyCandidate.name}
                className="wix-candidate-img"
              />
            </div>

            {/* Formula Strip: Propietario y Suplente */}
            <div className="wix-formula-strip">
              <div className="wix-formula-card">
                <img
                  src={deputyCandidate.photo}
                  alt={deputyCandidate.name}
                  className="wix-formula-avatar"
                />
                <div className="wix-formula-info">
                  <h5>{deputyCandidate.name}</h5>
                  <span>Diputado Propietario (Casilla 1)</span>
                </div>
              </div>

              <div className="wix-formula-card">
                <img
                  src={deputyCandidate.deputySubstitute.photo}
                  alt={deputyCandidate.deputySubstitute.name}
                  className="wix-formula-avatar"
                />
                <div className="wix-formula-info">
                  <h5>{deputyCandidate.deputySubstitute.name}</h5>
                  <span>{deputyCandidate.deputySubstitute.role}</span>
                </div>
              </div>
            </div>

            {/* Official Party Logos */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', justifyContent: 'center', padding: '1rem 0' }}>
              <img src={campaignData.logos.pdc} alt="PDC" style={{ height: '38px', borderRadius: '3px' }} />
              <img src={campaignData.logos.fs} alt="Fuerza Solidaria" style={{ height: '38px', borderRadius: '3px' }} />
            </div>
          </div>

          {/* Text / Message Column (Brochure Verbatim) */}
          <div className="wix-candidate-text">
            <span className="wix-eyebrow">
              {deputyCandidate.role} • {deputyCandidate.department} • {deputyCandidate.ballot}
            </span>

            <h3>{deputyCandidate.name}</h3>
            <span className="wix-candidate-origin">
              <MapPin size={15} style={{ display: 'inline', marginRight: '4px' }} />
              {deputyCandidate.origin}
            </span>

            {/* Academic Credentials */}
            <ul className="wix-candidate-credentials">
              {deputyCandidate.academicProfile.map((item, idx) => (
                <li key={idx}>
                  <GraduationCap size={18} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.92rem' }}>{item.title}</strong>
                    <span style={{ fontSize: '0.82rem', color: '#64748b' }}>{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Message from the brochure */}
            <p className="wix-candidate-message">
              “{deputyCandidate.message}”
            </p>

            {/* Commitment paragraph */}
            <div className="wix-candidate-commitment">
              <strong style={{ display: 'block', color: 'var(--color-text-main)', marginBottom: '0.4rem', textTransform: 'uppercase', fontSize: '0.84rem', letterSpacing: '0.08em' }}>
                Compromiso de Trabajo Territorial:
              </strong>
              <p style={{ margin: 0 }}>{deputyCandidate.commitment}</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
              <a href={`tel:${campaignData.contactPhone}`} className="btn-wix-primary">
                <Phone size={15} />
                <span>Coordinar: {campaignData.contactPhone}</span>
              </a>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                Trabajando de la mano con las comunidades
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
