import React, { useState, useEffect } from 'react';
import { campaignData } from '../data/campaignData';
import { goTo, scrollToId } from '../hooks/useHashRoute';
import { Menu, X, Phone, CheckCircle2, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', route: '/' },
  { label: 'Plataforma Municipal', route: '/municipal' },
  { label: 'Plataforma Legislativa', route: '/legislativa' },
  { label: 'Redes', scroll: 'redes' },
];

const topbarCenter = {
  '/': 'DEPARTAMENTO DE LA UNIÓN • ALCALDÍA Y ASAMBLEA LEGISLATIVA',
  '/municipal': 'LA UNIÓN SUR • PLAN DE TRABAJO MUNICIPAL',
  '/legislativa': 'DEPARTAMENTO DE LA UNIÓN • ASAMBLEA LEGISLATIVA',
};

export default function ProNavbar({ route = '/' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const go = (item) => {
    setMobileMenuOpen(false);
    if (item.scroll) {
      scrollToId(item.scroll);
    } else if (item.route === route) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      goTo(item.route);
    }
  };

  const goBallot = () => {
    setMobileMenuOpen(false);
    if (route === '/legislativa') {
      scrollToId('candidatos');
    } else {
      goTo('/legislativa');
    }
  };

  const isActive = (item) => item.route === route;

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
            <span>{topbarCenter[route]}</span>
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
            href="#/"
            className="pro-brand"
            onClick={(e) => {
              e.preventDefault();
              go({ route: '/' });
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
                    href={item.route ? `#${item.route}` : `#${item.scroll}`}
                    onClick={(e) => {
                      e.preventDefault();
                      go(item);
                    }}
                    className={isActive(item) ? 'pro-menu-active' : ''}
                    aria-current={isActive(item) ? 'page' : undefined}
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
              href="#/legislativa"
              onClick={(e) => {
                e.preventDefault();
                goBallot();
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
                  href={item.route ? `#${item.route}` : `#${item.scroll}`}
                  onClick={(e) => {
                    e.preventDefault();
                    go(item);
                  }}
                  className="pro-mobile-link"
                >
                  <span>{item.label}</span>
                  <ChevronRight size={16} color="var(--slate-400)" />
                </a>
              ))}

              <div className="pro-mobile-actions">
                <a
                  href="#/legislativa"
                  onClick={(e) => {
                    e.preventDefault();
                    goBallot();
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
