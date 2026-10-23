import { useState } from 'react'
import { profile } from '../data/profile'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); window.setTimeout(() => setCopied(false), 1800) }
    catch { window.location.href = `mailto:${profile.email}` }
  }
  return <section id="contact" className="contact-section">
    <div className="shell contact-layout">
      <div className="contact-intro"><p className="eyebrow reveal">Contact</p><h2 className="reveal" style={{ '--reveal-delay': '70ms' }}>Parlons d’un cours,<br />d’un accompagnement<br />ou d’un projet.</h2><p className="reveal" style={{ '--reveal-delay': '140ms' }}>Disponible pour l’enseignement, le mentorat et la création de supports pédagogiques ou d’applications web.</p></div>
      <div className="contact-details reveal" style={{ '--reveal-delay': '120ms' }}>
        <p className="eyebrow">Entrer en contact</p>
        <div className="contact-row"><span>Email</span><div><a href={`mailto:${profile.email}`}>{profile.email}</a><button className="copy-button" type="button" onClick={copyEmail}>{copied ? 'Copié' : 'Copier'}</button></div></div>
        <div className="contact-row"><span>Téléphone</span><a href={`tel:${profile.phoneLink}`}>{profile.phone}</a></div>
        <div className="contact-row"><span>CV</span><a href={profile.cv} target="_blank" rel="noreferrer">CV personnel <span aria-hidden="true">↗</span></a></div>
        <div className="social-links"><a href={profile.facebook} target="_blank" rel="noreferrer">Facebook ↗</a><a href={profile.whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a></div>
      </div>
    </div>
  </section>
}
