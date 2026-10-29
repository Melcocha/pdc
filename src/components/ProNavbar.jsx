import React, { useState, useEffect } from 'react';
import { campaignData } from '../data/campaignData';
import { Menu, X, Phone, CheckCircle2, ChevronRight } from 'lucide-react';

export default function ProNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Candidatos', href: '#candidatos' },
    { label: '12 Propuestas', href: '#propuestas' },
    { label: 'Plan Municipal', href: '#plan-municipal' },
    { label: 'Distritos', href: '#distritos' },
  ];

  const handleScroll = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* 1. Sleek Top Eyebrow Bar */}
      <div className="pro-topbar">
        <div className="pro-container pro-topbar-inner">
          <div className="pro-topbar-item">
            <span className="pro-topbar-dot"></span>
            <span>{campaignData.coalition} • {campaignData.electionYear}</span>
          </div>
          <div className="pro-topbar-center hide-on-mobile">
            <span>DEPARTAMENTO DE LA UNIÓN • ASAMBLEA LEGISLATIVA</span>
          </div>
          <div className="pro-topbar-item">
            <Phone size={13} style={{ color: 'var(--pdc-green)' }} />
            <a href={`tel:${campaignData.contactPhone}`} className="pro-topbar-phone">
              Línea Ciudadana: <strong>{campaignData.contactPhone}</strong>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Luxury Sticky Navbar */}
      <header className={`pro-header ${scrolled ? 'pro-header-scrolled' : ''}`}>
        <div className="pro-container pro-nav-wrap">
          {/* Brand Lockup */}
          <a
            href="#inicio"
            className="pro-brand"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('#inicio');
            }}
          >
            <div className="pro-brand-logo-frame">
              <img
                src={campaignData.logos.pdc}
                alt="Bandera Oficial PDC El Salvador"
                className="pro-brand-logo"
              />
            </div>
            <div className="pro-brand-text">
              <span className="pro-brand-name">
                <span className="pro-brand-name-full">Partido Demócrata Cristiano</span>
                <span className="pro-brand-name-short">PDC</span>
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="pro-desktop-nav" aria-label="Navegación Principal">
            <ul className="pro-menu">
              {navLinks.map((item) => (
                <li key={item.label} className="pro-menu-item">
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(item.href);
                    }}
                    className={item.highlight ? 'pro-menu-highlight' : ''}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Group */}
          <div className="pro-nav-action">
            <a
              href="#candidatos"
              onClick={(e) => {
                e.preventDefault();
                handleScroll('#candidatos');
              }}
              className="pro-ballot-pill"
              title="Candidato Willian Méndez - Casilla 1"
            >
              <span className="pro-pulse-dot"></span>
              <span>VOTA CASILLA 1</span>
            </a>

            {/* Mobile Toggle */}
            <button
              className="pro-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir o cerrar menú"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="pro-mobile-drawer">
            <div className="pro-container pro-mobile-drawer-inner">
              <span className="pro-mobile-drawer-label">Navegación</span>
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item.href);
                  }}
                  className="pro-mobile-link"
                >
                  <span>{item.label}</span>
                  <ChevronRight size={16} color="var(--slate-400)" />
                </a>
              ))}

              <div className="pro-mobile-actions">
                <a
                  href="#candidatos"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll('#candidatos');
                  }}
                  className="btn-pro btn-pro-green btn-pro-full"
                >
                  <CheckCircle2 size={17} />
                  <span>Candidatos (Casilla 1)</span>
                </a>

                <a
                  href={`tel:${campaignData.contactPhone}`}
                  className="btn-pro btn-pro-outline btn-pro-full"
                >
                  <Phone size={15} />
                  <span>Coordinación: {campaignData.contactPhone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
