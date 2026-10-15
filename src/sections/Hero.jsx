import { useState } from 'react';
import { content } from '../data/content';

const Hero = () => {
  const { personal } = content;
  const [copied, setCopied] = useState(false);
  const [photo, setPhoto] = useState(true);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <header className="hero" id="top">
      <div className="lanyard">
        <div className="strap" aria-hidden="true">Prasad Malwadkar</div>
        <div className="clip" aria-hidden="true" />
        <div className="pass">
          <div className="mark">
            {photo && (
              <img src="/portrait.jpg" alt="" onError={() => setPhoto(false)} />
            )}
            <span>PM</span>
          </div>
          <h1>
            Prasad
            <br />
            Malwadkar
          </h1>
          <p className="pass-role">Founding engineer</p>
          <p className="pass-co">Flair Labs · Seattle</p>
        </div>
      </div>

      <p className="hero-role">
        I build voice products and the systems behind them.
      </p>
      <p className="open-line">
        <a href="#contact">Open to chat</a>
        <span> — new work, voice systems, whatever you are building.</span>
      </p>
      <div className="hero-meta">
        <span>{personal.location}</span>
        <a href={`mailto:${personal.email}`}>{personal.email}</a>
        <button type="button" className="copy" onClick={copyEmail}>
          {copied ? 'Copied' : 'Copy'}
        </button>
        <a href={personal.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={`tel:${personal.phone.replace(/[^\d+]/g, '')}`}>{personal.phone}</a>
        <a href="/Prasad-Malwadkar-Resume.pdf" download>Resume</a>
      </div>
    </header>
  );
};

export default Hero;
