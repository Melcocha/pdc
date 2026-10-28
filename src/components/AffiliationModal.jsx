import React, { useState } from 'react';
import { partyInfo } from '../data/partyData';
import { X, CheckCircle, Award, Download, Share2, Sparkles, User, Mail, MapPin, Phone, ShieldCheck, ArrowRight } from 'lucide-react';

export default function AffiliationModal({ isOpen, onClose, onShowToast }) {
  const [formData, setFormData] = useState({
    fullName: '',
    idNumber: '',
    email: '',
    phone: '',
    city: '',
    interest: 'Voluntariado territorial'
  });

  const [credential, setCredential] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.city) {
      onShowToast('Por favor completa todos los campos requeridos.', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const folio = `PDC-2026-${Math.floor(10000 + Math.random() * 90000)}`;
      const newCred = {
        name: formData.fullName,
        folio: folio,
        city: formData.city,
        interest: formData.interest,
        date: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })
      };
      setCredential(newCred);
      setIsSubmitting(false);
      onShowToast(`¡Felicidades ${formData.fullName}! Tu afiliación fue procesada exitosamente.`, 'success');
    }, 800);
  };

  const handleDownload = () => {
    onShowToast(`Generando y descargando credencial oficial en alta resolución (${credential.folio}.png)...`, 'success');
  };

  const handleReset = () => {
    setCredential(null);
    setFormData({
      fullName: '',
      idNumber: '',
      email: '',
      phone: '',
      city: '',
      interest: 'Voluntariado territorial'
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar modal">
          <X size={20} />
        </button>

        <div style={{ padding: '2.5rem' }}>
          {!credential ? (
            <>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span className="badge-tag">Afiliación Ciudadana Gratuita</span>
                <h3 style={{ fontSize: '1.8rem', marginTop: '0.5rem', marginBottom: '0.4rem' }}>
                  Únete al Partido Demócrata y Ciudadano
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                  Sé parte de las decisiones que transformarán el país. Recibe tu Credencial Oficial y participa en primarias y consultas vinculantes.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                    Nombre Completo *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <User size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Ej. Carlos Mendoza López"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem 0.8rem 2.6rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-medium)',
                        background: 'var(--bg-surface-elevated)',
                        color: 'var(--text-main)',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                      Documento de Identidad / Cédula
                    </label>
                    <input
                      type="text"
                      name="idNumber"
                      placeholder="Ej. 102458992"
                      value={formData.idNumber}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-medium)',
                        background: 'var(--bg-surface-elevated)',
                        color: 'var(--text-main)',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                      Ciudad o Municipio *
                    </label>
                    <div style={{ position: 'relative' }}>
                      <MapPin size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                      <input
                        type="text"
                        name="city"
                        placeholder="Ej. Bogotá, Medellín, Cali..."
                        value={formData.city}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem 0.8rem 2.6rem',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid var(--border-medium)',
                          background: 'var(--bg-surface-elevated)',
                          color: 'var(--text-main)',
                          fontSize: '0.95rem'
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                      Correo Electrónico *
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Mail size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                      <input
                        type="email"
                        name="email"
                        placeholder="tucorreo@ejemplo.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem 0.8rem 2.6rem',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid var(--border-medium)',
                          background: 'var(--bg-surface-elevated)',
                          color: 'var(--text-main)',
                          fontSize: '0.95rem'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                      Teléfono Móvil
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Phone size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+57 300 000 0000"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem 0.8rem 2.6rem',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid var(--border-medium)',
                          background: 'var(--bg-surface-elevated)',
                          color: 'var(--text-main)',
                          fontSize: '0.95rem'
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                    Área o Comité de Interés
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-medium)',
                      background: 'var(--bg-surface-elevated)',
                      color: 'var(--text-main)',
                      fontSize: '0.95rem'
                    }}
                  >
                    <option value="Voluntariado territorial">Voluntariado territorial y barrial</option>
                    <option value="Juventudes y Liderazgo">Juventudes y Liderazgo Universitario</option>
                    <option value="Redacción de Propuestas">Mesa Técnica de Propuestas de Ley</option>
                    <option value="Comunicaciones Digitales">Comunicaciones y Activismo Digital</option>
                    <option value="Veeduría Electoral">Testigo Electoral y Fiscalización</option>
                  </select>
                </div>

                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                  Al afiliarte aceptas libremente el Estatuto Ético del PDC. Tus datos están protegidos bajo estricto secreto de la Ley de Habeas Data.
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.9rem', marginTop: '0.5rem' }}
                >
                  {isSubmitting ? (
                    <span>Procesando registro...</span>
                  ) : (
                    <>
                      <span>Completar Afiliación y Generar Carnet</span>
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            /* Digital Credential Card Result */
            <div>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <span className="badge-tag" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
                  <ShieldCheck size={16} /> ¡Afiliación Exitosa!
                </span>
                <h3 style={{ fontSize: '1.6rem', margin: '0.5rem 0 0.2rem' }}>
                  Tu Credencial Oficial PDC
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  Guarda tu carnet digital para participar con voto en primarias y asambleas.
                </p>
              </div>

              {/* The Visual Credential Card */}
              <div className="credential-card">
                <div className="credential-watermark">PDC</div>
                <div className="credential-top">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#f59e0b', color: '#000', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      PDC
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.04em' }}>PARTIDO DEMÓCRATA Y CIUDADANO</div>
                      <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>REGISTRO NACIONAL DE AFILIADOS</div>
                    </div>
                  </div>
                  <div style={{ background: '#10b981', color: '#fff', fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '99px' }}>
                    ACTIVO
                  </div>
                </div>

                <div className="credential-body">
                  <div className="credential-avatar">
                    <User size={44} />
                  </div>
                  <div className="credential-info">
                    <h4>{credential.name}</h4>
                    <div style={{ fontSize: '0.85rem', color: '#38bdf8', fontWeight: 600 }}>Folio: {credential.folio}</div>
                    <div style={{ fontSize: '0.82rem', color: '#e2e8f0' }}>Ciudad: {credential.city}</div>
                    <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Comité: {credential.interest}</div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.3rem' }}>Emitido: {credential.date}</div>
                  </div>
                  <div className="credential-qr">
                    <div className="qr-mock"></div>
                    <span style={{ fontSize: '0.65rem', color: '#0f172a', fontWeight: 700, marginTop: '0.2rem' }}>VERIFICADO</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.8rem' }}>
                <button onClick={handleDownload} className="btn btn-primary" style={{ flexGrow: 1 }}>
                  <Download size={17} />
                  <span>Descargar Credencial</span>
                </button>
                <button
                  onClick={() => onShowToast('Enlace de afiliación copiado al portapapeles para compartir.', 'info')}
                  className="btn btn-secondary"
                >
                  <Share2 size={17} />
                  <span>Compartir</span>
                </button>
              </div>

              <div style={{ textAlign: 'center', marginTop: '1.2rem' }}>
                <button
                  onClick={handleReset}
                  style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'underline' }}
                >
                  Registrar a otro ciudadano
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
