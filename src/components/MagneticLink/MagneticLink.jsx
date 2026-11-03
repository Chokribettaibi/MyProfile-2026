import { useRef } from 'react'

export default function MagneticLink({ children, className = '', ...props }) {
  const linkRef = useRef(null)

  function moveTowardPointer(event) {
    const link = linkRef.current
    if (!link || event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const bounds = link.getBoundingClientRect()
    const x = event.clientX - bounds.left - bounds.width / 2
    const y = event.clientY - bounds.top - bounds.height / 2
    link.style.setProperty('--magnetic-x', `${x * 0.08}px`)
    link.style.setProperty('--magnetic-y', `${y * 0.12}px`)
  }

  function resetPosition() {
    linkRef.current?.style.setProperty('--magnetic-x', '0px')
    linkRef.current?.style.setProperty('--magnetic-y', '0px')
  }

  return <a ref={linkRef} className={`magnetic-link ${className}`} onPointerMove={moveTowardPointer} onPointerLeave={resetPosition} {...props}>{children}</a>
}
