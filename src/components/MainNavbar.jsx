import React, { useState } from 'react';
import { partyInfo } from '../data/partyData';
import { Sun, Moon, Menu, X, Heart, UserPlus, ChevronRight } from 'lucide-react';

export default function MainNavbar({ theme, toggleTheme, onOpenAffiliation, onOpenDonation }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Conoce a Elena', href: '#candidata' },
    { label: 'El Plan (Blueprint)', href: '#blueprint' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Voces de Apoyo', href: '#testimonios' },
    { label: 'Eventos', href: '#eventos' },
    { label: 'Noticias & Blog', href: '#noticias' },
    { label: 'Buzón & FAQ', href: '#buzon' },
  ];

  const handleScroll = (href) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="main-header" id="inicio">
      <div className="container header-container">
        {/* Brand Crest */}
        <a href="#inicio" className="logo-wrapper" onClick={(e) => { e.preventDefault(); handleScroll('#inicio'); }}>
          <div className="logo-crest">PDC</div>
          <div className="logo-texts">
            <span className="logo-main">{partyInfo.name}</span>
            <span className="logo-sub">{partyInfo.slogan}</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav>
          <ul className="main-nav">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Group: DONATE + AFILIATE + Theme */}
        <div className="header-action-group">
          <button
            onClick={toggleTheme}
            className="theme-btn"
            title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} color="#fbbf24" /> : <Moon size={18} color="#0284c7" />}
          </button>

          {/* Wix Prominent DONATE Button */}
          <button
            onClick={onOpenDonation}
            className="btn btn-donate btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <Heart size={15} fill="#ffffff" />
            <span>DONAR</span>
          </button>

          {/* OpenCity / Platform Affiliation Button */}
          <button
            onClick={onOpenAffiliation}
            className="btn btn-primary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <UserPlus size={15} />
            <span>AFÍLIATE</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir Menú"
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
            gap: '0.8rem',
          }}
        >
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(item.href);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 0',
                borderBottom: '1px solid var(--border-light)',
                fontWeight: 700,
                color: 'var(--text-main)',
              }}
            >
              <span>{item.label}</span>
              <ChevronRight size={18} color="var(--text-muted)" />
            </a>
          ))}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '0.8rem' }}>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDonation(); }}
              className="btn btn-donate"
              style={{ width: '100%' }}
            >
              <Heart size={16} fill="#ffffff" />
              <span>DONAR A LA CAMPAÑA</span>
            </button>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAffiliation(); }}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <UserPlus size={16} />
              <span>AFILIARME GRATIS</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
