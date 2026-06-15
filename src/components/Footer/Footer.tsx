
import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">Island Nivasa</span>
            <p>An Ayurvedic care home for Sri Lankans worldwide.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Explore</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#philosophy">Philosophy</a></li>
                <li><a href="#treatments">Treatments</a></li>
                <li><a href="#location">Location</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:enquiry@islandnivasa.com">enquiry@islandnivasa.com</a></li>
                <li><a href="tel:+94711234567">+94 71 123 4567</a></li>
                <li>Negombo, Sri Lanka</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Island Nivasa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
