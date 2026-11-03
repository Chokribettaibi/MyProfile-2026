import { Suspense, useEffect, useRef, useState } from 'react'

export default function DeferredScene({
  component: Scene,
  className,
  style,
  fallback = null,
  loadOnIdle = false,
  ...sceneProps
}) {
  const containerRef = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    let cancelled = false
    let cancelScheduledLoad = () => {}

    const scheduleLoad = () => {
      if (!loadOnIdle) {
        setShouldLoad(true)
        return
      }

      const load = () => {
        if (!cancelled) setShouldLoad(true)
      }

      if (typeof window.requestIdleCallback === 'function') {
        const idleId = window.requestIdleCallback(load, { timeout: 1200 })
        cancelScheduledLoad = () => window.cancelIdleCallback(idleId)
      } else {
        const timeoutId = window.setTimeout(load, 250)
        cancelScheduledLoad = () => window.clearTimeout(timeoutId)
      }
    }

    const container = containerRef.current
    if (!container || !('IntersectionObserver' in window)) {
      scheduleLoad()
    } else {
      const observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          observer.disconnect()
          scheduleLoad()
        }
      }, { rootMargin: '240px' })
      observer.observe(container)
      cancelScheduledLoad = () => observer.disconnect()
    }

    return () => {
      cancelled = true
      cancelScheduledLoad()
    }
  }, [loadOnIdle])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: 'relative', ...style }}
    >
      {shouldLoad
        ? <Suspense fallback={fallback}><Scene {...sceneProps} /></Suspense>
        : fallback}
    </div>
  )
}
