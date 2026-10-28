import React, { useState } from 'react';
import { partyInfo } from '../data/partyData';
import { Send, MapPin, Mail, Phone, Clock } from 'lucide-react';
import { TwitterIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from './SocialIcons';

export default function MainFooter({ onOpenAffiliation, onOpenManifesto, onOpenDonation, onShowToast }) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    onShowToast(`¡Te has suscrito con éxito! Recibirás los boletines de campaña en ${email}.`, 'success');
    setEmail('');
  };

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Column 1: Brand & Headquarters */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.2rem' }}>
              <div className="logo-crest" style={{ width: '42px', height: '42px', fontSize: '1rem' }}>
                PDC
              </div>
              <div>
                <h4 style={{ color: '#ffffff', fontSize: '1.2rem', margin: 0, fontFamily: 'var(--font-heading)' }}>
                  {partyInfo.name}
                </h4>
                <span style={{ color: '#fbbf24', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
                  Movimiento Cívico Nacional
                </span>
              </div>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '320px' }}>
              {partyInfo.subSlogan}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.86rem', color: '#94a3b8' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={15} color="#38bdf8" />
                <span>{partyInfo.headquarters}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={15} color="#38bdf8" />
                <span>{partyInfo.phone}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={15} color="#38bdf8" />
                <span>{partyInfo.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={15} color="#38bdf8" />
                <span>{partyInfo.officeHours}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="footer-col-title">Plataforma</h4>
            <ul className="footer-nav-list">
              <li><a href="#inicio" onClick={(e) => { e.preventDefault(); handleScrollTo('inicio'); }}>Inicio</a></li>
              <li><a href="#candidata" onClick={(e) => { e.preventDefault(); handleScrollTo('candidata'); }}>Conoce a Elena</a></li>
              <li><a href="#blueprint" onClick={(e) => { e.preventDefault(); handleScrollTo('blueprint'); }}>El Plan (Blueprint)</a></li>
              <li><a href="#testimonios" onClick={(e) => { e.preventDefault(); handleScrollTo('testimonios'); }}>Voces de Apoyo</a></li>
              <li><a href="#eventos" onClick={(e) => { e.preventDefault(); handleScrollTo('eventos'); }}>Agenda & Cabildos</a></li>
              <li>
                <button onClick={onOpenManifesto} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                  Manifiesto 2026
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services & Participation */}
          <div>
            <h4 className="footer-col-title">Participación</h4>
            <ul className="footer-nav-list">
              <li>
                <button onClick={onOpenAffiliation} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#38bdf8', fontWeight: 700 }}>
                  Afiliarse al PDC
                </button>
              </li>
              <li>
                <button onClick={onOpenDonation} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#f87171', fontWeight: 700 }}>
                  Hacer una Donación
                </button>
              </li>
              <li><a href="#servicios" onClick={(e) => { e.preventDefault(); handleScrollTo('servicios'); }}>Servicios al Ciudadano</a></li>
              <li><a href="#buzon" onClick={(e) => { e.preventDefault(); handleScrollTo('buzon'); }}>Buzón de Propuestas</a></li>
              <li><a href="#buzon" onClick={(e) => { e.preventDefault(); handleScrollTo('buzon'); }}>Preguntas Frecuentes</a></li>
              <li><a href="#servicios" onClick={(e) => { e.preventDefault(); handleScrollTo('servicios'); }}>Portal Cuentas Claras</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="footer-col-title">Boletín Oficial</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.5' }}>
              Suscríbete para recibir los comunicados de campaña, fechas de primarias y análisis legislativo.
            </p>

            <form onSubmit={handleSubscribe} className="newsletter-box">
              <input
                type="email"
                placeholder="Ingresa tu correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input-field"
              />
              <button type="submit" className="btn btn-primary btn-sm" aria-label="Suscribirse">
                <Send size={15} />
              </button>
            </form>

            <div style={{ display: 'flex', gap: '0.8rem', marginTop: '1.5rem' }}>
              <a href={partyInfo.socials.twitter} target="_blank" rel="noreferrer" className="top-social-link" aria-label="X">
                <TwitterIcon size={18} />
              </a>
              <a href={partyInfo.socials.facebook} target="_blank" rel="noreferrer" className="top-social-link" aria-label="Facebook">
                <FacebookIcon size={18} />
              </a>
              <a href={partyInfo.socials.instagram} target="_blank" rel="noreferrer" className="top-social-link" aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
              <a href={partyInfo.socials.youtube} target="_blank" rel="noreferrer" className="top-social-link" aria-label="YouTube">
                <YoutubeIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-row">
          <div>
            © {new Date().getFullYear()} {partyInfo.name} ({partyInfo.acronym}). Personería Jurídica y Registro Electoral Nacional Vigente.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', color: '#64748b' }}>
            <span>Estatutos Oficiales</span>
            <span>Política de Privacidad</span>
            <span>Veeduría y Transparencia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
