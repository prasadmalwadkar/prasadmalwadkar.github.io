import { useState } from 'react';
import { content } from '../data/content';

const filters = ['All', 'Live', 'Voice', 'Products', 'Systems'];

const matches = (project, filter) => {
  if (filter === 'Live') return Boolean(project.href) && !project.href.includes('github.com');
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
        {shown.map(({ project, index }) => {
          const body = (
            <>
              <div className="cover-top">
                <span className="idx">{String(index + 1).padStart(2, '0')}</span>
                {project.href ? (
                  <span className="pill">{project.href.includes('github.com') ? 'GitHub' : 'Live'}</span>
                ) : null}
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <span className="row-meta">{project.meta}</span>
            </>
          );

          if (!project.href) {
            return (
              <article className="cover" key={project.title}>
                {body}
              </article>
            );
          }

          return (
            <a
              className="cover"
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {body}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
