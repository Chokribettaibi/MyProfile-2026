import { useEffect, useState } from 'react'
import DarkVeil from '../DarkVeil/DarkVeil'

const desktopSettings = {
  color: '#7565ff',
  speed: 0.32,
  flow: 0.7,
  warp: 0.12,
  variation: 0.08,
  brightness: 0.48,
  glow: 0.28,
  sheen: 0.18,
  grain: 0.012,
  opacity: 0.34,
  quality: 0.42,
  dpr: 1.25,
}

const mobileSettings = {
  ...desktopSettings,
  speed: 0.2,
  quality: 0.28,
  dpr: 1,
  mouseInteraction: false,
}

const mobileQuery = '(pointer: coarse), (max-width: 680px)'

export default function AnimatedBackground() {
  const [isCoarsePointer, setIsCoarsePointer] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia(mobileQuery).matches,
  )

  useEffect(() => {
    const query = window.matchMedia(mobileQuery)
    const update = event => setIsCoarsePointer(event.matches)
    setIsCoarsePointer(query.matches)
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  return <div className="ambient-background" aria-hidden="true">
    <DarkVeil {...(isCoarsePointer ? mobileSettings : desktopSettings)} />
  </div>
}
