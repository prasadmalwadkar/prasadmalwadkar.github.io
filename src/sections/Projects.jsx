import { useState } from 'react';
import { content } from '../data/content';

const filters = ['All', 'Live', 'Voice', 'Products', 'Systems'];

const matches = (project, filter) => {
  if (filter === 'Live') return Boolean(project.href);
  if (filter === 'Voice') return project.tag === 'voice';
  if (filter === 'Products') return project.tag === 'product';
  if (filter === 'Systems') return project.tag === 'systems';
  return true;
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [view, setView] = useState('grid');
  const shown = content.projects
    .map((project, index) => ({ project, index }))
    .filter(({ project }) => matches(project, filter));

  return (
    <section className="block" id="projects">
      <div className="block-label">
        <span className="idx">[2]</span>
        <h2>Projects</h2>
      </div>
      <div className="controls">
        <div className="chips" role="group" aria-label="Filter projects">
          {filters.map((name) => (
            <button
              key={name}
              type="button"
              className={filter === name ? 'chip on' : 'chip'}
              aria-pressed={filter === name}
              onClick={() => setFilter(name)}
            >
              {name}
            </button>
          ))}
        </div>
        <div className="chips" role="group" aria-label="Project layout">
          <button
            type="button"
            className={view === 'grid' ? 'chip on' : 'chip'}
            aria-pressed={view === 'grid'}
            onClick={() => setView('grid')}
          >
            Grid
          </button>
          <button
            type="button"
            className={view === 'list' ? 'chip on' : 'chip'}
            aria-pressed={view === 'list'}
            onClick={() => setView('list')}
          >
            List
          </button>
        </div>
      </div>
      <div className={view === 'list' ? 'covers list' : 'covers'}>
        {shown.map(({ project, index }) => (
          <article className="cover" key={project.title}>
            <div className="cover-top">
              <span className="idx">{String(index + 1).padStart(2, '0')}</span>
              <span className="cover-pills">
                {project.href ? <span className="pill">Live</span> : null}
                {project.github ? <span className="pill pill-ghost">GitHub</span> : null}
              </span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <span className="row-meta">{project.meta}</span>
            {project.href || project.github ? (
              <span className="cover-links">
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noopener noreferrer">
                    Live demo ↗
                  </a>
                ) : null}
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub ↗
                  </a>
                ) : null}
              </span>
            ) : null}
          </article>
        ))}
      </div>
      <p className="projects-more">
        More on{' '}
        <a href={content.personal.github} target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
      </p>
    </section>
  );
};

export default Projects;
