import { content } from '../data/content';

const links = [
  { id: 'work', n: '1', label: 'Work' },
  { id: 'projects', n: '2', label: 'Projects' },
  { id: 'about', n: '3', label: 'About' },
];

const Navbar = ({ active, theme, onToggleTheme }) => {
  const { personal } = content;

  return (
    <>
      <header className="topbar">
        <a href="#top" className="topbar-name">{personal.name}</a>
        <nav>
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              <span className="idx">[{link.n}]</span> {link.label}
            </a>
          ))}
          <button type="button" className="chip" onClick={onToggleTheme}>
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </nav>
      </header>

      <aside className="rail">
        <div>
          <a href="#top" className="rail-name">{personal.name}</a>
          <p className="rail-updated">Updated {personal.updated}</p>
          <nav>
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={active === link.id ? 'active' : undefined}
              >
                <span className="idx">[{link.n}]</span>
                {link.label}
              </a>
            ))}
          </nav>
          <button type="button" className="chip theme-rail" onClick={onToggleTheme}>
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
        <div className="rail-bottom">
          <div className="rail-social">
            <a href={personal.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <a className="mail" href={`mailto:${personal.email}`}>{personal.email}</a>
          <a className="mail" href={`tel:${personal.phone.replace(/[^\d+]/g, '')}`}>{personal.phone}</a>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
