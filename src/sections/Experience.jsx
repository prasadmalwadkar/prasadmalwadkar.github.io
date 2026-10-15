import { useState } from 'react';
import { content } from '../data/content';

const Experience = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="block" id="work">
      <div className="block-label">
        <span className="idx">[1]</span>
        <h2>Work</h2>
      </div>
      {content.experience.map((job, index) => {
        const isOpen = open === index;
        return (
          <article className={`row ${isOpen ? 'open' : ''}`} key={`${job.company}-${job.date}`}>
            <button
              type="button"
              className="row-toggle"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <span>
                <h3>{job.role}</h3>
                <span className="row-sub">
                  {job.company}
                  {job.note ? ` · ${job.note}` : ''}
                </span>
              </span>
              <span className="row-date">{job.date}</span>
            </button>
            {isOpen && (
              <ul className="points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </article>
        );
      })}
    </section>
  );
};

export default Experience;
