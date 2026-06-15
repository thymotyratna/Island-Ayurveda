
import React from 'react';
import './AboutSection.css';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';

export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <AnimatedSection className="about-text">
          <span className="section-eyebrow">Our Philosophy</span>
          <h2 className="section-title">
            Where Ancient Science
            <br />
            Meets Modern Care
          </h2>
          <p className="about-body">
            Rooted in the timeless wisdom of Ayurveda, our care home is designed as
            a living sanctuary. Here, healing is not merely a treatment—it is a
            restoration of harmony between body, mind, and the rhythms of nature.
          </p>
          <p className="about-body">
            Every therapy is administered by experienced vaidyas and caregivers
            trained in classical Sri Lankan Ayurvedic traditions, supported by
            comfortable accommodations and compassionate hospitality.
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years of Practice</span>
            </div>
            <div className="stat">
              <span className="stat-number">12</span>
              <span className="stat-label">Private Suites</span>
            </div>
            <div className="stat">
              <span className="stat-number">5</span>
              <span className="stat-label">Acres of Gardens</span>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection className="about-visual" delay={200}>
          <div className="about-visual-frame">
            <svg
              viewBox="0 0 200 200"
              className="lotus-svg"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 180 C60 140, 20 100, 20 60 C20 30, 50 20, 100 20 C150 20, 180 30, 180 60 C180 100, 140 140, 100 180Z"
                fill="none"
                stroke="#C07756"
                strokeWidth="0.5"
                opacity="0.3"
              />
              <path
                d="M100 160 C70 130, 40 100, 40 70 C40 45, 65 35, 100 35 C135 35, 160 45, 160 70 C160 100, 130 130, 100 160Z"
                fill="none"
                stroke="#D4A056"
                strokeWidth="0.5"
                opacity="0.4"
              />
              <path
                d="M100 40 Q80 80 60 110 Q90 100 100 130 Q110 100 140 110 Q120 80 100 40"
                fill="#1A3C34"
                opacity="0.9"
              />
              <path
                d="M100 60 Q85 90 75 115 Q95 105 100 125 Q105 105 125 115 Q115 90 100 60"
                fill="#2A5A4E"
                opacity="0.8"
              />
              <circle cx="100" cy="100" r="4" fill="#D4A056" />
            </svg>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
