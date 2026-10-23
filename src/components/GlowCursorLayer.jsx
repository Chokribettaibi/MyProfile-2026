import { useEffect, useState } from 'react'
import GlowCursor from './GlowCursor'

const finePointerQuery = '(pointer: fine)'
const coarsePointerQuery = '(pointer: coarse)'
const reducedMotionQuery = '(prefers-reduced-motion: reduce)'

export default function GlowCursorLayer({ theme = 'dark' }) {
  const [isCoarsePointer, setIsCoarsePointer] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia(coarsePointerQuery).matches,
  )
  const [enabled, setEnabled] = useState(() => typeof window !== 'undefined'
    && (window.matchMedia(finePointerQuery).matches || window.matchMedia(coarsePointerQuery).matches)
    && !window.matchMedia(reducedMotionQuery).matches)

  useEffect(() => {
    const finePointer = window.matchMedia(finePointerQuery)
    const coarsePointer = window.matchMedia(coarsePointerQuery)
    const reducedMotion = window.matchMedia(reducedMotionQuery)
    const update = () => setEnabled(
      !reducedMotion.matches && (finePointer.matches || coarsePointer.matches || sawMousePointer),
    )
    let sawMousePointer = false
    setIsCoarsePointer(coarsePointer.matches)
    const onPointerMove = event => {
      if (event.pointerType !== 'mouse' || reducedMotion.matches || sawMousePointer) return
      sawMousePointer = true
      update()
    }
    update()
    finePointer.addEventListener('change', update)
    coarsePointer.addEventListener('change', update)
    reducedMotion.addEventListener('change', update)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => {
      finePointer.removeEventListener('change', update)
      coarsePointer.removeEventListener('change', update)
      reducedMotion.removeEventListener('change', update)
      window.removeEventListener('pointermove', onPointerMove)
    }
  }, [])

  if (!enabled) return null

  return <GlowCursor
    className="site-glow-cursor"
    color={theme === 'light' ? '#6552ce' : '#baa7ff'}
    secondaryColor={theme === 'light' ? '#9281f7' : '#7565ff'}
    intensity={1.15}
    trailWidth={3.4}
    linger={1.35}
    glow={1.1}
    hotspot={0.7}
    followSpeed={0.55}
    clickBurst
    quality={isCoarsePointer ? 'low' : 'medium'}
    theme={theme}
    maxDevicePixelRatio={isCoarsePointer ? 1 : 1.5}
    {...(isCoarsePointer ? {
      intensity: 0.95,
      trailWidth: 3,
      linger: 1.2,
      glow: 1,
      hotspot: 0.62,
      followSpeed: 0.82,
    } : {})}
  />
}
