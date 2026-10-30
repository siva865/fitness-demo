
import { Quote } from 'lucide-react'

export default function Testimonials() {
  return (
    <section className="section testimonial-section" id="testimonials">
      <div className="testimonial-card reveal">
        <span className="section-label">YOUR EXPERIENCE MATTERS</span>
        <Quote size={38} className="gold-text quote-icon" />
        <h2 className="section-title">
          The best fitness journey is the one that fits <span className="gold-text">your life.</span>
        </h2>
        <p>
          Have questions about training, goals or getting started?
          Let’s talk about the right next step for you.
        </p>
        <a href="#contact" className="btn btn-gold">Let’s talk</a>
      </div>
    </section>
  )
}
