import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  const [active, setActive] = useState('work');
  const [theme, setTheme] = useState(() => localStorage.getItem('pm-theme') || 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('pm-theme', theme);
  }, [theme]);

  useEffect(() => {
    const ids = ['work', 'projects', 'about'];
    const nodes = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.15, 0.4] }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site">
      <Navbar
        active={active}
        theme={theme}
        onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
      />
      <main className="page">
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
