import certifications from '../data/certifications'

export default function Certifications() {
  return (
    <section className="py-[100px] reveal" style={{ background: 'rgba(11,15,16,0.6)' }}>
      <div className="px-6 max-w-[1200px] mx-auto mb-12">
        <div className="sec-number mb-4 text-center"></div>
        <h3 className="font-mono text-[11px] font-bold tracking-[0.4em] text-[#7bd0ff] text-center uppercase mb-2">Verified Expertise</h3>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 px-6 pb-4 max-w-[1200px] mx-auto">
        {certifications.map((cert) => (
          <div key={cert.title} className="glass-panel cert-card rounded-xl p-8 w-full">
            <p className="font-mono text-[9px] tracking-[0.25em] text-[rgba(123,208,255,0.5)] mb-3 uppercase">{cert.issuer}</p>
            <h5 className="font-display text-base font-bold text-[#c9c6c5]">{cert.title}</h5>
          </div>
        ))}
      </div>
    </section>
  )
}
