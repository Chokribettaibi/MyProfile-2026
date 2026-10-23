import SectionHeading from "../components/SectionHeading";
import { courses } from "../data/projects";
import { profile } from "../data/profile";

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
