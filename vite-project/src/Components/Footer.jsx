
import { ArrowUpRight, ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <a href="#home" className="brand">
          <span className="brand-mark">S</span>
          <span>
            FIT<span className="gold-text">WITH</span>SNEHIL
          </span>
        </a>

        <p>
          Move with purpose. Build with consistency.
        </p>

        <a
          className="social-link"
          href="https://www.instagram.com/fitwithsnehil/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Instagram profile"
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="18" cy="6" r="0.8" fill="currentColor" />
          </svg>

          <span>Instagram</span>
          <ArrowUpRight size={15} />
        </a>

      </div>

      <div className="footer-bottom">

        <span>
          © {new Date().getFullYear()} Fit With Snehil. All rights reserved.
        </span>

        <a href="#home" className="back-top">
          Back to top <ArrowUp size={14} />
        </a>

      </div>

    </footer>
  )
}
