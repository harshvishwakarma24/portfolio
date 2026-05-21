import projects from '../data/projects'

export default function Projects() {
  return (
    <section className="py-[100px] px-6 max-w-[1200px] mx-auto" id="projects">
      <div className="flex items-end justify-between mb-14 reveal flex-wrap gap-4">
        <div>
          <div className="sec-number mb-4"></div>
          <h3 className="font-display text-[32px] font-bold text-[#c9c6c5] tracking-[-0.02em]">High-Impact Deployments</h3>
        </div>
        <a
          href="https://github.com/harshvishwakarma24"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[10px] tracking-[0.2em] text-[#7bd0ff] uppercase hover:opacity-70 transition-opacity"
        >
          View All on GitHub ↗
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="project-card glass-panel rounded-2xl overflow-hidden reveal hover:neon-glow transition-all duration-500"
            data-delay={project.delay}
            style={{ borderColor: 'rgba(68,71,72,0.15)' }}
          >
            <div className="project-img-wrap h-56" style={{ background: project.background }}>
              {project.imagePlaceholder ? (
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={project.imagePlaceholder}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101415] to-transparent" />
                </div>
              ) : (
                <>
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#7bd0ff] opacity-20" style={{ fontSize: '80px' }}>
                      {project.icon}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101415] to-transparent" />
                </>
              )}
            </div>
            <div className="p-8">
              <div className="flex gap-2 mb-5 flex-wrap">
                {project.techStack.map((tech) => (
                  <span key={tech} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <h4 className="font-display text-2xl font-bold text-[#c9c6c5] mb-4 group-hover:text-[#7bd0ff] transition-colors">
                {project.title}
              </h4>
              <p className="text-[#c4c7c7] text-sm mb-8 leading-relaxed opacity-70">{project.description}</p>
              <a
                className="inline-flex items-center gap-2 text-[#7bd0ff] font-mono text-[10px] tracking-[0.15em] uppercase hover:gap-4 transition-all"
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
              >
                View Repository <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
