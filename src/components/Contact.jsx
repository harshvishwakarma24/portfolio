export default function Contact() {
  return (
    <section className="py-[100px] px-6 max-w-[1200px] mx-auto reveal" id="contact">
      <div className="glass-panel rounded-3xl p-8 md:p-16 relative overflow-hidden" style={{ borderColor: 'rgba(123,208,255,0.08)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none -mr-48 -mt-48" style={{ background: 'radial-gradient(circle,rgba(123,208,255,0.06) 0%,transparent 70%)' }} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <div className="sec-number mb-6"></div>
            <h3 className="font-display text-[32px] font-bold text-[#c9c6c5] tracking-[-0.02em] mb-5">Contact Me</h3>
            <p className="text-[#c4c7c7] mb-12 leading-relaxed opacity-70">
              Interested in working together or discussing opportunities? Let’s connect.</p>

            <div className="space-y-7">
              {[
                { icon: 'mail', label: 'Email', value: 'harshp24vishwakarma@gmail.com', href: 'mailto:harshp24vishwakarma@gmail.com' },
                { icon: 'location_on', label: 'Location', value: 'Maharashtra, India' },
                { icon: 'link', label: 'LinkedIn', value: 'linkedin.com/in/harsh-vishwakarma', href: 'https://www.linkedin.com/in/harsh-vishwakarma-118072376' },
              ].map((item) => (
                <div className="flex items-center gap-5 group" key={item.label}>
                  <div className="w-12 h-12 glass-panel flex items-center justify-center rounded-xl group-hover:bg-[rgba(123,208,255,0.08)] transition-all flex-shrink-0">
                    <span className="material-symbols-outlined text-[#7bd0ff]" style={{ fontSize: '20px' }}>
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.25em] text-[#7bd0ff] mb-1 uppercase">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer" className="text-[#c9c6c5] text-sm hover:text-[#7bd0ff] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[#c9c6c5] text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form action="https://formsubmit.co/harshp24vishwakarma@gmail.com" method="POST" className="space-y-5">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://portfolio-ten-ivory-83.vercel.app" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="font-mono text-[9px] tracking-[0.25em] text-[#7bd0ff] uppercase block">Name</label>
                <input className="w-full px-4 py-3 text-sm" name="name" placeholder="Harsh" type="text" required />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[9px] tracking-[0.25em] text-[#7bd0ff] uppercase block">Email</label>
                <input className="w-full px-4 py-3 text-sm" name="email" placeholder="harsh@gmail.com" type="email" required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[9px] tracking-[0.25em] text-[#7bd0ff] uppercase block">Message</label>
              <textarea className="w-full px-4 py-3 text-sm" name="message" placeholder="Your message..." rows="5" required />
            </div>
            <button type="submit" className="mag-btn w-full bg-[#7bd0ff] text-[#00354a] font-mono text-[11px] font-bold tracking-[0.2em] uppercase py-5 rounded-lg neon-glow hover:neon-glow-strong transition-all active:scale-95 hover:scale-[1.02]">
              Send Message 
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
