import aiTools from '../data/aiTools'

export default function AIWorkflow() {
  return (
    <section className="py-[100px] px-6 relative overflow-hidden" id="workflow">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%,rgba(123,208,255,0.04) 0%,transparent 70%)' }} />
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-14 gap-6 reveal">
          <div>
            <div className="sec-number mb-4"></div>
            <h3 className="font-display text-[32px] font-bold text-[#c9c6c5] tracking-[-0.02em] flex items-center gap-4 mb-4">
              AI Command Center
              <span className="inline-block w-2.5 h-2.5 bg-[#7bd0ff] rounded-full animate-pulse" />
            </h3>
            <p className="text-[#c4c7c7] opacity-70 max-w-xl">
              Augmenting the development lifecycle through an agentic, AI-first workflow for maximum velocity.
            </p>
          </div>
          <div className="font-mono text-[10px] text-[rgba(123,208,255,0.4)] tracking-[0.3em] uppercase border-b border-[rgba(123,208,255,0.15)] pb-2">
            V1.0.4 Neural Stack
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
          {aiTools.map((tool) => (
            <div
              key={tool.name}
              className="glass-panel p-6 rounded-xl text-center group hover:-translate-y-2 transition-all duration-300 reveal relative overflow-hidden"
              data-delay={tool.delay}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(123,208,255,0.06)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="font-mono text-[9px] text-[rgba(123,208,255,0.5)] mb-2 tracking-[0.2em] uppercase">{tool.category}</div>
              <div className="font-display font-bold text-[#c9c6c5] mb-1.5">{tool.name}</div>
              <div className="text-[10px] text-[#8e9192] leading-tight opacity-0 group-hover:opacity-100 transition-opacity">{tool.support}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
