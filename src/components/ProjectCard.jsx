import useSpotlightTilt from "../hooks/useSpotlightTilt";

export default function ProjectCard({ project, index }) {
  const tilt = useSpotlightTilt(1.6);
  return (
    <article
      ref={tilt.ref}
      onPointerMove={tilt.onPointerMove}
      onPointerLeave={tilt.onPointerLeave}
      style={{ "--reveal-delay": `${(index % 3) * 100}ms` }}
      className="project-card reveal"
    >
      <div className="project-card__top">
        <span className="project-index">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="project-kind">{project.kind}</span>
      </div>
      <h3>{project.name}</h3>
      <a
        className="text-link"
        href={project.url}
        target="_blank"
        rel="noreferrer"
      >
        Voir la démonstration <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}
