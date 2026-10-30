
export default function Transformation() {
  return (
    <section className="section results-section" id="results">
      <div className="section-heading reveal">
        <span className="section-label">THE JOURNEY</span>
        <h2 className="section-title">
          Every rep moves<br />you <span className="gold-text">forward.</span>
        </h2>
        <p className="section-description">
          Lasting change comes from showing up, staying consistent
          and finding a routine that works for you.
        </p>
      </div>

      <div className="results-grid">
        <div className="result-image result-image-large reveal">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85"
            alt="Strength training environment"
            loading="lazy"
          />
          <span>01 — SHOW UP</span>
        </div>
        <div className="result-image reveal">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85"
            alt="Athlete training in the gym"
            loading="lazy"
          />
          <span>02 — STAY CONSISTENT</span>
        </div>
      </div>
      <p className="results-note">
        Illustrative fitness photography · Replace with approved client results
        only when available and with permission
      </p>
    </section>
  )
}
