import PortfolioContent from "../data/PortfolioContent";
import "../styles/Experience.css";

export default function Experience() {
  const { experience, education } = PortfolioContent;
  return <section className="experience" id="experience">
    <div className="experience-container">
      <span className="section-tag">Career & Education</span>
      <h2 className="section-title">My <span className="highlight">Experience</span></h2>
      <div className="experience-list">{experience.map(job => <article className="experience-card" key={job.company}>
        <p className="experience-date">{job.dates}</p><h3>{job.role}</h3><h4>{job.company}</h4>
        <ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul>
      </article>)}</div>
      <article className="experience-card education-card"><span className="section-tag">Education</span>
        <h3>{education.degree}</h3><p>{education.college}</p><p>{education.detail}</p>
      </article>
    </div>
  </section>;
}
