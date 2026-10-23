import { useEffect, useState } from 'react'
import MagneticLink from './MagneticLink'

const links = [['À propos', '#about'], ['Cours', '#courses'], ['Applications', '#projects'], ['Explorations', '#lab']]

export default function Navbar({ theme, onThemeToggle }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const close = (event) => { if (event.key === 'Escape') setOpen(false) }
    const updateScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('keydown', close)
    window.addEventListener('scroll', updateScroll, { passive: true })
    updateScroll()
    return () => { window.removeEventListener('keydown', close); window.removeEventListener('scroll', updateScroll) }
  }, [])
  return <header className={`site-header${scrolled ? ' is-compact' : ''}`}>
    <nav className="nav shell" aria-label="Navigation principale">
      <a href="#top" className="brand" onClick={() => setOpen(false)} aria-label="Chokri Bettaibi, accueil">
        <span className="brand-mark">CB</span><span>Chokri Bettaibi</span>
      </a>
      <button className="menu-toggle" type="button" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={open} aria-controls="main-menu" onClick={() => setOpen(!open)}>
        <span></span><span></span>
      </button>
      <div id="main-menu" className={`nav-links ${open ? 'is-open' : ''}`}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <button className="theme-toggle" onClick={onThemeToggle} aria-label={`Activer le thème ${theme === 'dark' ? 'clair' : 'sombre'}`} title="Changer de thème">
          {theme === 'dark' ? '☼' : '◐'} <span>{theme === 'dark' ? 'Clair' : 'Sombre'}</span>
        </button>
        <MagneticLink className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Contact <span aria-hidden="true">↗</span></MagneticLink>
      </div>
    </nav>
  </header>
}
