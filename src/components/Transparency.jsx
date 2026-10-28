import React from 'react';
import { ShieldCheck, FileSpreadsheet, Lock, Eye, DownloadCloud } from 'lucide-react';

export default function Transparency({ onShowToast }) {
  const handleDownloadReport = () => {
    onShowToast('Descargando Informe Financiero Trimestral y Auditoría Forense PDC (PDF/XLS)...', 'success');
  };

  return (
    <section className="section-padding" id="transparencia" style={{ background: 'var(--bg-surface-subtle)' }}>
      <div className="container">
        <div className="transparency-box">
          <div style={{ maxWidth: '720px' }}>
            <span className="badge-tag" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
              Compromiso de Honestidad
            </span>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
              Portal de Cuentas Claras y Gobierno Abierto
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
              En el PDC predicamos con el ejemplo. Cada aporte recibido, cada gasto de campaña y cada contrato suscrito por nuestro equipo se publica semanalmente en formatos de datos abiertos para libre auditoría de cualquier ciudadano y medios de comunicación.
            </p>
          </div>

          <div className="transparency-grid">
            <div className="transparency-item">
              <div className="transparency-item-icon">
                <Eye size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Finanzas en Tiempo Real</h4>
                <p style={{ fontSize: '0.9rem' }}>Actualización semanal de ingresos y donaciones con origen lícito verificado.</p>
              </div>
            </div>

            <div className="transparency-item">
              <div className="transparency-item-icon">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Auditoría Forense Externa</h4>
                <p style={{ fontSize: '0.9rem' }}>Revisión independiente por firmas contables de reputación global y veedurías ciudadanas.</p>
              </div>
            </div>

            <div className="transparency-item">
              <div className="transparency-item-icon">
                <Lock size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Cero Financiamiento Opaco</h4>
                <p style={{ fontSize: '0.9rem' }}>Límites estrictos a aportes privados y prohibición tajante de donantes anónimos.</p>
              </div>
            </div>

            <div className="transparency-item">
              <div className="transparency-item-icon">
                <FileSpreadsheet size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Bienes Públicos de Candidatos</h4>
                <p style={{ fontSize: '0.9rem' }}>Declaración de renta y de conflicto de intereses obligatoria para todos los aspirantes.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <button onClick={handleDownloadReport} className="btn btn-secondary">
              <DownloadCloud size={17} />
              <span>Descargar Informe de Balances 2026 (PDF)</span>
            </button>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Última actualización contable: 27 de Octubre de 2026 • Certificado de Transparencia Nº PDC-9021
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
