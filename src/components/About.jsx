export default function About() {
  return (
    <section className="py-[100px] px-6 max-w-[1200px] mx-auto" id="about">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3 reveal">
          <div className="sec-number mb-4"></div>
          <h3 className="font-display text-[32px] font-bold text-[#c9c6c5] mb-6 tracking-[-0.02em]">About Me</h3>
          <div className="w-16 h-0.5 bg-[#7bd0ff] mb-8 rounded-full" />
          <p className="text-[#c4c7c7] leading-relaxed text-base mb-8 opacity-75">
            I'm a forward-thinking developer dedicated to creating digital experiences that are as functional as they are beautiful. I love the intersection of elegant design and clean engineering.
          </p>
          <div className="glass-panel p-5 rounded-xl">
            <p className="font-mono text-[9px] tracking-[0.25em] text-[#7bd0ff] mb-3 uppercase">Current Status</p>
            <p className="text-[#c9c6c5] font-medium flex items-center gap-3 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full status-dot flex-shrink-0" />
              Available for hire
            </p>
          </div>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel p-8 rounded-2xl reveal group" data-delay="100">
            <span className="material-symbols-outlined text-[#7bd0ff] mb-6 block" style={{ fontSize: '40px' }}>
              school
            </span>
            <h4 className="font-display text-xl font-semibold text-[#c9c6c5] mb-4">Academic Foundation</h4>
            <p className="text-[#c4c7c7] text-sm leading-relaxed mb-5 opacity-75">
              Bachelor of Science in Information Technology (BSc IT) — deep understanding of software lifecycles and modern computing.
            </p>
            <div className="font-mono text-[10px] text-[rgba(123,208,255,0.5)] uppercase tracking-widest">BSc IT Graduate</div>
          </div>

          <div className="glass-panel p-8 rounded-2xl reveal group" data-delay="200">
            <span className="material-symbols-outlined text-[#7bd0ff] mb-6 block" style={{ fontSize: '40px' }}>
              rocket_launch
            </span>
            <h4 className="font-display text-xl font-semibold text-[#c9c6c5] mb-4">Core Mission</h4>
            <p className="text-[#c4c7c7] text-sm leading-relaxed mb-5 opacity-75">
              Leveraging AI-augmented development to build scalable applications that solve real-world problems with elegance and efficiency.
            </p>
            <div className="font-mono text-[10px] text-[rgba(123,208,255,0.5)] uppercase tracking-widest">Focus: Scalability &amp; Impact</div>
          </div>

          <div className="glass-panel p-8 rounded-2xl reveal group" data-delay="300">
            <span className="material-symbols-outlined text-[#7bd0ff] mb-6 block" style={{ fontSize: '40px' }}>
              code_blocks
            </span>
            <h4 className="font-display text-xl font-semibold text-[#c9c6c5] mb-4">Development Style</h4>
            <p className="text-[#c4c7c7] text-sm leading-relaxed mb-5 opacity-75">
              Clean code, thoughtful architecture, and pixel-perfect UI. Every project is an opportunity to raise the bar.
            </p>
            <div className="font-mono text-[10px] text-[rgba(123,208,255,0.5)] uppercase tracking-widest">Clean · Scalable · Beautiful</div>
          </div>

          <div className="glass-panel p-8 rounded-2xl reveal group" data-delay="400">
            <span className="material-symbols-outlined text-[#7bd0ff] mb-6 block" style={{ fontSize: '40px' }}>
              diversity_3
            </span>
            <h4 className="font-display text-xl font-semibold text-[#c9c6c5] mb-4">Collaboration</h4>
            <p className="text-[#c4c7c7] text-sm leading-relaxed mb-5 opacity-75">
              Comfortable working in agile teams, communicating clearly, and delivering on time. Open to freelance and full-time opportunities.
            </p>
            <div className="font-mono text-[10px] text-[rgba(123,208,255,0.5)] uppercase tracking-widest">Open to Opportunities</div>
          </div>
        </div>
      </div>
    </section>
  )
}
