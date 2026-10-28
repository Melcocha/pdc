import React from 'react';
import { campaignData } from '../data/campaignData';
import { FileText, Download, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';

export default function ProOfficialDocs({ onShowToast }) {
  const handleDownloadNotice = (docName) => {
    if (onShowToast) {
      onShowToast(`Descargando documento oficial: ${docName}`, 'success');
    }
  };

  return (
    <section className="pro-section pro-docs-section" id="documentos">
      <div className="pro-container">
        <div className="pro-section-header">
          <span className="pro-eyebrow">
            <span className="pro-eyebrow-pill">
              <FileText size={14} style={{ display: 'inline', marginRight: '5px' }} />
              Transparencia y Documentos Oficiales
            </span>
          </span>
          <h2 className="pro-title">Fuentes Oficiales y Planes de Campaña</h2>
          <p className="pro-subtitle">
            Accede y descarga en formato PDF original los dos documentos de trabajo que fundamentan la plataforma política para el Departamento de La Unión.
          </p>
        </div>

        <div className="pro-docs-grid">
          {/* Doc 1: Willian Méndez Brochure */}
          <div className="pro-doc-card">
            <div className="pro-doc-header">
              <div className="pro-doc-icon-box">
                <FileText size={26} color="var(--pdc-green)" />
              </div>
              <div className="pro-doc-meta">
                <span className="pro-doc-tag">Plataforma Legislativa</span>
                <span className="pro-doc-date">Elecciones 2027</span>
              </div>
            </div>

            <h3 className="pro-doc-title">
              Broshure Informativo: Lic. Willian Méndez (Casilla 1)
            </h3>
            <p className="pro-doc-desc">
              Documento con la semblanza académica, formación en Trabajo Social e Investigación Social, y las 12 iniciativas de ley concretas para el Departamento de La Unión.
            </p>

            <ul className="pro-doc-features">
              <li>
                <CheckCircle2 size={16} color="var(--pdc-green)" />
                <span>12 propuestas de ley numeradas y fundamentadas</span>
              </li>
              <li>
                <CheckCircle2 size={16} color="var(--pdc-green)" />
                <span>Fórmula completa: Diputado Propietario y Suplente</span>
              </li>
              <li>
                <CheckCircle2 size={16} color="var(--pdc-green)" />
                <span>Coalición PDC y Fuerza Solidaria</span>
              </li>
            </ul>

            <div className="pro-doc-actions">
              <a
                href={campaignData.pdfDocs.brochureDiputado}
                download="Brochure_Willian_Mendez_Diputado_PDC.pdf"
                onClick={() => handleDownloadNotice('Brochure Willian Méndez')}
                className="btn-pro btn-pro-green btn-pro-full"
              >
                <Download size={16} />
                <span>Descargar Broshure (PDF)</span>
              </a>

              <a
                href={campaignData.pdfDocs.brochureDiputado}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pro btn-pro-outline btn-pro-full"
              >
                <ExternalLink size={15} />
                <span>Ver en Nueva Pestaña</span>
              </a>
            </div>
          </div>

          {/* Doc 2: Luis Ortiz Municipal Plan */}
          <div className="pro-doc-card">
            <div className="pro-doc-header">
              <div className="pro-doc-icon-box">
                <FileText size={26} color="var(--pdc-green)" />
              </div>
              <div className="pro-doc-meta">
                <span className="pro-doc-tag">Plan Municipal</span>
                <span className="pro-doc-date">OCT2026 - FEB2027</span>
              </div>
            </div>

            <h3 className="pro-doc-title">
              Propuesta Plan de Gobierno Municipal: Luis Ortiz (PDC)
            </h3>
            <p className="pro-doc-desc">
              Diseño integral de campaña centrado en la Economía Familiar con 9 ejes de trabajo: salud, agricultura, pesca, convivencia, CEMAS, educación, medio ambiente, infraestructura y mujer.
            </p>

            <ul className="pro-doc-features">
              <li>
                <CheckCircle2 size={16} color="var(--pdc-green)" />
                <span>Diagrama de 9 ejes centrado en Economía Familiar</span>
              </li>
              <li>
                <CheckCircle2 size={16} color="var(--pdc-green)" />
                <span>Lancha ambulancia, CEMAS y banco municipal</span>
              </li>
              <li>
                <CheckCircle2 size={16} color="var(--pdc-green)" />
                <span>Articulación territorial por caseríos y comunidades</span>
              </li>
            </ul>

            <div className="pro-doc-actions">
              <a
                href={campaignData.pdfDocs.planMunicipal}
                download="Plan_Municipal_Luis_Ortiz_PDC.pdf"
                onClick={() => handleDownloadNotice('Plan Municipal Luis Ortiz')}
                className="btn-pro btn-pro-green btn-pro-full"
              >
                <Download size={16} />
                <span>Descargar Plan Municipal (PDF)</span>
              </a>

              <a
                href={campaignData.pdfDocs.planMunicipal}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pro btn-pro-outline btn-pro-full"
              >
                <ExternalLink size={15} />
                <span>Ver en Nueva Pestaña</span>
              </a>
            </div>
          </div>
        </div>

        {/* Veracity Guarantee Strip */}
        <div className="pro-docs-guarantee">
          <ShieldCheck size={20} color="var(--pdc-green)" />
          <p>
            Toda la información presentada en esta página web proviene <strong>exclusivamente</strong> de los documentos oficiales aprobados por la plataforma electoral del Partido Demócrata Cristiano (PDC) y sus candidatos en el Departamento de La Unión.
          </p>
        </div>
      </div>
    </section>
  );
}
