
import React from 'react';
import './TreatmentsSection.css';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';

const treatments = [
  {
    title: 'Panchakarma',
    desc: 'The classical five-fold detoxification therapy to purify the body and restore systemic balance.',
  },
  {
    title: 'Abhyanga',
    desc: 'A rhythmic full-body massage with warm herbal oils to improve circulation and calm the nervous system.',
  },
  {
    title: 'Shirodhara',
    desc: 'A steady stream of medicated oil poured across the forehead to profoundly relax the mind.',
  },
  {
    title: 'Herbal Remedies',
    desc: 'Custom-prepared decoctions, powders, and oils sourced from our own organic garden.',
  },
  {
    title: 'Yoga & Pranayama',
    desc: 'Daily guided sessions adapted to your constitution and recovery goals.',
  },
  {
    title: 'Sattvic Cuisine',
    desc: 'Wholesome, seasonal meals prepared according to Ayurvedic nutritional science.',
  },
];

export default function TreatmentsSection() {
  return (
    <section id="treatments" className="treatments">
      <div className="treatments-inner">
        <AnimatedSection className="treatments-header">
          <span className="section-eyebrow">Therapies</span>
          <h2 className="section-title">Curated Healing Programs</h2>
        </AnimatedSection>
        <div className="treatments-grid">
          {treatments.map((t, i) => (
            <AnimatedSection key={t.title} className="treatment-card" delay={i * 100}>
              <span className="treatment-number">0{i + 1}</span>
              <h3 className="treatment-title">{t.title}</h3>
              <p className="treatment-desc">{t.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
