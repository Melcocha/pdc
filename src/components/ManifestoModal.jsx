import React from 'react';
import { manifesto10 } from '../data/partyData';
import { X, FileText, Download, CheckCircle2 } from 'lucide-react';

export default function ManifestoModal({ isOpen, onClose, onShowToast }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    onShowToast('Descargando Manifiesto Ideológico y Plan de Gobierno PDC 2026 (PDF Oficial)...', 'success');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '800px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar modal">
          <X size={20} />
        </button>

        <div style={{ padding: '2.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.2rem' }}>
            <span className="badge-sub gold">Documento Fundacional Oficial</span>
            <h3 style={{ fontSize: '1.9rem', marginTop: '0.4rem', marginBottom: '0.4rem' }}>
              Los 10 Mandatos del Manifiesto Ciudadano
            </h3>
            <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)' }}>
              El contrato ético vinculante suscrito por todos los candidatos y militantes del Partido Demócrata y Ciudadano para las Elecciones 2026.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2rem' }}>
            {manifesto10.map((item) => (
              <div
                key={item.num}
                style={{
                  display: 'flex',
                  gap: '1.2rem',
                  padding: '1.2rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-light)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.35rem',
                    fontWeight: 900,
                    color: 'var(--primary-accent)',
                    lineHeight: 1,
                    minWidth: '35px',
                  }}
                >
                  {item.num}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.08rem', marginBottom: '0.3rem', color: 'var(--text-main)' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid var(--border-medium)', paddingTop: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <CheckCircle2 size={18} color="#10b981" />
              <span>Aprobado por el Congreso Ciudadano Nacional del PDC</span>
            </div>

            <button onClick={handleDownload} className="btn btn-primary">
              <Download size={17} />
              <span>Descargar Documento Oficial (PDF)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
