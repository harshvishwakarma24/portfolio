import harshResume from '../assets/Harsh_Vishwakarma_Resume.pdf';
export default function Hero() {
  return (
    <section className="min-h-[92vh] flex items-center justify-center px-6 relative overflow-hidden hero-grid" id="hero">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%,rgba(123,208,255,0.04) 0%,transparent 70%)' }} />
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="reveal text-center lg:text-left z-20">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <div className="h-px w-8 bg-[#7bd0ff] opacity-60" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-[#7bd0ff] uppercase">Full Stack Developer</span>
          </div>
          <h2 className="font-display font-bold leading-[1.08] tracking-[-0.04em] mb-6" style={{ fontSize: 'clamp(3rem,7vw,5.5rem)' }}>
            Harsh<br />
            <span className="text-[#7bd0ff] text-glow">Vishwa</span>karma
          </h2>
          <p className="font-display text-xl md:text-2xl text-[#c4c7c7] font-semibold mb-5 max-w-xl mx-auto lg:mx-0">
            React &amp; Django Developer
          </p>
          <p className="text-[#c4c7c7] text-base mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed opacity-70">
            BSc IT graduate building clean, responsive, and modern web &amp; mobile applications using React, React Native, and Django.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a href="#projects" className="mag-btn bg-[#7bd0ff] text-[#00354a] px-8 py-4 rounded-lg font-mono text-[11px] font-bold tracking-[0.15em] uppercase hover:neon-glow-strong transition-all hover:-translate-y-1">
              View Projects
            </a>
            <a href={harshResume} target="_blank" rel="noreferrer" className="mag-btn glass-panel text-[#c9c6c5] px-8 py-4 rounded-lg font-mono text-[11px] tracking-[0.15em] uppercase hover:-translate-y-1 transition-all">
              Resume ↗
            </a>
            <a href="#contact" className="mag-btn px-8 py-4 text-[#7bd0ff] font-mono text-[11px] tracking-[0.15em] uppercase border border-[rgba(123,208,255,0.2)] rounded-lg hover:border-[rgba(123,208,255,0.6)] hover:-translate-y-1 transition-all">
              Contact
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center reveal h-[480px]">
          <div className="absolute w-[420px] h-[420px] tech-sphere-glow rounded-full pointer-events-none" />
          <div className="relative glass-panel w-72 h-96 rounded-2xl p-6 flex flex-col justify-between floating z-10 group overflow-hidden neon-glow">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(123,208,255,0.08)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="space-y-3 relative z-10">
              <div className="w-10 h-1.5 bg-[rgba(123,208,255,0.4)] rounded-full" />
              <div className="w-20 h-1 bg-[rgba(123,208,255,0.15)] rounded-full" />
            </div>
            <div className="flex flex-col items-center gap-4 relative z-10">
              <span className="material-symbols-outlined text-[#7bd0ff] group-hover:scale-110 transition-transform duration-300" style={{ fontSize: '64px' }}>
                terminal
              </span>
              <p className="font-mono text-[11px] text-[#8e9192]">01001000 01 · 01101001</p>
            </div>
            <div className="flex justify-between relative z-10">
              <div className="w-8 h-8 rounded-full border border-[rgba(123,208,255,0.25)] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#7bd0ff] opacity-60" />
              </div>
              <div className="w-8 h-8 rounded-full border border-[rgba(123,208,255,0.25)] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#7bd0ff] opacity-60" />
              </div>
            </div>
          </div>

          <div className="absolute top-8 right-16 glass-panel p-4 rounded-xl floating" style={{ animationDelay: '-1s' }}>
            <div className="font-mono text-[10px] text-[#7bd0ff] font-bold tracking-widest">REACT</div>
          </div>
          <div className="absolute bottom-16 left-8 glass-panel p-4 rounded-xl floating" style={{ animationDelay: '-2.2s' }}>
            <div className="font-display text-base font-bold text-[#7bd0ff]">Django</div>
          </div>
          <div className="absolute top-1/2 -right-2 glass-panel p-4 rounded-xl floating" style={{ animationDelay: '-3.5s' }}>
            <div className="font-mono text-[10px] text-[#7bd0ff] font-bold">Python</div>
          </div>
          <div className="absolute bottom-8 right-12 glass-panel px-4 py-3 rounded-xl floating" style={{ animationDelay: '-0.5s' }}>
            <div className="font-mono text-[10px] text-[#8e9192]">React Native</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom,transparent,#7bd0ff)' }} />
        <span className="font-mono text-[9px] tracking-[0.3em] text-[#c4c7c7] uppercase">Scroll</span>
      </div>
    </section>
  )
}
