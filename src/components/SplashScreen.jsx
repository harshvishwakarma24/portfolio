import { useEffect, useRef, useState } from 'react'
import useTypingEffect from '../hooks/useTypingEffect'

const TYPE_TEXT = 'Welcome'

export default function SplashScreen({ onFinish }) {
  const [showRole, setShowRole] = useState(false)
  const [showCTA, setShowCTA] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const dismissed = useRef(false)
  const typedText = useTypingEffect(TYPE_TEXT, 80, () => {
    setTimeout(() => setShowRole(true), 300)
    setTimeout(() => setShowCTA(true), 1200)
  })

  useEffect(() => {
    const enterSite = () => {
      if (dismissed.current) return
      dismissed.current = true
      setIsClosing(true)
      setTimeout(() => onFinish?.(), 1000)
    }

    window.addEventListener('scroll', enterSite, { once: true })
    window.addEventListener('wheel', enterSite, { once: true })
    window.addEventListener('touchstart', enterSite, { once: true })

    return () => {
      window.removeEventListener('scroll', enterSite)
      window.removeEventListener('wheel', enterSite)
      window.removeEventListener('touchstart', enterSite)
    }
  }, [onFinish])

  return (
    <div
      id="splash-screen"
      className={`fixed inset-0 z-[200] bg-[#0b0f10] flex items-center justify-center ${
        isClosing ? 'translate-y-[-100%] opacity-0' : ''
      }`}
      style={{ transition: 'transform 1s cubic-bezier(0.76,0,0.24,1), opacity 0.8s ease' }}
    >
      <div className="absolute inset-0 hero-grid opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle,rgba(123,208,255,0.07) 0%,transparent 70%)' }} />
      <div className="text-center relative z-10 px-6">
        <div className="sec-number mb-8 tracking-[0.5em]">PORTFOLIO 2026</div>
        <h1 className="font-display text-[clamp(2.5rem,8vw,5.5rem)] font-bold tracking-[-0.04em] text-[#c9c6c5] leading-[1.05] mb-2" id="splash-name-el">
          <span id="typed-text">{typedText}</span>
          <span className="typing-cursor" id="typed-cursor" />
        </h1>
        <p className={`font-mono text-[11px] tracking-[0.5em] text-[#7bd0ff] uppercase transition-all duration-700 mt-6 ${showRole ? 'opacity-100' : 'opacity-0'}`} id="splash-role-el">
          React &nbsp;•&nbsp; Django &nbsp;•&nbsp; React Native
        </p>
        <div className={`mt-20 transition-all duration-700 bounce-gentle ${showCTA ? 'opacity-100' : 'opacity-0'}`} id="splash-cta-el">
          <button type="button" className="text-[#7bd0ff]" onClick={() => { if (!dismissed.current) { dismissed.current = true; setIsClosing(true); setTimeout(() => onFinish?.(), 1000) } }}>
            <span className="material-symbols-outlined text-4xl">keyboard_double_arrow_down</span>
            <p className="font-mono text-[9px] text-[#8e9192] mt-1 tracking-[0.3em]">SCROLL TO ENTER</p>
          </button>
        </div>
      </div>
    </div>
  )
}
