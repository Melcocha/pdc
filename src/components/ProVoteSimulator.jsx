import React, { useState } from 'react';
import { campaignData, deputyCandidate } from '../data/campaignData';
import { CheckCircle2, RotateCcw, Vote, Sparkles, AlertCircle, Info, ShieldCheck } from 'lucide-react';

export default function ProVoteSimulator({ onShowToast }) {
  const [markedFlag, setMarkedFlag] = useState(false);
  const [markedFace, setMarkedFace] = useState(false);
  const [stampFeedback, setStampFeedback] = useState('');

  const triggerToast = (msg, type = 'success') => {
    setStampFeedback(msg);
    if (onShowToast) {
      onShowToast(msg, type);
    }
  };

  const handleToggleFlag = () => {
    const next = !markedFlag;
    setMarkedFlag(next);
    if (next) {
      triggerToast('¡Has marcado la Bandera del PDC! Voto válido para la Coalición.', 'success');
    } else {
      triggerToast('Marca de bandera retirada.', 'info');
    }
  };

  const handleToggleFace = () => {
    const next = !markedFace;
    setMarkedFace(next);
    if (next) {
      triggerToast('¡Has marcado la Casilla 1 de Lic. Willian Méndez! Voto preferencial directo.', 'success');
    } else {
      triggerToast('Marca de casilla 1 retirada.', 'info');
    }
  };

  const handleReset = () => {
    setMarkedFlag(false);
    setMarkedFace(false);
    triggerToast('Papeleta en blanco lista para una nueva simulación.', 'info');
  };

  const hasVoted = markedFlag || markedFace;

  return (
    <section className="pro-section pro-simulator-section" id="simulador">
      <div className="pro-container">
        <div className="pro-section-header">
          <span className="pro-eyebrow">
            <span className="pro-eyebrow-pill">
              <Vote size={14} style={{ display: 'inline', marginRight: '5px' }} />
              Pedagogía Electoral 2027
            </span>
          </span>
          <h2 className="pro-title">Simulador Interactivo de Papeleta de Votación</h2>
          <p className="pro-subtitle">
            Aprende cómo marcar correctamente tu voto en las Elecciones 2027. Haz clic sobre la <strong>Bandera del PDC</strong> o sobre la <strong>Casilla 1 de Willian Méndez</strong> para estampar tu marca.
          </p>
        </div>

        {/* Realistic Salvadoran Electoral Ballot Box */}
        <div className="pro-ballot-container">
          <div className="pro-ballot-box">
            {/* Top Official Watermark Header */}
            <div className="pro-ballot-header">
              <div className="pro-ballot-header-strip">
                <span>REPÚBLICA DE EL SALVADOR • TRIBUNAL SUPREMO ELECTORAL</span>
                <span>ELECCIONES 2027</span>
              </div>
              <h3 className="pro-ballot-header-title">PAPELETA DE VOTACIÓN PARA DIPUTADOS Y DIPUTADAS</h3>
              <div className="pro-ballot-header-sub">
                <span>DEPARTAMENTO DE LA UNIÓN</span>
                <span className="pro-ballot-dot-sep">•</span>
                <span>COALICIÓN PARTIDO DEMÓCRATA CRISTIANO (PDC) Y FUERZA SOLIDARIA</span>
              </div>
            </div>

            {/* Clickable Ballot Slots */}
            <div className="pro-ballot-slots-grid">
              {/* Slot 1: Bandera PDC */}
              <div
                onClick={handleToggleFlag}
                className={`pro-ballot-slot ${markedFlag ? 'marked' : ''}`}
                title="Haz clic para marcar la bandera"
                tabIndex={0}
                role="button"
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleToggleFlag(); }}
              >
                <div className="pro-slot-badge">OPCIÓN A: VOTO POR BANDERA</div>
                <div className="pro-slot-img-wrap">
                  <img
                    src={campaignData.logos.pdc}
                    alt="Bandera Oficial PDC"
                    className="pro-slot-img"
                  />
                  {markedFlag && (
                    <div className="pro-mark-overlay animate-stamp">
                      <span className="pro-x-mark">✕</span>
                    </div>
                  )}
                </div>
                <div className="pro-slot-caption">
                  <strong className="pro-slot-name">BANDERA PDC</strong>
                  <span className="pro-slot-detail">Partido Demócrata Cristiano</span>
                </div>
                <div className="pro-slot-action-hint">
                  {markedFlag ? '✓ MARCADO CON ÉXITO' : 'TOCA AQUÍ PARA MARCAR'}
                </div>
              </div>

              {/* Slot 2: Casilla 1 - Lic. Willian Méndez */}
              <div
                onClick={handleToggleFace}
                className={`pro-ballot-slot ${markedFace ? 'marked' : ''}`}
                title="Haz clic para marcar la fotografía"
                tabIndex={0}
                role="button"
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleToggleFace(); }}
              >
                <div className="pro-slot-badge pro-slot-badge-gold">OPCIÓN B: VOTO PREFERENCIAL</div>
                <div className="pro-slot-img-wrap">
                  <img
                    src={deputyCandidate.photo}
                    alt={deputyCandidate.name}
                    className="pro-slot-img pro-slot-candidate-photo"
                  />
                  {markedFace && (
                    <div className="pro-mark-overlay animate-stamp">
                      <span className="pro-x-mark">✕</span>
                    </div>
                  )}
                </div>
                <div className="pro-slot-caption">
                  <div className="pro-slot-casilla-tag">CASILLA 1</div>
                  <strong className="pro-slot-name">{deputyCandidate.name}</strong>
                  <span className="pro-slot-detail">Candidato a Diputado Propietario</span>
                </div>
                <div className="pro-slot-action-hint">
                  {markedFace ? '✓ MARCADO CON ÉXITO' : 'TOCA AQUÍ PARA MARCAR'}
                </div>
              </div>
            </div>

            {/* Live Interactive Verification Ribbon */}
            <div className="pro-ballot-status-bar">
              <div className="pro-ballot-status-info">
                {hasVoted ? (
                  <div className="pro-ballot-status-valid">
                    <CheckCircle2 size={22} color="#16a34a" />
                    <div>
                      <strong>¡VOTO 100% VÁLIDO!</strong>
                      <p>
                        {markedFlag && markedFace
                          ? 'Has marcado la Bandera PDC y la Casilla 1 de Willian Méndez. Voto preferencial directo válido.'
                          : markedFace
                          ? 'Has marcado la Casilla 1 de Willian Méndez. Voto preferencial directo válido para el candidato.'
                          : 'Has marcado la Bandera del PDC. Voto partidario válido para la coalición.'}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="pro-ballot-status-pending">
                    <Info size={22} color="var(--slate-400)" />
                    <div>
                      <strong>Papeleta lista para simular</strong>
                      <p>Haz clic en cualquiera de las dos casillas de arriba para ensayar tu voto.</p>
                    </div>
                  </div>
                )}
              </div>

              {hasVoted && (
                <button
                  onClick={handleReset}
                  className="btn-pro btn-pro-outline btn-pro-sm"
                  title="Limpiar papeleta"
                >
                  <RotateCcw size={15} />
                  <span>Limpiar y Volver a Intentar</span>
                </button>
              )}
            </div>
          </div>

          {/* Educational Electoral Law Note */}
          <div className="pro-ballot-guide-box">
            <div className="pro-ballot-guide-item">
              <ShieldCheck size={20} color="var(--pdc-green)" />
              <div>
                <strong>¿Cómo garantiza el Código Electoral tu voto?</strong>
                <p>
                  El sistema electoral salvadoreño permite el <strong>voto preferencial</strong>. Al marcar la Casilla 1 con el rostro de <strong>Lic. Willian Méndez</strong>, tu voto cuenta directamente para asegurarle una curul en la Asamblea Legislativa por el Departamento de La Unión.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
