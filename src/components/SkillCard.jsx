import useSpotlightTilt from '../hooks/useSpotlightTilt'

export default function SkillCard({ group, index }) {
  const tilt = useSpotlightTilt(1.1)
  return <article ref={tilt.ref} onPointerMove={tilt.onPointerMove} onPointerLeave={tilt.onPointerLeave} style={{ '--reveal-delay': `${(index % 6) * 90}ms` }} className={`skill-group glass-card reveal skill-group-${index + 1}`}>
    <span className="skill-number">0{index + 1}</span>
    <h3>{group.title}</h3>
    <ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul>
  </article>
}
