import skillCategories from '../data/skills'

export default function Skills() {
  return (
    <section className="py-[100px] px-6" style={{ background: 'rgba(11,15,16,0.5)' }} id="skills">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="sec-number mb-4"></div>
          <h3 className="font-display text-[32px] font-bold text-[#c9c6c5] tracking-[-0.02em]">Technical Arsenal</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="glass-panel p-8 rounded-xl reveal hover:-translate-y-2 transition-all duration-300"
              data-delay={category.delay}
            >
              <span className="material-symbols-outlined text-[#7bd0ff] mb-6 block" style={{ fontSize: '40px' }}>
                {category.icon}
              </span>
              <h4 className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#c9c6c5] uppercase mb-6">{category.category}</h4>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-sm text-[#c4c7c7] opacity-80">
                    <span className="w-1.5 h-1.5 bg-[#7bd0ff] rounded-full flex-shrink-0 opacity-60" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
