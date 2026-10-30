
import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
  ['About', '#about'],
  ['Programs', '#programs'],
  ['Results', '#results'],
  ['Testimonials', '#testimonials'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav-wrap">
      <nav className="navbar">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">S</span>
          <span>FIT<span className="gold-text">WITH</span>SNEHIL</span>
        </a>

        <div className="nav-links">
          {links.map(([label, href]) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </div>

        <a className="btn btn-gold nav-cta" href="#contact">
          Start Training <ArrowUpRight size={16} />
        </a>

        <button
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <div className={`mobile-menu ${open ? 'mobile-menu-open' : ''}`}>
        {links.map(([label, href], index) => (
          <a
            href={href}
            key={href}
            style={{ '--i': index }}
            onClick={() => setOpen(false)}
          >
            <span>0{index + 1}</span>{label}
          </a>
        ))}
        <a className="btn btn-gold" href="#contact" onClick={() => setOpen(false)}>
          Start Training <ArrowUpRight size={17} />
        </a>
      </div>
    </header>
  )
}
