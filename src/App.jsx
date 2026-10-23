import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Courses from './sections/Courses'
import Projects from './sections/Projects'
import Lab from './sections/Lab'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/animated/animatedBackground/AnimatedBackground'
import GlowCursorLayer from './components/GlowCursorLayer'
import { profile } from './data/profile'

function getInitialTheme() {
  const saved = localStorage.getItem('portfolio-theme')
  return saved || 'dark'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
    window.__portfolioReady = true
    window.clearTimeout(window.__portfolioStartupTimer)
  }, [theme])
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    }), { threshold: 0.16, rootMargin: '0px 0px -4% 0px' })
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    const onPointerMove = event => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`)
        document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`)
      })
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => { cancelAnimationFrame(frame); window.removeEventListener('pointermove', onPointerMove) }
  }, [])
  return <>
    <AnimatedBackground />

    <GlowCursorLayer theme={theme} />

    <div className="site-content">
      <a className="skip-link" href="#main">Aller au contenu</a>
      <Navbar theme={theme} onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main id="main"><div id="top"><Hero /></div><About /><Courses /><Projects /><Lab /><Contact /></main>
      <Footer />
      <a className="floating-mail" href={`mailto:${profile.email}`} aria-label="Envoyer un e-mail">✉</a>
    </div>
  </>
}
