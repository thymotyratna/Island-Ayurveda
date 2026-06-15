
import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>
      <div className="hero-content">
        <span className="hero-eyebrow">Ayurveda · Sri Lanka · Wellness</span>
        <h1 className="hero-title">
          <span className="hero-title-main">Return to Balance</span>
          <span className="hero-title-sub">සමතාවට පිවිසෙන්න</span>
        </h1>
        <p className="hero-description">
          A world-class Ayurvedic care home on the golden shores of Negombo,
          crafted for those who seek authentic healing away from home — just
          minutes from the airport.
        </p>
        <div className="hero-actions">
          <a href="#about" className="btn btn-primary">Discover the Sanctuary</a>
          <a href="#contact" className="btn btn-secondary">Enquire Now</a>
        </div>
      </div>
      <div className="hero-scroll">
        <span className="scroll-line" />
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  );
}
