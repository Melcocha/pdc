import React, { useState } from 'react';
import { municipalPlan } from '../data/campaignData';
import {
  Activity,
  Sprout,
  Anchor,
  HeartHandshake,
  Building2,
  GraduationCap,
  Leaf,
  Hammer,
  Sparkles,
  X,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const axisIcons = {
  salud: Activity,
  agricultura: Sprout,
  turismo: Anchor,
  valores: HeartHandshake,
  administracion: Building2,
  educacion: GraduationCap,
  'medio-ambiente': Leaf,
  infraestructura: Hammer,
  mujer: Sparkles,
};

const axisShortDescriptions = {
  salud: 'Venta al costo de medicamentos de uso común (Farmacia Municipal) y habilitación de FOSALUD en distritos.',
  agricultura: 'Servicio de maquinaria y tractor agrícola gratuito, reservorios de agua y banco de herramientas de labranza.',
  turismo: 'Mini muelles y varaderos costeros, lancha ambulancia y creación del Centro Municipal de Acopio Pesquero.',
  valores: 'Adecuación de mini centros de convivencia social y asignación presupuestaria a disciplinas deportivas juveniles.',
  administracion: 'Centro de Atención Solidario (CEMAS) para remesas, pagos y reducción inmediata en la tarifa de agua potable.',
  educacion: 'Becas para estudiantes de educación media y superior, y dotación de bicicletas para transporte escolar.',
  'medio-ambiente': 'Mini planta de transferencia de desechos, erradicación de botaderos y creación de viveros por distrito.',
  infraestructura: 'Programa continuo de mejoramiento vial con el MOP y asignación presupuestaria directa por cada caserío.',
  mujer: 'Creación del Mini Banco Municipal para créditos a mujeres emprendedoras y talleres vocacionales productivos.',
};

export default function ProRadialMunicipalPlan() {
  const [activeModalAxis, setActiveModalAxis] = useState(null);

  return (
    <section className="dept-showcase-section" id="plan-municipal">
      {/* Background with Dark Cinematic Civic Overlay */}
      <div className="dept-showcase-bg-overlay" />

      <div className="dept-showcase-container">
        
        {/* Centered Editorial Header */}
        <div className="trail-editorial-header">
          <h2 className="trail-editorial-title">
            Ejes de Trabajo <br />
            para el <em>Desarrollo</em>
          </h2>
        </div>

        {/* 3-Column Editorial Cards Grid (All 9 Ejes) */}
        <div className="trail-cards-grid">
          {municipalPlan.axes.map((axis) => {
            const IconComp = axisIcons[axis.id] || Building2;
            const shortDesc = axisShortDescriptions[axis.id] || axis.tagline;

            return (
              <div
                key={axis.id}
                className="trail-editorial-card"
                onClick={() => setActiveModalAxis(axis)}
                role="button"
                tabIndex={0}
                aria-label={`Ver programas de ${axis.name}`}
              >
                {/* Top Photo Container with Rounded Corners */}
                <div className="trail-card-img-wrap">
                  <img
                    src={axis.image || '/assets/civic_townhall.jpg'}
                    alt={axis.name}
                    className="trail-card-img"
                  />
                  <div className="trail-card-badge-overlay">
                    <IconComp size={13} />
                    <span>Eje 0{axis.number}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="trail-card-body">
                  <h3 className="trail-card-title">
                    {axis.name}
                  </h3>

                  <p className="trail-card-desc">
                    {shortDesc}
                  </p>

                  <div className="trail-card-footer">
                    <span className="trail-card-cta">
                      Ver {axis.programs.length} Programas Concretos
                      <ArrowRight size={16} className="trail-card-cta-icon" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Axis Program Details Modal */}
      {activeModalAxis && (
        <div className="dept-modal-backdrop" onClick={() => setActiveModalAxis(null)}>
          <div className="dept-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              className="dept-modal-close"
              onClick={() => setActiveModalAxis(null)}
              aria-label="Cerrar modal"
            >
              <X size={20} />
            </button>

            <div className="dept-modal-header">
              <span className="dept-modal-eyebrow">
                Eje 0{activeModalAxis.number} • Plan Municipal Luis Ortiz
              </span>
              <h3 className="dept-modal-title">{activeModalAxis.name}</h3>
              <p className="dept-modal-tagline">"{activeModalAxis.tagline}"</p>
            </div>

            <div className="dept-modal-actions-list">
              <h4 className="dept-modal-actions-heading">
                Programas y Acciones Concretas:
              </h4>
              {activeModalAxis.programs.map((prog, pIdx) => (
                <div key={pIdx} className="dept-modal-action-item">
                  <span className="dept-modal-action-index">0{pIdx + 1}</span>
                  <p className="dept-modal-action-text">{prog}</p>
                </div>
              ))}
            </div>

            <div className="dept-modal-footer">
              <div className="dept-modal-impact-box">
                <CheckCircle2 size={20} className="dept-impact-check" />
                <div>
                  <strong>Eje Central: Economía Familiar</strong>
                  <p>Iniciativa diseñada para maximizar el ingreso y bienestar directo de cada hogar en La Unión.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
