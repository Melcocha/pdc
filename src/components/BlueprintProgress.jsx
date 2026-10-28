import React, { useState } from 'react';
import { blueprintPillars } from '../data/partyData';
import { Check, ThumbsUp, CheckCircle, ArrowRight } from 'lucide-react';

export default function BlueprintProgress({ onOpenManifesto, onShowToast }) {
  const [votes, setVotes] = useState(() => {
    const init = {};
    blueprintPillars.forEach((p) => {
      init[p.id] = { count: p.initialVotes, hasVoted: false };
    });
    return init;
  });

  const handleVote = (id, title) => {
    setVotes((prev) => {
      const current = prev[id] || { count: 0, hasVoted: false };
      const nextVoted = !current.hasVoted;
      const nextCount = nextVoted ? current.count + 1 : current.count - 1;

      if (nextVoted) {
        onShowToast(`¡Has sumado tu voto de respaldo al eje: "${title}"!`, 'success');
      } else {
        onShowToast(`Has retirado tu voto de respaldo.`, 'info');
      }

      return {
        ...prev,
        [id]: { count: nextCount, hasVoted: nextVoted }
      };
    });
  };

  return (
    <section className="sec-padding blueprint-section" id="blueprint">
      <div className="container">
        <div className="sec-header">
          <span className="badge-sub">Ejes de Gobierno (Issues)</span>
          <h2 className="sec-title">El Plan para el Progreso (A Blueprint for Progress)</h2>
          <p className="sec-desc">
            Nuestras tres prioridades estratégicas para reactivar la economía, transformar la educación pública y proteger el patrimonio natural de las futuras generaciones.
          </p>
        </div>

        <div className="blueprint-grid">
          {blueprintPillars.map((pillar) => {
            const voteState = votes[pillar.id] || { count: pillar.initialVotes, hasVoted: false };
            return (
              <div key={pillar.id} className="blueprint-card">
                <div className="blueprint-img-wrap">
                  <img src={pillar.image} alt={pillar.title} className="blueprint-img" />
                  <span className="blueprint-badge">{pillar.badge}</span>
                </div>

                <div className="blueprint-body">
                  <h3 className="blueprint-title">{pillar.title}</h3>
                  <div className="blueprint-subtitle">{pillar.englishTitle}</div>

                  <p className="blueprint-summary">{pillar.summary}</p>

                  <ul className="blueprint-bullets">
                    {pillar.points.map((pt, i) => (
                      <li key={i}>
                        <Check size={16} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="blueprint-footer">
                    <button
                      onClick={onOpenManifesto}
                      className="btn btn-secondary btn-sm"
                    >
                      <span>Ver Detalles</span>
                      <ArrowRight size={14} />
                    </button>

                    <button
                      onClick={() => handleVote(pillar.id, pillar.title)}
                      className={`blueprint-vote-btn ${voteState.hasVoted ? 'active' : ''}`}
                    >
                      {voteState.hasVoted ? <CheckCircle size={16} /> : <ThumbsUp size={16} />}
                      <span>{voteState.count.toLocaleString()} Respaldos</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
