
import { ArrowUpRight, Dumbbell, HeartPulse, Salad, UserRound } from 'lucide-react'

const programs = [
  {
    number: '01',
    title: 'Personal Training',
    description: 'Individual attention with a plan aligned to your goals.',
    icon: UserRound,
    image: 'photo-1581009146145-b5ef050c2e1e',
  },
  {
    number: '02',
    title: 'Strength & Conditioning',
    description: 'Build strength, improve movement and develop consistency.',
    icon: Dumbbell,
    image: 'photo-1534438327276-14e5300c3a48',
  },
  {
    number: '03',
    title: 'Fitness & Endurance',
    description: 'Build a balanced routine that supports everyday fitness.',
    icon: HeartPulse,
    image: 'photo-1517836357463-d25dfeac3438',
  },
  {
    number: '04',
    title: 'Lifestyle Guidance',
    description: 'Explore sustainable habits that complement your training.',
    icon: Salad,
    image: 'photo-1518611012118-696072aa579a',
  },
]

export default function Programs() {
  return (
    <section className="section" id="programs">
      <div className="section-heading reveal">
        <span className="section-label">FIND YOUR FOCUS</span>
        <h2 className="section-title">
          Your goals.<br /><span className="gold-text">Your program.</span>
        </h2>
      </div>

      <div className="program-grid">
        {programs.map(({ number, title, description, icon: Icon, image }) => (
          <article className="program-card reveal" key={number}>
            <div className="program-image-wrap">
              <img
                src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=900&q=85`}
                alt=""
                loading="lazy"
              />
              <span className="program-number">{number}</span>
              <span className="program-icon"><Icon size={21} /></span>
            </div>
            <div className="program-copy">
              <h3>{title}</h3>
              <p>{description}</p>
              <a href="#contact" aria-label={`Enquire about ${title}`}>
                Explore program <ArrowUpRight size={17} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
