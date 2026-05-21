import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const node = glowRef.current
    if (!node) return

    const handleMouseMove = (event) => {
      node.style.left = `${event.clientX}px`
      node.style.top = `${event.clientY}px`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return <div id="mouse-glow" ref={glowRef} className="cursor-glow" />
}
