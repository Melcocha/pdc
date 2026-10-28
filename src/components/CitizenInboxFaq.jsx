import React, { useState } from 'react';
import { complaintFaqs } from '../data/partyData';
import { Send, ChevronDown, MessageSquareCheck, HelpCircle } from 'lucide-react';

export default function CitizenInboxFaq({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Propuesta de Ley Comunitaria',
    subject: '',
    message: ''
  });

  const [openFaq, setOpenFaq] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Por favor completa los campos obligatorios del formulario.', 'error');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      const folio = `BZ-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      onShowToast(`¡Mensaje radicado con éxito (Folio: ${folio})! La Mesa Ciudadana del PDC te responderá en 48h.`, 'success');
      setFormData({
        name: '',
        email: '',
        category: 'Propuesta de Ley Comunitaria',
        subject: '',
        message: ''
      });
      setSubmitting(false);
    }, 700);
  };

  return (
    <section className="sec-padding" id="buzon" style={{ background: 'var(--bg-page)' }}>
      <div className="container">
        <div className="sec-header">
          <span className="badge-sub gold">Atención Directa & Participación</span>
          <h2 className="sec-title">Buzón Ciudadano y Preguntas Frecuentes (Suggestion & Complaints)</h2>
          <p className="sec-desc">
            En el PDC tu voz sí cuenta. Radica iniciativas para tu barrio o resuelve tus dudas con nuestro equipo de atención cívica.
          </p>
        </div>

        <div className="complaints-faq-grid">
          {/* Left Column: Complaint & Suggestion Form (OpenCity style) */}
          <div className="complaint-form-box">
            <h3 style={{ fontSize: '1.45rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <MessageSquareCheck size={22} color="var(--primary-accent)" />
              Radicar Propuesta o Consulta
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.6rem' }}>
              Diligencia este formulario y recibe respuesta formal de nuestra coordinación política territorial.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group-custom">
                <label className="form-label-custom">Nombre Completo *</label>
                <input
                  type="text"
                  placeholder="Ej. Ana Milena Castro"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input-custom"
                  required
                />
              </div>

              <div className="form-group-custom">
                <label className="form-label-custom">Correo Electrónico *</label>
                <input
                  type="email"
                  placeholder="tucorreo@ejemplo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input-custom"
                  required
                />
              </div>

              <div className="form-group-custom">
                <label className="form-label-custom">Tipo de Solicitud</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="form-select-custom"
                >
                  <option value="Propuesta de Ley Comunitaria">Propuesta de Ley Comunitaria</option>
                  <option value="Alerta o Denuncia Ciudadana">Alerta o Denuncia Ciudadana</option>
                  <option value="Petición para Cabildo Barrial">Petición para Cabildo Barrial</option>
                  <option value="Asesoría Legal Gratuita">Asesoría Legal Gratuita</option>
                </select>
              </div>

              <div className="form-group-custom">
                <label className="form-label-custom">Asunto</label>
                <input
                  type="text"
                  placeholder="Ej. Proyecto de parque infantil en Barrio El Prado"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="form-input-custom"
                />
              </div>

              <div className="form-group-custom">
                <label className="form-label-custom">Mensaje o Detalle de la Solicitud *</label>
                <textarea
                  rows="4"
                  placeholder="Describe aquí tu propuesta, solicitud o queja con el mayor detalle posible..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-textarea-custom"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.9rem' }}
              >
                {submitting ? (
                  <span>Radicando información...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Enviar Solicitud al Comité</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: FAQ Accordion (OpenCity style) */}
          <div>
            <h3 style={{ fontSize: '1.45rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <HelpCircle size={22} color="#f59e0b" />
              Preguntas Frecuentes (FAQ)
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.6rem' }}>
              Información clara sobre la estructura, financiamiento y participación activa en el PDC.
            </p>

            <div className="faq-accordion-box">
              {complaintFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="faq-card-item">
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="faq-header-btn"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={20}
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.25s ease',
                          color: 'var(--text-muted)',
                          flexShrink: 0
                        }}
                      />
                    </button>
                    {isOpen && (
                      <div className="faq-body-content">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
