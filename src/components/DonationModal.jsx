import React, { useState } from 'react';
import { X, Heart, ShieldCheck, Download, CheckCircle2 } from 'lucide-react';

export default function DonationModal({ isOpen, onClose, onShowToast }) {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    idNumber: '',
    email: '',
    city: ''
  });
  const [receipt, setReceipt] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const amounts = [10, 25, 50, 100, 250];

  const handleSelectAmount = (amt) => {
    setSelectedAmount(amt);
    setCustomAmount('');
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const finalAmount = customAmount ? parseFloat(customAmount) : selectedAmount;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !finalAmount || finalAmount <= 0) {
      onShowToast('Por favor completa todos los campos del donante y un monto válido.', 'error');
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      const folio = `REC-PDC-${Math.floor(100000 + Math.random() * 900000)}`;
      const rec = {
        name: formData.name,
        amount: finalAmount,
        folio: folio,
        date: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })
      };
      setReceipt(rec);
      setIsProcessing(false);
      onShowToast(`¡Aporte de $${finalAmount} procesado con éxito! Recibo Nº ${folio}.`, 'success');
    }, 700);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar modal">
          <X size={20} />
        </button>

        <div style={{ padding: '2.5rem' }}>
          {!receipt ? (
            <>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <span className="badge-sub gold">
                  <Heart size={14} fill="#dc2626" color="#dc2626" />
                  Micro-Mecenazgo Ciudadano
                </span>
                <h3 style={{ fontSize: '1.75rem', marginTop: '0.4rem', marginBottom: '0.3rem' }}>
                  Impulsa la Campaña Presidencial 2026
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  Nuestra independencia se debe a aportes de ciudadanos como tú. Cero financiamiento de contratistas turbios.
                </p>
              </div>

              {/* Amount Tiers */}
              <div style={{ marginBottom: '1.2rem' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                  Selecciona el Monto de tu Aporte (USD / COP equiv.)
                </label>
                <div className="donation-tiers">
                  {amounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => handleSelectAmount(amt)}
                      className={`tier-btn ${selectedAmount === amt ? 'selected' : ''}`}
                    >
                      ${amt}
                    </button>
                  ))}
                  <input
                    type="number"
                    placeholder="Otro monto"
                    value={customAmount}
                    onChange={handleCustomChange}
                    className="tier-btn"
                    style={{ textAlign: 'center', fontSize: '1rem', padding: '0.5rem' }}
                  />
                </div>
              </div>

              {/* Donor Form */}
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--text-main)' }}>
                    Nombre Completo del Donante *
                  </label>
                  <input
                    type="text"
                    placeholder="Nombre como aparece en tu documento"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="form-input-custom"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--text-main)' }}>
                      Cédula / Documento *
                    </label>
                    <input
                      type="text"
                      placeholder="Identificación fiscal"
                      value={formData.idNumber}
                      onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
                      required
                      className="form-input-custom"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--text-main)' }}>
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      placeholder="Para envío del certificado"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="form-input-custom"
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', background: 'var(--bg-surface-subtle)', padding: '0.8rem', borderRadius: 'var(--radius-sm)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  <ShieldCheck size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>
                    Cumplimiento con la Ley de Financiación de Campañas: Prohibidas donaciones anónimas. Todos los aportes se registran en el libro contable de Cuentas Claras.
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="btn btn-donate"
                  style={{ width: '100%', padding: '0.9rem', marginTop: '0.5rem' }}
                >
                  {isProcessing ? (
                    <span>Procesando donación segura...</span>
                  ) : (
                    <>
                      <Heart size={16} fill="#ffffff" />
                      <span>Confirmar Aporte de ${finalAmount || 0}</span>
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            /* Receipt generated */
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <CheckCircle2 size={36} />
              </div>

              <h3 style={{ fontSize: '1.6rem', marginBottom: '0.3rem' }}>¡Aporte Recibido con Éxito!</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Tu respaldo nos ayuda a imprimir afiches, financiar asambleas comunitarias y defender cada voto.
              </p>

              <div style={{ background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '1.5rem', textAlign: 'left', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.6rem', marginBottom: '0.8rem' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Folio Contable</span>
                  <strong style={{ color: 'var(--text-main)' }}>{receipt.folio}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.6rem', marginBottom: '0.8rem' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Aportante</span>
                  <strong style={{ color: 'var(--text-main)' }}>{receipt.name}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.6rem', marginBottom: '0.8rem' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Monto Donado</span>
                  <strong style={{ color: '#dc2626', fontSize: '1.15rem' }}>${receipt.amount} USD / equiv.</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Fecha de Emisión</span>
                  <span style={{ color: 'var(--text-main)' }}>{receipt.date}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.8rem' }}>
                <button
                  onClick={() => onShowToast(`Descargando certificado oficial de donación: ${receipt.folio}.pdf`, 'success')}
                  className="btn btn-primary"
                  style={{ flexGrow: 1 }}
                >
                  <Download size={16} />
                  <span>Descargar Certificado (PDF)</span>
                </button>
                <button onClick={onClose} className="btn btn-secondary">
                  <span>Cerrar</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
