export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(68,71,72,0.15)', background: 'rgba(11,15,16,0.7)' }} className="py-12">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-display text-2xl font-bold tracking-[-0.04em] text-[#c9c6c5]">
          HARSH<span className="text-[#7bd0ff]">.</span>DEV
        </div>
        <p className="font-mono text-[10px] tracking-[0.2em] text-[#8e9192] uppercase">
          © 2026 Harsh Vishwakarma · Full Stack Developer & Problem Solver
        </p>
        <div className="flex gap-8">
          <a className="font-mono text-[10px] tracking-[0.15em] text-[#8e9192] hover:text-[#7bd0ff] transition-colors uppercase" href="https://github.com/harshvishwakarma24" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="font-mono text-[10px] tracking-[0.15em] text-[#8e9192] hover:text-[#7bd0ff] transition-colors uppercase" href="https://www.linkedin.com/in/harsh-vishwakarma-118072376" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
