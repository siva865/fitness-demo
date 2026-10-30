const reasons = [
  {
    number: '01',
    title: 'Built around you',
    description: 'A training approach tailored to your individual goals.',
    image: 'photo-1534438327276-14e5300c3a48',
  },
  {
    number: '02',
    title: 'Train with purpose',
    description: 'Make every session count with a clear direction.',
    image: 'photo-1583454110551-21f2fa2afe61',
  },
  {
    number: '03',
    title: 'Consistency wins',
    description: 'Build routines that support progress over time.',
    image: 'photo-1517836357463-d25dfeac3438',
  },
  {
    number: '04',
    title: 'Stronger every day',
    description: 'Focus on sustainable habits and long-term strength.',
    image: 'photo-1571019613454-1cb2f99b2d8b',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section reasons-section" id="why-us">
      <div className="section-heading reveal">
        <span className="section-label">WHY THIS APPROACH</span>

        <h2 className="section-title">
          More than a workout.
          <br />
          <span className="gold-text">A commitment to you.</span>
        </h2>
      </div>

      <div className="stack-list">
        {reasons.map((item) => (
          <article className="stack-card" key={item.number}>
            <img
              className="stack-image"
              src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=1800&q=85`}
              alt={item.title}
              loading="lazy"
            />

            <div className="stack-overlay" />

            <div className="stack-content">
              <span className="section-label gold-text">
                {item.number} / THE METHOD
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}