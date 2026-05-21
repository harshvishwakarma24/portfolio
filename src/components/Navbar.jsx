import { useState } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Tech', href: '#skills' },
  { label: 'AI Stack', href: '#workflow' },
]

export default function Navbar({ hidden }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleLinkClick = () => setMobileOpen(false)

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-700 ${hidden ? 'opacity-0' : 'opacity-100'}`}
      style={{ background: 'rgba(16,20,21,0.6)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(68,71,72,0.15)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center h-full">
        <div className="font-display text-xl font-bold tracking-[-0.04em] text-[#c9c6c5]">
          HARSH<span className="text-[#7bd0ff]">.</span>DEV
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="nav-link font-mono text-[11px] tracking-[0.12em] text-[#c4c7c7] hover:text-[#7bd0ff] transition-colors uppercase"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mag-btn bg-[#7bd0ff] text-[#00354a] px-6 py-2 rounded-full font-mono text-[11px] font-bold tracking-[0.1em] uppercase hover:neon-glow-strong transition-all hover:scale-105 active:scale-95"
          >
            Connect
          </a>
        </div>
        <button className="md:hidden text-[#c9c6c5]" id="mobile-menu-btn" type="button" onClick={() => setMobileOpen((prev) => !prev)}>
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden ${mobileOpen ? 'block' : 'hidden'}`}
        style={{ background: 'rgba(11,15,16,0.97)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(68,71,72,0.2)' }}
      >
        <div className="flex flex-col px-6 py-6 gap-5">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="font-mono text-[11px] tracking-[0.2em] text-[#c4c7c7] hover:text-[#7bd0ff] transition-colors uppercase"
              href={item.href}
              onClick={handleLinkClick}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-mono text-[11px] tracking-[0.2em] text-[#7bd0ff] uppercase"
            onClick={handleLinkClick}
          >
            Connect ↗
          </a>
        </div>
      </div>
    </nav>
  )
}
