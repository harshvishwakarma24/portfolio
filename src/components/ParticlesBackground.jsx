import { useRef } from 'react'
import useParticles from '../hooks/useParticles'

export default function ParticlesBackground() {
  const canvasRef = useRef(null)
  useParticles(canvasRef)

  return <canvas id="particles-canvas" ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-50" />
}
