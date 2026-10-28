import React, { useState } from 'react';
import { deputyProposals } from '../data/campaignData';
import {
  Search,
  Layers,
  Fish,
  CreditCard,
  GraduationCap,
  Baby,
  MapPin,
  Flame,
  Bus,
  Palette,
  BookOpen,
  HeartPulse,
  School,
  Briefcase
} from 'lucide-react';

const iconMap = {
  Fish,
  CreditCard,
  GraduationCap,
  Baby,
  MapPin,
  Flame,
  Bus,
  Palette,
  BookOpen,
  HeartPulse,
  School,
  Briefcase
};

export default function ProBlueprintProposals() {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'Todas',
    'Economía y Pesca',
    'Alivio Económico',
    'Educación',
    'Salud Pública',
    'Obras Públicas y VMT',
    'Empleo Joven',
  ];

  const filtered = deputyProposals.filter((p) => {
    const matchesCategory = selectedCategory === 'Todas' || p.category === selectedCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      searchQuery === '' ||
      (p.shortTitle && p.shortTitle.toLowerCase().includes(query)) ||
      p.title.toLowerCase().includes(query) ||
      (p.shortDesc && p.shortDesc.toLowerCase().includes(query)) ||
      p.desc.toLowerCase().includes(query) ||
      (p.highlight && p.highlight.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="pro-section pro-proposals-section" id="propuestas">
      <div className="pro-container">
        <div className="pro-section-header">
          <span className="pro-eyebrow">
            <span className="pro-eyebrow-pill">
              <Layers size={14} style={{ display: 'inline', marginRight: '5px' }} />
              Agenda Legislativa • Lic. Willian Méndez
            </span>
          </span>
          <h2 className="pro-title">12 Propuestas Clave para La Unión</h2>
          <p className="pro-subtitle">
            Compromisos legislativos claros, directos y enfocados en aliviar la economía de nuestras familias.
          </p>
        </div>

        {/* Filter and Search Controls Bar */}
        <div className="pro-proposals-controls">
          {/* Category Tabs */}
          <div className="pro-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`pro-filter-tab ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat === 'Todas' ? `Todas (12)` : cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="pro-search-box">
            <Search size={16} className="pro-search-icon" />
            <input
              type="text"
              placeholder="Buscar propuesta (pesca, licencias, hospital...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pro-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="pro-search-clear"
                title="Limpiar búsqueda"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="pro-results-count">
          <span>Mostrando <strong>{filtered.length}</strong> de 12 propuestas oficiales</span>
        </div>

        {/* Simplified, Fast-to-Read Proposals Grid */}
        <div className="pro-proposals-grid">
          {filtered.map((prop) => {
            const IconComp = iconMap[prop.icon] || Layers;
            return (
              <div key={prop.id} className="pro-proposal-card">
                <div className="pro-prop-top">
                  <div className="pro-prop-meta-left">
                    <span className="pro-prop-num">
                      {prop.id < 10 ? `0${prop.id}` : prop.id}
                    </span>
                    <span className="pro-prop-tag">{prop.category}</span>
                  </div>

                  <div className="pro-prop-icon-badge">
                    <IconComp size={18} color="var(--pdc-green)" />
                  </div>
                </div>

                <h4 className="pro-prop-title">{prop.shortTitle || prop.title}</h4>

                <p className="pro-prop-desc">{prop.shortDesc || prop.desc}</p>

                {prop.highlight && (
                  <div className="pro-prop-highlight-pill">
                    <span className="pro-prop-highlight-dot"></span>
                    <span>{prop.highlight}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="pro-no-results">
            <p>No se encontraron propuestas con el término "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Todas');
              }}
              className="btn-pro btn-pro-outline btn-pro-sm"
              style={{ marginTop: '0.8rem' }}
            >
              Restablecer filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
