import React, { useState, useEffect } from 'react';
import { heroSlides, heroFeatureCards } from '../data/partyData';
import { ChevronLeft, ChevronRight, ArrowRight, Calendar, FileCheck, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';

const iconMap = {
  Calendar: Calendar,
  FileCheck: FileCheck,
  MessageSquare: MessageSquare,
  ShieldCheck: ShieldCheck
};

export default function HeroSlider({ onOpenAffiliation, onOpenManifesto, onOpenDonation }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleCta = (actionType) => {
    if (actionType === 'candidate') {
      const el = document.getElementById('candidata');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (actionType === 'affiliation') {
      onOpenAffiliation();
    } else if (actionType === 'blueprint') {
      const el = document.getElementById('blueprint');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (actionType === 'manifesto') {
      onOpenManifesto();
    } else if (actionType === 'donate') {
      onOpenDonation();
    }
  };

  const handleFeatureClick = (action) => {
    if (action === 'events') {
      const el = document.getElementById('eventos');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'manifesto') {
      onOpenManifesto();
    } else if (action === 'contact') {
      const el = document.getElementById('buzon');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'transparency') {
      const el = document.getElementById('servicios');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slide = heroSlides[currentSlide];

  return (
    <section style={{ position: 'relative' }}>
      {/* Hero Banner / Slider */}
      <div className="hero-slider-wrap">
        <div className="slide-bg-container">
          <img
            key={slide.id}
            src={slide.image}
            alt={slide.title}
            className="slide-img"
          />
          <div className="slide-gradient-overlay"></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="hero-slider-content">
            <div className="slide-tag">
              <Sparkles size={16} />
              <span>{slide.tag}</span>
            </div>

            <h1 className="slide-title">
              {slide.title}
              <span>{slide.highlight}</span>
            </h1>

            <p className="slide-lead">{slide.lead}</p>

            <div className="slide-cta-row">
              <button
                onClick={() => handleCta(slide.primaryAction)}
                className="btn btn-primary"
              >
                <span>{slide.primaryCta}</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => handleCta(slide.secondaryAction)}
                className="btn btn-outline-light"
              >
                <span>{slide.secondaryCta}</span>
              </button>
            </div>

            {/* Slider Dots */}
            <div className="slider-dots">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`slider-dot ${idx === currentSlide ? 'active' : ''}`}
                  aria-label={`Ir al slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Next / Prev Controls */}
        <div className="slider-arrows">
          <button onClick={prevSlide} className="slider-arrow-btn" aria-label="Slide anterior">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="slider-arrow-btn" aria-label="Slide siguiente">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* OpenCity 4 Overlapping Feature Cards */}
      <div className="container hero-features-container">
        <div className="feature-cards-grid">
          {heroFeatureCards.map((feat) => {
            const Icon = iconMap[feat.icon] || Calendar;
            return (
              <div key={feat.id} className="feature-box">
                <div className="feature-icon-wrap">
                  <Icon size={26} />
                </div>
                <h3 className="feature-title">{feat.title}</h3>
                <p className="feature-desc">{feat.desc}</p>
                <button
                  onClick={() => handleFeatureClick(feat.action)}
                  className="feature-link-btn"
                >
                  <span>{feat.linkText}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
