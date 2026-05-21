import { useEffect, useState } from 'react'

export default function useTypingEffect(
  text,
  speed = 80,
  onComplete
) {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let index = 0

    // Reset text when effect starts
    setDisplayedText('')

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1))

      index++

      // Stop when finished
      if (index >= text.length) {
        clearInterval(interval)

        // Run callback once completed
        if (onComplete) {
          onComplete()
        }
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return displayedText
}