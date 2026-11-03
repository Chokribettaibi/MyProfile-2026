import { lazy } from "react";
import { SectionHeading , DeferredScene } from "../../components";
import { courses } from "../../data/projects";
import { profile } from "../../data/profile";
// import DeferredScene from "../../components/DeferredScene";
const GridScan = lazy(() => import("../../components/animated/GridScan/GridScan"));

const resolveResource = (path) =>
  path.startsWith("http") ? path : `${profile.domain}${path}`;

export default function Courses() {
  return (
    <section id="courses" className="section section-tinted">
      <div className="shell">
        <SectionHeading
          eyebrow="Cours & ateliers"
          title="Des ressources pour progresser, étape par étape."
          description="Cours et supports regroupés autour des mathématiques, de la logique et du développement web."
        />
      <DeferredScene
            component={GridScan}
            style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
            linesColor="#716b7d"
            scanColor="#7dd3fc"
            cells={9}
            depth={2.6}
            scanDuration={3.4}
            scanDelay={1.2}
            lineThickness={0.8}
            depthFade={0.8}
            shading={0.65}
            reflection={0.2}
            scanWidth={0.65}
            trail={0.3}
            glow={0.5}
            points
            parallax={0}
            autoScan
            interactive={false}
            enableWebcam={false}
            intro
            lightMode={false}
          />
        <div className="course-grid">
          {courses.map((course, i) => (
            <article
              className="course-card reveal"
              style={{ "--reveal-delay": `${i * 100}ms` }}
              key={course.title}
            >
              <div className="course-card-top">
                <span>0{i + 1}</span>
                <span className="course-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="resource-links">
                {course.links.map(([label, url]) => (
                  <a
                    key={label}
                    href={resolveResource(url)}
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
