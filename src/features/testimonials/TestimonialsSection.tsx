
import React from 'react';
import './TestimonialsSection.css';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';

const quotes = [
  {
    text: 'After twenty years in Melbourne, I finally found a place that understood not just my back pain, but my need to hear my mother tongue over morning herbal tea.',
    author: 'Lakmali P.',
    role: 'Guest from Australia',
  },
  {
    text: 'My parents stayed for a month. The care was extraordinary—professional, deeply kind, and unmistakably Sri Lankan in its warmth.',
    author: 'Dr. Rajeev S.',
    role: 'Son of guests, UK',
  },
  {
    text: 'Panchakarma here changed my relationship with my own body. The setting is unreal, but the sincerity of the vaidyas is what stays with you.',
    author: 'Anouk D.',
    role: 'Guest from France',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-inner">
        <AnimatedSection className="testimonials-header">
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="section-title">Words from Our Guests</h2>
        </AnimatedSection>
        <div className="testimonials-grid">
          {quotes.map((q, i) => (
            <AnimatedSection key={i} className="testimonial-card" delay={i * 150}>
              <p className="testimonial-text">"{q.text}"</p>
              <div className="testimonial-author">
                <strong>{q.author}</strong>
                <span>{q.role}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
