import React, { useState } from 'react';
import { partyInfo } from '../data/partyData';
import { Send, MapPin, Mail, Phone, ExternalLink, Heart } from 'lucide-react';

export default function Footer({ onOpenAffiliation, onOpenManifesto, onShowToast }) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    onShowToast(`¡Suscrito con éxito! Recibirás el boletín ciudadano semanal del PDC en ${email}.`, 'success');
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <div className="brand-emblem" style={{ width: '38px', height: '38px', fontSize: '1rem' }}>
                PDC
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                {partyInfo.name}
              </span>
            </div>
            <p>{partyInfo.subSlogan}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', color: '#94a3b8' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={15} color="#38bdf8" /> {partyInfo.headquarters}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={15} color="#38bdf8" /> {partyInfo.contactEmail}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={15} color="#38bdf8" /> {partyInfo.contactPhone}
              </span>
            </div>
          </div>

          {/* Col 1 */}
          <div>
            <h4 className="footer-heading">Plataforma</h4>
            <ul className="footer-links">
              <li><a href="#valores">Ejes y Valores</a></li>
              <li><a href="#propuestas">Banco de Propuestas</a></li>
              <li><a href="#liderazgo">Liderazgo & Candidata</a></li>
              <li><a href="#participacion">Comités Barriales</a></li>
              <li><button onClick={onOpenManifesto} style={{ color: '#94a3b8', fontSize: '0.92rem' }}>Manifiesto 2026</button></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="footer-heading">Transparencia</h4>
            <ul className="footer-links">
              <li><a href="#transparencia">Cuentas Claras</a></li>
              <li><a href="#transparencia">Auditorías Forenses</a></li>
              <li><a href="#transparencia">Estatuto Ético</a></li>
              <li><a href="#faq">Preguntas Frecuentes</a></li>
              <li><button onClick={onOpenAffiliation} style={{ color: '#38bdf8', fontSize: '0.92rem', fontWeight: 600 }}>Afiliarse al PDC</button></li>
            </ul>
          </div>

          {/* Col 3: Newsletter */}
          <div>
            <h4 className="footer-heading">Boletín Ciudadano</h4>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: '0 0 1rem' }}>
              Recibe las últimas noticias de campaña, convocatorias a cabildos y análisis legislativo.
            </p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Ingresa tu correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn btn-primary btn-sm" aria-label="Suscribirse">
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} {partyInfo.name} ({partyInfo.acronym}). Personería Jurídica Vigente.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', color: '#64748b' }}>
            <span>Política de Privacidad</span>
            <span>Términos de Afiliación</span>
            <span>Portal Abierto</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
