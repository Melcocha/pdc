import React, { useState } from 'react';
import { proposalsData, proposalCategories } from '../data/partyData';
import { Search, ThumbsUp, CheckCircle, Sparkles, Filter, Share2, Info } from 'lucide-react';

export default function Proposals({ onShowToast }) {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [votes, setVotes] = useState(() => {
    const initial = {};
    proposalsData.forEach((p) => {
      initial[p.id] = { count: p.initialVotes, hasVoted: false };
    });
    return initial;
  });

  const handleVote = (id, title) => {
    setVotes((prev) => {
      const current = prev[id] || { count: 0, hasVoted: false };
      const nextHasVoted = !current.hasVoted;
      const nextCount = nextHasVoted ? current.count + 1 : current.count - 1;

      if (nextHasVoted) {
        onShowToast(`¡Has respaldado la propuesta: "${title}"! Tu voto se registró en la plataforma ciudadana.`, 'success');
      } else {
        onShowToast(`Has retirado tu respaldo a la propuesta.`, 'info');
      }

      return {
        ...prev,
        [id]: { count: nextCount, hasVoted: nextHasVoted },
      };
    });
  };

  const filteredProposals = proposalsData.filter((prop) => {
    const matchesCategory = selectedCategory === 'Todas' || prop.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prop.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prop.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="section-padding" id="propuestas" style={{ background: 'var(--bg-surface-subtle)' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge-tag amber">Plan de Gobierno 2026</span>
          <h2 className="section-title">Iniciativas y Leyes para el País</h2>
          <p className="section-desc">
            Propuestas técnicas respaldadas por economistas, académicos y líderes comunitarios. Vota y prioriza los proyectos que consideras más urgentes.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="proposals-controls">
          <div className="search-input-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Buscar por tema, palabra clave (ej. empleo, becas, anticorrupción)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Buscar propuesta"
            />
          </div>

          <div className="category-chips">
            {proposalCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`chip-btn ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Proposals Grid */}
        {filteredProposals.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-lg)' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>No encontramos propuestas que coincidan con tu búsqueda.</p>
            <button
              onClick={() => { setSelectedCategory('Todas'); setSearchQuery(''); }}
              className="btn btn-secondary btn-sm"
              style={{ marginTop: '1rem' }}
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="proposals-grid">
            {filteredProposals.map((prop) => {
              const voteState = votes[prop.id] || { count: prop.initialVotes, hasVoted: false };
              return (
                <div key={prop.id} className="glass-card proposal-card">
                  <div>
                    <div className="proposal-top">
                      <span className="proposal-category">{prop.category}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>ID: {prop.id.toUpperCase()}</span>
                    </div>

                    <h3 className="proposal-title">{prop.title}</h3>
                    <p className="proposal-summary">{prop.summary}</p>

                    <div className="proposal-impact">
                      <strong style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                        Impacto Proyectado:
                      </strong>
                      {prop.impact}
                    </div>

                    <div className="proposal-tags">
                      {prop.tags.map((tag) => (
                        <span key={tag} className="proposal-tag">#{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="proposal-footer">
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Autoría</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>{prop.author}</div>
                    </div>

                    <button
                      onClick={() => handleVote(prop.id, prop.title)}
                      className={`vote-btn ${voteState.hasVoted ? 'voted' : ''}`}
                      title={voteState.hasVoted ? 'Retirar voto' : 'Apoyar esta propuesta'}
                    >
                      {voteState.hasVoted ? <CheckCircle size={16} /> : <ThumbsUp size={16} />}
                      <span>{voteState.count.toLocaleString()}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
