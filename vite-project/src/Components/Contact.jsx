
import { useState } from 'react'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent('Fitness coaching enquiry')
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nGoal: ${data.get('goal')}\nMessage: ${data.get('message')}`
    )

    setSubmitted(true)
    window.location.href =
      `mailto:YOUR_EMAIL@example.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-grid">
        <div className="contact-copy reveal">
          <span className="section-label">LET'S GET STARTED</span>
          <h2 className="section-title">
            Your goals deserve a <span className="gold-text">plan.</span>
          </h2>
          <p>
            Tell me a little about yourself and what you want to work towards.
          </p>
          <div className="contact-detail">
            <span className="gold-text">01</span>
            <div><strong>Share your goals</strong><p>Tell us what you want to achieve.</p></div>
          </div>
          <div className="contact-detail">
            <span className="gold-text">02</span>
            <div><strong>Explore your options</strong><p>Discuss a suitable training approach.</p></div>
          </div>
        </div>

        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <label>
            Your name
            <input name="name" placeholder="Full name" required />
          </label>
          <label>
            Email address
            <input name="email" type="email" placeholder="you@example.com" required />
          </label>
          <label>
            Primary goal
            <select name="goal" defaultValue="" required>
              <option value="" disabled>Select your goal</option>
              <option>Build strength</option>
              <option>Improve overall fitness</option>
              <option>Build a consistent routine</option>
              <option>Discuss a personal goal</option>
            </select>
          </label>
          <label>
            Tell us more
            <textarea name="message" placeholder="What would you like help with?" rows="4" />
          </label>
          <button className="btn btn-gold form-submit" type="submit">
            Send enquiry <ArrowUpRight size={18} />
          </button>
          {submitted && (
            <p className="form-note"><CheckCircle2 size={16} /> Opening your email app…</p>
          )}
          <p className="form-note">Demo form · Add the confirmed contact email before launch</p>
        </form>
      </div>
    </section>
  )
}
