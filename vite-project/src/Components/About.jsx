
import { ArrowUpRight } from 'lucide-react'

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="about-grid">

        {/* About Image */}
        <div className="about-image-wrap reveal">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=90"
            alt="Premium fitness training environment"
            className="about-image"
            loading="lazy"
          />

          <div className="about-image-overlay" />

          <div className="image-caption">
            <span className="gold-text">01 / THE MINDSET</span>
            <span>DISCIPLINE BUILDS GREATNESS</span>
          </div>

          <div className="about-image-tag">
            <span className="gold-dot" />
            BUILT FOR PROGRESS
          </div>
        </div>

        {/* About Content */}
        <div className="about-copy reveal">

          <span className="section-label">
            THE PHILOSOPHY
          </span>

          <h2 className="section-title">
            Stronger is a
            <span className="gold-text"> way of life.</span>
          </h2>

          <p>
            Fitness is more than lifting weights. It is about
            building discipline, developing confidence and
            becoming stronger with every step.
          </p>

          <p>
            Every individual has a different goal. Your training
            journey should reflect that. Focus on consistency,
            smart training and sustainable progress.
          </p>

          <div className="about-features">

            <div className="about-feature">
              <span className="gold-text">01</span>
              <div>
                <h4>Personal Approach</h4>
                <p>Training designed around individual goals.</p>
              </div>
            </div>

            <div className="about-feature">
              <span className="gold-text">02</span>
              <div>
                <h4>Consistent Progress</h4>
                <p>Build habits that support long-term results.</p>
              </div>
            </div>

          </div>

          <a href="#contact" className="btn btn-gold about-btn">
            Discover My Approach
            <ArrowUpRight size={18} />
          </a>

        </div>
      </div>
    </section>
  )
}
