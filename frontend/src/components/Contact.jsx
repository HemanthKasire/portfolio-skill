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
  const [form, setForm] = useState({name: "", email: "", message: ""});
  const change = e => setForm({...form, [e.target.name]: e.target.value});
  const submit = e => {e.preventDefault(); window.location.href = emailDraft(form, contact.email);};
  return <section className="contact" id="contact"><div className="contact-container">
    <div className="contact-header"><span className="section-tag">{contact.tag}</span>
      <h2 className="section-title">{contact.title} <span className="highlight">{contact.titleHighlight}</span></h2>
      <p className="section-subtitle">{contact.description}</p></div>
    <div className="contact-grid"><div className="contact-info">
      <div className="info-item"><div><h4>Email</h4><a href={`mailto:${contact.email}`}>{contact.email}</a></div></div>
      <div className="info-item"><div><h4>Location</h4><p>{contact.location}</p></div></div>
      <div className="social-links"><h4>Connect with me</h4><div className="social-grid">
        {contact.social.map(s => <a key={s.name} className="social-link" href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>)}
      </div></div></div>
      <form className="contact-form" onSubmit={submit}>
        <div className="form-group"><label htmlFor="name">Name</label><input id="name" name="name" required value={form.name} onChange={change} autoComplete="name" placeholder={contact.form.namePlaceholder} /></div>
        <div className="form-group"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required value={form.email} onChange={change} autoComplete="email" placeholder={contact.form.emailPlaceholder} /></div>
        <div className="form-group"><label htmlFor="message">Message</label><textarea id="message" name="message" required value={form.message} onChange={change} rows="5" placeholder={contact.form.messagePlaceholder} /></div>
        <p className="section-subtitle">Opens a draft in your email app. Review it and send when ready. You can also email me directly.</p>
        <button className="submit-btn" type="submit">{contact.form.submitText}</button>
      </form>
    </div></div></section>;
}
