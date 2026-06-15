
import React, { useState, useEffect } from 'react';
import './Navigation.css';

interface Props {
  scrolled: boolean;
}

export default function Navigation({ scrolled }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`navigation ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-open' : ''}`}>
        <div className="nav-inner">
          <a href="#hero" className="nav-logo">
            <span className="logo-text">Island Nivasa</span>
          </a>
          <button
            className="nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${menuOpen ? 'is-open' : ''}`} />
          </button>
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href="#contact" className="nav-cta">
                Inquire Now
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setMenuOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="mobile-cta" onClick={() => setMenuOpen(false)}>
                Inquire Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
