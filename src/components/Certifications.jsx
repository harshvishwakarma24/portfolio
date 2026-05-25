import { useState } from 'react'
import certifications from '../data/certifications'

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)

  function openModal(cert) {
    setSelectedCert(cert)
    requestAnimationFrame(() => setIsVisible(true))
  }

  function closeModal() {
    setIsVisible(false)
    setTimeout(() => setSelectedCert(null), 300)
  }

  function openCertificate(cert, e) {
    e.preventDefault()
    e.stopPropagation()
    if (cert.file) {
      const isPDF = cert.file.toLowerCase().endsWith('.pdf')
      const isImage = /\.(jpg|jpeg|png|svg)$/i.test(cert.file)
      
      if (isPDF) {
        window.open(cert.file, '_blank')
      } else if (isImage) {
        openModal(cert)
      } else {
        window.open(cert.file, '_blank')
      }
    }
  }

  return (
    <section className="py-[100px] reveal" style={{ background: 'rgba(11,15,16,0.6)' }}>
      <div className="px-6 max-w-[1200px] mx-auto mb-12">
        <div className="sec-number mb-4 text-center"></div>
        <h3 className="font-mono text-[11px] font-bold tracking-[0.4em] text-[#7bd0ff] text-center uppercase mb-2">Verified Expertise</h3>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 px-6 pb-4 max-w-[1200px] mx-auto">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            role="button"
            tabIndex={0}
            onClick={(e) => openCertificate(cert, e)}
            onKeyDown={(e) => { if (e.key === 'Enter') openCertificate(cert, e) }}
            onMouseEnter={() => setHoveredCard(cert.title)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ease-out"
            style={{
              transform: hoveredCard === cert.title ? 'scale(1.03) translateY(-8px)' : 'scale(1) translateY(0)',
              boxShadow: hoveredCard === cert.title 
                ? '0 0 40px rgba(123, 208, 255, 0.4), 0 0 80px rgba(123, 208, 255, 0.2), inset 0 0 40px rgba(123, 208, 255, 0.1)'
                : '0 0 20px rgba(123, 208, 255, 0.15), inset 0 0 20px rgba(123, 208, 255, 0.05)'
            }}
          >
            {/* Background image with gradient overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30 transition-opacity duration-300"
              style={{
                backgroundImage: `url('${cert.image}')`,
              }}
            />
            
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(11,15,16,0.95)] via-[rgba(11,15,16,0.85)] to-[rgba(11,15,16,0.9)]" />
            
            {/* Animated shine effect on hover */}
            {hoveredCard === cert.title && (
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                  animation: 'shine 0.6s ease-in-out'
                }}
              />
            )}

            {/* Content */}
            <div className="relative p-6 h-full flex flex-col justify-between">
              {/* Top section: Issuer and title */}
              <div>
                <p className="font-mono text-[8px] tracking-[0.3em] text-[#7bd0ff] mb-2 uppercase opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  {cert.issuer}
                </p>
                <h5 className="font-display text-sm font-bold text-[#c9c6c5] leading-tight mb-3 group-hover:text-[#e0dddC] transition-colors duration-300">
                  {cert.title}
                </h5>
              </div>

              {/* Bottom section: View button */}
              <div className="flex items-center gap-2 mt-2 text-[#7bd0ff] font-mono text-[11px] font-bold tracking-[0.15em] uppercase opacity-70 group-hover:opacity-100 transition-all duration-300">
                <span className="group-hover:translate-x-1 transition-transform duration-300">View Certificate</span>
                <span className="group-hover:translate-x-2 transition-all duration-300">↗</span>
              </div>
            </div>

            {/* Border glow effect */}
            <div 
              className="absolute inset-0 rounded-2xl pointer-events-none border border-transparent transition-colors duration-300"
              style={{
                borderColor: hoveredCard === cert.title ? 'rgba(123, 208, 255, 0.5)' : 'rgba(123, 208, 255, 0.2)'
              }}
            />
          </div>
        ))}
      </div>

      {/* Modal overlay */}
      {selectedCert && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          onClick={closeModal}
          aria-hidden
        >
          <div className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />

          <div
            className={`relative z-10 max-w-[90vw] max-h-[90vh] w-[900px] mx-4 p-4 rounded-xl bg-transparent flex flex-col items-end transition-transform duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="text-[#c9c6c5] bg-[rgba(15,18,20,0.6)] hover:bg-[rgba(20,24,26,0.7)] p-2 rounded-md shadow-md -mr-2"
              aria-label="Close preview"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="#c9c6c5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="#c9c6c5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="w-full h-full flex items-center justify-center">
              <img
                src={selectedCert.file}
                alt={`${selectedCert.title} certificate`}
                className="object-contain max-w-full max-h-[80vh] rounded-md shadow-2xl border border-[rgba(255,255,255,0.03)]"
              />
            </div>

            <div className="w-full mt-4 flex items-center justify-start text-[13px] text-[rgba(201,198,197,0.85)]">
              <div className="text-left">
                <div className="font-mono text-[9px] tracking-[0.25em] text-[rgba(123,208,255,0.5)] uppercase">{selectedCert.issuer}</div>
                <div className="font-display font-bold">{selectedCert.title}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
