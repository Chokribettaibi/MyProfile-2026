import { profile } from "../data/profile";
import portrait from "../assets/portrait-1.webp";
import MagneticLink from "../components/MagneticLink";
import TechText from "../components/TechText";
import useSpotlightTilt from "../hooks/useSpotlightTilt";
import Lanyard from "../components/Lanyard/Lanyard";

const techTextSettings = {
  fontSize: 150,
  fontWeight: 400,
  letterSpacing: -0.045,
  color: "currentColor",
  accentColor: "var(--accent-strong)",
  align: "left",
  reach: 86,
  softness: 0.72,
  dashLength: 4,
  dashGap: 3,
  strokeWidth: 1.25,
  reveal: "letter",
  specks: 0,
  selection: false,
  labels: false,
  draggable: false,
  bounce: 0.16,
  sweep: true,
  speed: 0.32,
  clickKick: false,
  intro: "none",
};

export default function Hero() {
  const cubeTilt = useSpotlightTilt(4);
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">
          <span className="status-dot"></span>
          {profile.role}
        </p>
        <h1 id="hero-title" className="hero-title">
          <span className="visually-hidden">
            Mathématiques claires, code moderne, progression concrète.
          </span>
          <span className="hero-title-art" aria-hidden="true">
            <span className="hero-title-line">
              <TechText text="Mathématiques claires," {...techTextSettings} />
            </span>
            <span className="hero-title-line hero-title-line-em">
              <TechText
                text="code moderne,"
                {...techTextSettings}
                letterSpacing={-0.025}
              />
            </span>
            <span className="hero-title-line">
              <TechText text="progression concrète." {...techTextSettings} />
            </span>
          </span>
        </h1>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-actions">
          <MagneticLink className="button button-primary" href="#projects">
            <span>Voir les applications</span>
            <span aria-hidden="true">↗</span>
          </MagneticLink>
          <MagneticLink className="button button-quiet" href="#contact">
            <span>Me contacter</span>
            <span aria-hidden="true">→</span>
          </MagneticLink>
          <MagneticLink
            className="button button-quiet hero-cv"
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
          >
            <span>Consulter le CV</span>
            <span aria-hidden="true">↗</span>
          </MagneticLink>
        </div>
        <div className="hero-meta">
          <span>Mathématiques appliquées & web</span>
          <span className="meta-divider" aria-hidden="true"></span>
          <span>Approche pratique et progressive</span>
        </div>
      </div>
      <div style={{ width: "100%", height: "600px" }}>
        <Lanyard
          frontImage="/portrait-1.webp"
          backImage="/1760789324338.jpg"
          strapImage="/band.png"
          imageFit="cover"
          cardColor="#ffffff"
          orientation="portrait"
          finish="glossy"
          cornerRadius={0.3}
          size={0.6}
          anchor="center"
          strapLength={0.5}
          strapColor="#111111"
          strapWidth={0.65}
          metal="silver"
          gravity={1}
          damping={0.5}
          elasticity={0.5}
          breeze={0.5}
          interactive
          intro
        />
      </div>

      <a className="scroll-cue" href="#about">
        <span className="scroll-line"></span>Défiler
      </a>
    </section>
  );
}
