import PortfolioContent from "../data/PortfolioContent";
import "../styles/Certifications.css";
export default function Certifications() {
  const { certifications: c } = PortfolioContent;
  return <section className="certifications" id="certifications"><div className="certifications-container">
    <div className="certifications-header"><span className="section-tag">{c.tag}</span><h2 className="section-title">{c.title} <span className="highlight">{c.titleHighlight}</span></h2></div>
    <div className="certifications-grid">{c.items.map(cert => <article key={cert.id} className="cert-card"><div className="cert-content"><p className="cert-issuer">{cert.issuer}</p><h3 className="cert-title">{cert.title}</h3></div></article>)}</div>
  </div></section>;
}
