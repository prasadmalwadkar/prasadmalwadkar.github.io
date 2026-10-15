import { useState } from 'react';
import { content } from '../data/content';

const Contact = () => {
  const { personal } = content;
  const [note, setNote] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    const from = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    if (!message) {
      setNote('Write a note first.');
      return;
    }
    const subject = encodeURIComponent(`Note from ${name || 'your site'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${from}\n\n${message}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setNote('Your email app should open with this note addressed to me.');
  };

  return (
    <section className="block" id="contact">
      <div className="block-label">
        <span className="idx">[4]</span>
        <h2>Contact</h2>
      </div>
      <p className="open-line contact-lead">
        Open to discuss new things. Write anything — it goes to {personal.email}.
      </p>
      <form className="contact-form" onSubmit={onSubmit}>
        <label>
          Name
          <input name="name" type="text" autoComplete="name" />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" />
        </label>
        <label>
          Note
          <textarea name="message" rows={5} required placeholder="What do you want to talk about?" />
        </label>
        <button type="submit" className="chip on">Send email</button>
        {note ? <p className="form-note">{note}</p> : null}
      </form>
      <div className="hero-meta contact-links">
        <a href={personal.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={`tel:${personal.phone.replace(/[^\d+]/g, '')}`}>{personal.phone}</a>
        <a href="/Prasad-Malwadkar-Resume.pdf" download>Resume</a>
      </div>
    </section>
  );
};

export default Contact;
