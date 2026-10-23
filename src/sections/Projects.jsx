import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import Lanyard from "../components/Lanyard/Lanyard";

export default function Projects() {
  return (
    <section id="projects" className="section shell projects-section">
      <div className="projects-heading">
        <SectionHeading
          eyebrow="Applications"
          title="Des projets concrets, orientés usage."
          description="Applications et outils publiés, issus des projets présentés sur le site."
        />
        <span
          className="project-count reveal"
          style={{ "--reveal-delay": "180ms" }}
        >
          {String(projects.length).padStart(2, "0")} <small>projets</small>
        </span>
      </div>
      <div className="project-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
