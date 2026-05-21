import { useEffect } from 'react'

export default function useMagneticButtons(rootRef) {
  useEffect(() => {
    const root = rootRef?.current || document
    const buttons = Array.from(root.querySelectorAll('.mag-btn, button, a'))
    const listeners = buttons.map((btn) => {
      const handleMouseMove = (event) => {
        const rect = btn.getBoundingClientRect()
        const x = (event.clientX - rect.left - rect.width / 2) * 0.18
        const y = (event.clientY - rect.top - rect.height / 2) * 0.18
        btn.style.transform = `translate(${x}px, ${y}px)`
      }

      const handleMouseLeave = () => {
        btn.style.transform = 'translate(0,0)'
        btn.style.transition = 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)'
      }

      btn.addEventListener('mousemove', handleMouseMove)
      btn.addEventListener('mouseleave', handleMouseLeave)

      return { btn, handleMouseMove, handleMouseLeave }
    })

    return () => {
      listeners.forEach(({ btn, handleMouseMove, handleMouseLeave }) => {
        btn.removeEventListener('mousemove', handleMouseMove)
        btn.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [rootRef])
}
