import React, { useState } from 'react';
import { campaignData } from '../data/campaignData';
import { Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function WixContact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    district: 'Conchagua',
    message: ''
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      onShowToast('Por favor completa tu nombre y número de teléfono.', 'error');
      return;
    }

    setSending(true);
    setTimeout(() => {
      onShowToast(`¡Gracias ${formData.name}! Tu mensaje fue enviado al equipo de coordinación del Lic. Willian Méndez y Luis Ortiz.`, 'success');
      setFormData({
        name: '',
        phone: '',
        district: 'Conchagua',
        message: ''
      });
      setSending(false);
    }, 600);
  };

  return (
    <section className="wix-section" id="contacto">
      <div className="wix-container">
        <div className="wix-contact-grid">
          {/* Left Column: Authentic Info & Quote */}
          <div className="wix-contact-info">
            <span className="wix-eyebrow">Coordinación Territorial</span>
            <h3>Contacto Directo con la Candidatura</h3>

            <p style={{ fontSize: '1.08rem', lineHeight: '1.7', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
              “{campaignData.communityCall}”
            </p>

            <div className="wix-contact-card">
              <div className="wix-contact-row">
                <Phone size={20} />
                <div>
                  <span style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', letterSpacing: '0.08em', fontWeight: 700 }}>
                    Línea de Coordinación Telefónica
                  </span>
                  <a href={`tel:${campaignData.contactPhone}`} style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-primary)', fontFamily: 'var(--font-serif)' }}>
                    {campaignData.contactPhone}
                  </a>
                </div>
              </div>

              <div className="wix-contact-row" style={{ marginBottom: 0 }}>
                <MapPin size={20} />
                <div>
                  <span style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', letterSpacing: '0.08em', fontWeight: 700 }}>
                    Ámbito Territorial
                  </span>
                  <span style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>
                    Departamento de La Unión (Conchagua, Santa Rosa de Lima, Yayantique, El Carmen, La Unión Sur y Norte)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Minimalist Form */}
          <form onSubmit={handleSubmit} className="wix-form">
            <div className="wix-input-group">
              <label className="wix-label">Nombre Completo *</label>
              <input
                type="text"
                placeholder="Ingresa tu nombre y apellido"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="wix-input"
              />
            </div>

            <div className="wix-input-group">
              <label className="wix-label">Teléfono o WhatsApp *</label>
              <input
                type="tel"
                placeholder="Ej. 7000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="wix-input"
              />
            </div>

            <div className="wix-input-group">
              <label className="wix-label">Distrito o Municipio de La Unión</label>
              <select
                value={formData.district}
                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                className="wix-select"
              >
                <option value="Conchagua">Conchagua</option>
                <option value="La Unión Cabecera">La Unión (Cabecera)</option>
                <option value="Santa Rosa de Lima">Santa Rosa de Lima</option>
                <option value="Yayantique">Yayantique</option>
                <option value="El Carmen">El Carmen</option>
                <option value="Otro Distrito de La Unión">Otro Distrito de La Unión</option>
              </select>
            </div>

            <div className="wix-input-group">
              <label className="wix-label">Mensaje o Consulta Comunitaria</label>
              <textarea
                rows="4"
                placeholder="Escribe tu mensaje o propuesta comunitaria aquí..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="wix-textarea"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="btn-wix-primary"
              style={{ width: '100%', marginTop: '0.5rem' }}
            >
              {sending ? (
                <span>Enviando mensaje...</span>
              ) : (
                <>
                  <Send size={15} />
                  <span>Enviar Mensaje a la Candidatura</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
