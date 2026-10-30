
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-image" />
      <div className="hero-shade" />

      <div className="hero-content">
        <div className="eyebrow">
          <span className="status-dot" />
          PERSONAL TRAINING · BUILT AROUND YOU
        </div>

        <h1 className="hero-title">
          <span>BUILD YOUR</span>
          <span className="gold-text">STRONGEST</span>
          <span>SELF<span className="gold-text">.</span></span>
        </h1>

        <p className="hero-description">
          Train with purpose. Build lasting habits.
          Become the strongest version of yourself.
        </p>

        <div className="hero-actions">
          <a className="btn btn-gold" href="#programs">
            Explore Programs <ArrowUpRight size={18} />
          </a>
          <a className="text-link" href="#about">
            Discover the approach <ArrowDownRight size={17} />
          </a>
        </div>
      </div>

      <div className="hero-bottom">
        <span>YOUR GOALS. YOUR PACE.</span>
        <a href="#about">SCROLL TO DISCOVER ↓</a>
      </div>
    </section>
  )
}
