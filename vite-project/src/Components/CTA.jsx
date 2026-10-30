
import { ArrowUpRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-image" />
      <div className="cta-content reveal">
        <span className="section-label">YOUR NEXT CHAPTER STARTS HERE</span>
        <h2>
          READY TO<br />
          <span className="gold-text">LEVEL UP?</span>
        </h2>
        <p>Take the first step towards a stronger, more consistent you.</p>
        <a href="#contact" className="btn btn-gold">
          Start your journey <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  )
}
