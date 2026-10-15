import { content } from '../data/content';

const Education = () => (
  <section className="block" id="about">
    <div className="block-label">
      <span className="idx">[3]</span>
      <h2>About</h2>
    </div>
    <div className="about-grid">
      <div>
        {content.education.map((edu) => (
          <article className="edu" key={edu.school}>
            <div className="row-top">
              <h3>{edu.school}</h3>
              <span className="row-date">{edu.date}</span>
            </div>
            <p>{edu.degree}</p>
            <p>{edu.coursework}</p>
          </article>
        ))}
      </div>
      <dl>
        {content.skills.map((group) => (
          <div className="skill" key={group.label}>
            <dt>{group.label}</dt>
            <dd>{group.items}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Education;
