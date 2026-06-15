
import React, { useEffect, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import HeroSection from './features/hero/HeroSection';
import AboutSection from './features/about/AboutSection';
import DoshasSection from './features/doshas/DoshasSection';
import TreatmentsSection from './features/treatments/TreatmentsSection';
import DiasporaSection from './features/diaspora/DiasporaSection';
import LocationSection from './features/location/LocationSection';
import TestimonialsSection from './features/testimonials/TestimonialsSection';
import ContactSection from './features/contact/ContactSection';
import Footer from './components/Footer/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Navigation scrolled={scrolled} />
      <main>
        <HeroSection />
        <AboutSection />
        <DoshasSection />
        <TreatmentsSection />
        <DiasporaSection />
        <LocationSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
