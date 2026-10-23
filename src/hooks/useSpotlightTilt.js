import { useRef } from 'react'

export default function useSpotlightTilt(maxTilt = 2.2) {
  const ref = useRef(null)

  function handlePointerMove(event) {
    const card = ref.current
    if (!card || event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const bounds = card.getBoundingClientRect()
    const x = event.clientX - bounds.left
    const y = event.clientY - bounds.top
    const rotateY = ((x / bounds.width) - 0.5) * maxTilt * 2
    const rotateX = (0.5 - (y / bounds.height)) * maxTilt * 2
    card.style.setProperty('--spot-x', `${x}px`)
    card.style.setProperty('--spot-y', `${y}px`)
    card.style.setProperty('--tilt-x', `${rotateY}deg`)
    card.style.setProperty('--tilt-y', `${rotateX}deg`)
    card.classList.add('is-pointed')
  }

  function handlePointerLeave() {
    const card = ref.current
    if (!card) return
    card.style.setProperty('--tilt-x', '0deg')
    card.style.setProperty('--tilt-y', '0deg')
    card.classList.remove('is-pointed')
  }

  return { ref, onPointerMove: handlePointerMove, onPointerLeave: handlePointerLeave }
}
