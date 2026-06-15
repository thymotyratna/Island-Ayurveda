
import React from 'react';
import './LocationSection.css';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';

export default function LocationSection() {
  return (
    <section id="location" className="location">
      <div className="location-inner">
        <AnimatedSection className="location-visual">
          <div className="location-frame">
            <div className="location-ornament">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="48" stroke="#1A3C34" strokeWidth="0.5" opacity="0.2" />
                <circle cx="50" cy="50" r="36" stroke="#1A3C34" strokeWidth="0.5" opacity="0.2" />
                <path d="M50 10 L50 90 M10 50 L90 50" stroke="#1A3C34" strokeWidth="0.5" opacity="0.15" />
                <path d="M22 22 L78 78 M78 22 L22 78" stroke="#1A3C34" strokeWidth="0.5" opacity="0.15" />
              </svg>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection className="location-text" delay={200}>
          <span className="section-eyebrow">The Setting</span>
          <h2 className="section-title">
            Sun, Sea
            <br />
            & Sanctuary
          </h2>
          <p className="location-body">
            Nestled along the golden shores of Negombo, Island Nivasa sits mere minutes from
            the soft rumble of the Indian Ocean and just 20 minutes from Colombo International
            Airport (CMB). Here, the breeze carries salt, jasmine, and the faint ring of temple bells.
          </p>
          <p className="location-body">
            We know that healing begins the moment you land. Our team arranges complimentary
            airport transfers to carry you from baggage claim to balmy tranquility without a
            moment's worry.
          </p>
          <ul className="location-features">
            <li>Beachfront Ayurvedic treatment pavilion</li>
            <li>Complimentary Colombo Airport (CMB) transfers</li>
            <li>Lagoon-view yoga and meditation deck</li>
            <li>24/7 Ayurvedic nursing care</li>
          </ul>
        </AnimatedSection>
      </div>
    </section>
  );
}
