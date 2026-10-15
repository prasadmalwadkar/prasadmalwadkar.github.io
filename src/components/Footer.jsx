import { content } from '../data/content';

const Footer = () => {
  const { personal } = content;

  return (
    <footer className="foot">
      <p>Designed and built by {personal.name}</p>
      <p>
        <a href={personal.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        {' · '}
        <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        {' · '}
        <a href={`mailto:${personal.email}`}>Email</a>
        {' · '}
        <a href="/Prasad-Malwadkar-Resume.pdf" download>Resume</a>
        {' · '}
        Updated {personal.updated}
      </p>
    </footer>
  );
};

export default Footer;
