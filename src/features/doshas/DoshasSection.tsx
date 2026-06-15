
import React from 'react';
import './DoshasSection.css';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';

const doshas = [
  {
    name: 'Vata',
    sub: 'Air & Space',
    desc: 'Governed by movement and creativity. Our calming oils, warm nourishment, and grounding therapies restore stillness to an overactive mind.',
    color: '#8FA89B',
  },
  {
    name: 'Pitta',
    sub: 'Fire & Water',
    desc: 'The energy of digestion and intellect. Cooling treatments, serene environments, and balancing diets soothe intensity and restore clarity.',
    color: '#C07756',
  },
  {
    name: 'Kapha',
    sub: 'Earth & Water',
    desc: 'The principle of structure and stability. Invigorating massages, herbal steams, and active recovery awaken vitality and lightness.',
    color: '#D4A056',
  },
];

export default function DoshasSection() {
  return (
    <section id="philosophy" className="doshas">
      <div className="doshas-inner">
        <AnimatedSection className="doshas-header">
          <span className="section-eyebrow">The Foundation</span>
          <h2 className="section-title">Your Constitution, Your Cure</h2>
          <p className="doshas-intro">
            Ayurveda teaches that understanding your unique dosha is the first step
            toward lasting wellness. Our programs are personalized to bring your
            natural state back into equilibrium.
          </p>
        </AnimatedSection>
        <div className="doshas-grid">
          {doshas.map((d, i) => (
            <AnimatedSection key={d.name} className="dosha-card" delay={i * 150}>
              <div className="dosha-accent" style={{ background: d.color }} />
              <h3 className="dosha-name">{d.name}</h3>
              <span className="dosha-sub">{d.sub}</span>
              <p className="dosha-desc">{d.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
