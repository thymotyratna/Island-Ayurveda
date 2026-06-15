
import React from 'react';
import './DiasporaSection.css';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';

export default function DiasporaSection() {
  return (
    <section id="diaspora" className="diaspora">
      <div className="diaspora-inner">
        <AnimatedSection className="diaspora-content">
          <span className="section-eyebrow">For Sri Lankans Abroad</span>
          <h2 className="section-title diaspora-title">
            A Homecoming
            <br />
            for the Soul
          </h2>
          <blockquote className="diaspora-quote">
            "There is a particular comfort in being cared for in the language you dream in,
            surrounded by the scent of jasmine and the taste of rasa kevili you remember from childhood."
          </blockquote>
          <p className="diaspora-body">
            Whether you have made your home in London, Dubai, Toronto, or Sydney, this is your
            sanctuary to return to. Our staff speaks Sinhala and Tamil, our kitchen prepares the
            foods of your memory, and our care extends beyond therapy—it is an embrace of belonging.
          </p>
          <p className="diaspora-body">
            We understand the unique health challenges faced by the diaspora and offer specialized
            long-stay and respite programs for elders, caregivers, and anyone seeking reconnection.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
