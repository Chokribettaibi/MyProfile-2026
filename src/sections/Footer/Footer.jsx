import { lazy } from "react";
import { profile } from "../../data/profile";
import {DeferredScene} from "../../components/animated";

const CrystalizedBall = lazy(
  () => import("../../components/animated/Crystalized Ball/CrystalizedBall"),
);
const GridScan = lazy(() => import("../../components/animated/GridScan/GridScan"));

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-visual" aria-hidden="true">
        <DeferredScene
          component={GridScan}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
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
      </div>

      <div className="footer-gridscan">
        <DeferredScene
          component={CrystalizedBall}
          className="footer-crystal"
          style={{ width: "100%", height: "100%" }}
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
