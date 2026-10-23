import { profile } from "../data/profile";
import CrystalizedBall from "./animated/Crystalized Ball/CrystalizedBall";



export default function Footer() {
  return (
    <footer className="footer">

      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <CrystalizedBall
          preset="plasma"
          color="#F25BD0"
          size={0.7}
          crackle={0.85}
          fill={0.5}
          interactive
          hoverStrength={0.7}
          strands={6}
          flares={0.65}
          glow={0.9}
          sparks={0.6}
          particleCount={15000}
          motion="rise"
          particleShape="square"
          depth={0.6}
          sway={0.5}
          twinkle={0.5}
          haze={0.7}
          dustSpeed={1}
          speed={1}
          intro
          paused={false}
        />
      </div>
      <div className="shell footer-inner">
        <a href="#top" className="brand footer-brand">
          <span className="brand-mark">CB</span>
          <span>Chokri Bettaibi</span>
        </a>
        <p>Mathématiques · Pédagogie · Développement web</p>
        <a className="back-top" href="#top">
          Retour en haut ↑
        </a>
        <span className="copyright">
          © {new Date().getFullYear()} {profile.name}
        </span>
      </div>
    </footer>
  );
}
