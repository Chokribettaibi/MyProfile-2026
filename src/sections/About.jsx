import SectionHeading from '../components/SectionHeading'
import SkillCard from '../components/SkillCard'
import { skillGroups } from '../data/profile'

export default function About() {
  return <section id="about" className="section shell">
    <div className="about-grid">
      <SectionHeading eyebrow="À propos" title="Comprendre les idées. Construire avec méthode." />
      <div className="about-copy">
        <p className="reveal">Enseignant en mathématiques, mentor et développeur, je relie la rigueur du raisonnement à la création d’outils utiles. Mon travail s’adresse aux étudiants et aux autodidactes qui veulent progresser avec des bases solides.</p>
        <p className="reveal" style={{ '--reveal-delay': '90ms' }}>Des notions d’algèbre à la réalisation d’applications web, je privilégie une démarche claire, progressive et ancrée dans la pratique.</p>
        <a className="text-link reveal" style={{ '--reveal-delay': '180ms' }} href="#courses">Découvrir les cours <span aria-hidden="true">→</span></a>
      </div>
    </div>
    <div className="skills-area">
      <div className="skills-heading reveal"><p className="eyebrow">Domaines & outils</p><p>Les sujets et technologies présentés sur le site.</p></div>
      <div className="skill-grid">
        {skillGroups.map((group, i) => <SkillCard key={group.title} group={group} index={i} />)}
      </div>
    </div>
  </section>
}
