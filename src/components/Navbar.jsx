import React, { useState } from 'react';
import { partyInfo } from '../data/partyData';
import { Sun, Moon, Menu, X, UserPlus, FileText, ChevronRight } from 'lucide-react';

export default function Navbar({ theme, toggleTheme, onOpenAffiliation, onOpenManifesto }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Ejes y Valores', href: '#valores' },
    { label: 'Propuestas', href: '#propuestas' },
    { label: 'Liderazgo', href: '#liderazgo' },
    { label: 'Participación', href: '#participacion' },
    { label: 'Noticias', href: '#noticias' },
    { label: 'Transparencia', href: '#transparencia' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header-nav" id="inicio">
      <div className="container nav-container">
        <a href="#inicio" className="brand-logo" onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}>
          <div className="brand-emblem">PDC</div>
          <div className="brand-text">
            <span className="brand-title">{partyInfo.acronym}</span>
            <span className="brand-subtitle">Demócrata & Ciudadano</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Nav Actions */}
        <div className="nav-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={19} color="#fbbf24" /> : <Moon size={19} color="#2563eb" />}
          </button>

          <button
            onClick={onOpenManifesto}
            className="btn btn-secondary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <FileText size={16} />
            <span>Manifiesto</span>
          </button>

          <button
            onClick={onOpenAffiliation}
            className="btn btn-primary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <UserPlus size={16} />
            <span>Afíliate Hoy</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'var(--bg-surface-elevated)',
            borderBottom: '1px solid var(--border-medium)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 0',
                borderBottom: '1px solid var(--border-light)',
                fontWeight: 600,
                color: 'var(--text-main)',
              }}
            >
              <span>{item.label}</span>
              <ChevronRight size={18} color="var(--text-muted)" />
            </a>
          ))}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenManifesto();
              }}
              className="btn btn-secondary"
              style={{ width: '100%' }}
            >
              <FileText size={17} />
              <span>Ver Manifiesto 2026</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAffiliation();
              }}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <UserPlus size={17} />
              <span>Afiliarme al PDC</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
