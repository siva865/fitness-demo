import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Programs from './Components/Programs'
import WhyChooseUs from './Components/WhyChooseUs'
import Transformation from './Components/Transformation'
import Testimonials from './Components/Testimonials'
import CTA from './Components/CTA'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({ lerp: 0.08 })

    lenis.on('scroll', ScrollTrigger.update)

    const tick = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 45, opacity: 0, filter: 'blur(8px)' },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 88%',
              once: true,
            },
          }
        )
      })

      gsap.utils.toArray('.stack-card').forEach((card, index, cards) => {
        if (index === cards.length - 1) return

        gsap.to(card, {
          scale: 0.92,
          filter: 'brightness(0.55) blur(2px)',
          ease: 'none',
          scrollTrigger: {
            trigger: cards[index + 1],
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
        })
      })

      gsap.utils.toArray('.hero-title span').forEach((word, index) => {
        gsap.fromTo(
          word,
          { y: 70, opacity: 0, filter: 'blur(12px)' },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 1,
            delay: index * 0.14,
            ease: 'power4.out',
          }
        )
      })
    })

    return () => {
      ctx.revert()
      gsap.ticker.remove(tick)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <WhyChooseUs />
        <Programs />
        <Transformation />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
