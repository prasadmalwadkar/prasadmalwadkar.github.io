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

const WAVE = [10, 18, 8, 22, 30, 14, 26, 12, 32, 20, 9, 24, 16, 28, 11, 19, 7, 15];
const BARS = [42, 68, 50, 84, 58, 74];

const PreviewVisual = ({ kind }) => {
  if (kind === 'office') {
    return (
      <span className="pv-desks">
        {Array.from({ length: 8 }).map((_, i) => (
          <i key={i} className={i === 3 ? 'pv-desk waiting' : 'pv-desk'} />
        ))}
      </span>
    );
  }
  if (kind === 'voice') {
    return (
      <span className="pv-voice">
        {WAVE.map((h, i) => (
          <i key={i} style={{ height: `${h}px` }} />
        ))}
      </span>
    );
  }
  if (kind === 'line') {
    return (
      <svg className="pv-svg" viewBox="0 0 100 38" preserveAspectRatio="none" aria-hidden="true">
        <polyline points="0,30 16,24 32,27 48,16 64,19 80,9 100,12" fill="none" strokeWidth="2" />
        <polyline className="pv-svg-dim" points="0,33 20,31 40,32 60,28 80,29 100,26" fill="none" strokeWidth="1.5" />
      </svg>
    );
  }
  if (kind === 'nodes') {
    return (
      <svg className="pv-svg pv-nodes" viewBox="0 0 100 38" aria-hidden="true">
        <line x1="18" y1="19" x2="46" y2="9" />
        <line x1="18" y1="19" x2="46" y2="29" />
        <line x1="46" y1="9" x2="76" y2="19" />
        <line x1="46" y1="29" x2="76" y2="19" />
        <circle cx="18" cy="19" r="5" />
        <circle cx="46" cy="9" r="4" />
        <circle cx="46" cy="29" r="4" />
        <circle cx="76" cy="19" r="5" />
      </svg>
    );
  }
  if (kind === 'ring') {
    return (
      <span className="pv-ring-wrap">
        <span className="pv-ring"><i /></span>
        <span className="pv-ring-lines"><i /><i /><i /></span>
      </span>
    );
  }
  if (kind === 'doc') {
    return (
      <span className="pv-doc">
        <i /><i /><i />
        <span className="pv-cite">Source · p.3</span>
      </span>
    );
  }
  if (kind === 'bars') {
    return (
      <span className="pv-bars">
        {BARS.map((h, i) => (
          <i key={i} style={{ height: `${h}%` }} />
        ))}
      </span>
    );
  }
  return (
    <span className="pv-rows">
      {[82, 64, 74].map((w, i) => (
        <span className="pv-row" key={i}>
          <i className="pv-dot" />
          <i className="pv-bar" style={{ width: `${w}%` }} />
          <i className="pv-dot pv-dot-dim" />
        </span>
      ))}
    </span>
  );
};

const ProjectPreview = ({ preview }) => {
  if (!preview) return null;
  return (
    <figure className="preview" aria-label={`Preview: ${preview.caption}`}>
      <span className="preview-bar">
        <span className="preview-dots"><i /><i /><i /></span>
        <span className="preview-caption">{preview.caption}</span>
      </span>
      <span className="preview-body">
        <PreviewVisual kind={preview.kind} />
      </span>
    </figure>
  );
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
            <ProjectPreview preview={project.preview} />
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
