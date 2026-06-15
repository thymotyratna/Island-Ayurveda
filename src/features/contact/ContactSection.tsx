
import React, { useState } from 'react';
import './ContactSection.css';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch('https://formsubmit.co/ajax/enquiry@islandnivasa.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          message: form.message,
        }),
      });
      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitted(false), 6000);
      }
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <AnimatedSection className="contact-header">
          <span className="section-eyebrow">Connect</span>
          <h2 className="section-title">Begin Your Journey Home</h2>
          <p className="contact-intro">
            Whether you are planning a healing stay or seeking guidance for a loved one,
            we are here to welcome you.
          </p>
        </AnimatedSection>

        <div className="contact-grid">
          <AnimatedSection className="contact-info">
            <div className="info-block">
              <span className="info-label">Email</span>
              <a href="mailto:enquiry@islandnivasa.com">enquiry@islandnivasa.com</a>
            </div>
            <div className="info-block">
              <span className="info-label">Phone</span>
              <a href="tel:+94711234567">+94 71 123 4567</a>
            </div>
            <div className="info-block">
              <span className="info-label">Location</span>
              <p>Negombo, Sri Lanka</p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="contact-form-wrapper" delay={200}>
            {submitted ? (
              <div className="form-success">
                <h3>Thank you</h3>
                <p>Your inquiry has been received. We will reach out to you shortly.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone (optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send Inquiry'}
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
