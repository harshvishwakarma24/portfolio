import { useEffect } from 'react'

export default function useScrollReveal(rootRef) {
  useEffect(() => {
    const root = rootRef?.current || document
    const elements = Array.from(root.querySelectorAll('.reveal'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.getAttribute('data-delay') || '0', 10)
            setTimeout(() => entry.target.classList.add('active'), delay)
          }
        })
      },
      { threshold: 0.08 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [rootRef])
}
