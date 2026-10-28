import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    image: '/assets/slide_pescadores.png',
    title: 'Apoyo Directo a los Pescadores de La Unión.',
    description: 'Iniciativas de ley para reducir $0.20 ctvs por galón de combustible y proteger la economía familiar en cada faena.',
  },
  {
    id: 2,
    image: '/assets/slide_estudiantes.jpg',
    title: 'Educación y Salud Mental para la Juventud.',
    description: 'Equipos multidisciplinarios de psicología en centros escolares y bachillerato en artes descentralizado en los distritos.',
  },
  {
    id: 3,
    image: '/assets/slide_artesanias.png',
    title: 'Capital Semilla y Trabajo Digno Local.',
    description: 'Financiamiento no reembolsable y proyectos directos para artesanos, emprendedores y el comercio de nuestras comunidades.',
  },
];

export default function ProHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slideshow every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const activeSlide = heroSlides[currentSlide];

  return (
    <>
      <section className="opencity-hero-section" id="inicio">
        {/* 1. Dynamic Background Image Slideshow */}
        <div className="opencity-slides-backdrop">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`opencity-bg-slide ${idx === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          ))}
          {/* Cinematic Dark & Greenish Overlay */}
          <div className="opencity-backdrop-overlay" />
        </div>

        <div className="pro-container opencity-hero-container">
          <div className="opencity-hero-grid">
            {/* 2. Left Column: Vibrant Green Solid Feature Block with Dynamic Changing Title & Description */}
            <div className="opencity-green-block">
              <div key={currentSlide} className="opencity-dynamic-content">
                <h1 className="opencity-hero-title">
                  {activeSlide.title}
                </h1>
                <p className="opencity-hero-sub">
                  {activeSlide.description}
                </p>
              </div>

              {/* Minimal Slide Indicator Line */}
              <div className="opencity-slide-dots">
                {heroSlides.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`opencity-dot-indicator ${idx === currentSlide ? 'active' : ''}`}
                    aria-label={`Ver diapositiva ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* 3. Right Column: Transparent Cutout PNG Photo Pegged to the Bottom Edge */}
            <div className="opencity-candidate-col">
              <div className="opencity-cutout-wrapper">
                <img
                  src="/assets/willian_mendez_transparent.png"
                  alt="Lic. Willian Méndez - Candidato a Diputado Casilla 1"
                  className="opencity-candidate-cutout"
                />

                {/* Sleek Floating Tag */}
                <div className="opencity-cutout-tag">
                  <span className="opencity-cutout-tag-casilla">CASILLA 1 • LA UNIÓN</span>
                  <h3 className="opencity-cutout-tag-name">Lic. Willian Méndez</h3>
                  <span className="opencity-cutout-tag-role">Candidato a Diputado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Bottom Right Controls (Prev / Next & Counter) */}
        <div className="opencity-slider-controls">
          <span className="opencity-counter">
            0{currentSlide + 1} / 0{heroSlides.length}
          </span>
          <button
            onClick={handlePrev}
            className="opencity-nav-btn"
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="opencity-nav-btn"
            aria-label="Siguiente imagen"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Bottom Decorative Curve */}
        <div className="opencity-bottom-curve">
          <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none">
            <path
              d="M0,40 C320,0 1120,0 1440,40 L1440,40 L0,40 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* 5. Clean Stats Ribbon (Directly below Hero Banner) */}
      <section className="opencity-stats-ribbon">
        <div className="pro-container">
          <div className="opencity-stats-grid">
            <div className="opencity-stat-box">
              <span className="opencity-stat-num">12</span>
              <div>
                <strong>Iniciativas de Ley</strong>
                <p>Broshure legislativo oficial</p>
              </div>
            </div>

            <div className="opencity-stat-box">
              <span className="opencity-stat-num">9</span>
              <div>
                <strong>Ejes Municipales</strong>
                <p>Plan Economía Familiar Luis Ortiz</p>
              </div>
            </div>

            <div className="opencity-stat-box">
              <span className="opencity-stat-num">-$0.20</span>
              <div>
                <strong>Subsidio Pescadores</strong>
                <p>Por galón de combustible artesanal</p>
              </div>
            </div>

            <div className="opencity-stat-box">
              <span className="opencity-stat-num">#1</span>
              <div>
                <strong>Casilla en Papeleta</strong>
                <p>Voto preferencial directo</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
