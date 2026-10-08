import { motion } from "framer-motion";
import { useState } from "react";
import PortfolioContent from "../data/PortfolioContent";
import "../styles/Contact.css";

export function emailDraft({ name, email, message }, recipient) {
  const subject = `Portfolio enquiry from ${name.trim()}`;
  const body = `${message.trim()}\n\nFrom: ${name.trim()}\nReply to: ${email.trim()}`;
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
export default function Contact() {
  const { contact } = PortfolioContent;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const handleChange = (event) => setFormData({ ...formData, [event.target.name]: event.target.value });
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = emailDraft(formData, contact.email);
  };

  const EmailIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );

  const LocationIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );

  const AvailabilityIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );

  const SendIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  );

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="contact-header"
        >
          <span className="section-tag">{contact.tag}</span>
          <h2 className="section-title">
            {contact.title}{" "}
            <span className="highlight">{contact.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{contact.description}</p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <div className="info-item">
              <span className="info-icon"><EmailIcon /></span>
              <div>
                <h4>Email</h4>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon"><LocationIcon /></span>
              <div>
                <h4>Location</h4>
                <p>{contact.location}</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon"><AvailabilityIcon /></span>
              <div>
                <h4>Current role</h4>
                <p>Software Development Engineer at Osprosys</p>
              </div>
            </div>

            <div className="social-links">
              <h4>Connect with me</h4>
              <div className="social-grid">
                {contact.social.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.1, y: -3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="social-icon"
                      width="24"
                      height="24"
                    />
                    <span className="social-name">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={contact.form.namePlaceholder}
                required
                autoComplete="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={contact.form.emailPlaceholder}
                required
                autoComplete="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={contact.form.messagePlaceholder}
                rows="5"
                required
              />
            </div>

            <p className="section-subtitle">Opens a draft in your email app. Review it and send when ready. You can also email me directly.</p>
            <button type="submit" className="submit-btn">
              <SendIcon />
              {contact.form.submitText}
              <span className="btn-glow-effect" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
