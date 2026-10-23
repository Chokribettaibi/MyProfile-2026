import SectionHeading from "../components/SectionHeading";
import { labs } from "../data/projects";
import { profile } from "../data/profile";
import WebThreads from "../components/animated/WebThreads/WebThreads";

export default function Lab() {
  return (
    <section id="lab" className="section section-tinted lab-section">
      <div style={{ width: "100%", height: "600px", position: "absolute" }}>
        <WebThreads
          colors={["#5227FF", "#FF9FFC"]}
          coreColor="#FFFFFF"
          threadCount={6}
          spread={0.18}
        />
      </div>
      <div className="shell">
        <SectionHeading
          eyebrow="Explorations"
          title="Animations, interfaces & expérimentations."
          description="Une sélection de ressources visuelles et de démonstrations créatives du site."
        />
        <div className="lab-grid">
          {labs.map((lab, i) => (
            <article
              className="lab-card reveal"
              style={{ "--reveal-delay": `${i * 100}ms` }}
              key={lab.title}
            >
              <div className="lab-card-title">
                <spa>0{i + 1}</spa>
                <h3>{lab.title}</h3>
              </div>
              <div className="resource-links">
                {lab.links.map(([label, path]) => (
                  <a
                    key={label}
                    href={`${profile.domain}${path}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {label}
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
