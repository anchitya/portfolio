import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Hero.css'

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(titleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out',
    })
      .from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power2.out',
      }, '-=0.4')
      .from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power2.out',
      }, '-=0.4')
  }, [])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 ref={titleRef} className="hero-title">
          Hi, I'm <span>Anchitya</span>
        </h1>
        <p ref={subtitleRef} className="hero-subtitle">
          Creative Developer & Designer | Building beautiful web experiences with modern technologies
        </p>
        <button ref={ctaRef} className="cta-button" onClick={scrollToProjects}>
          View My Work
          <span className="arrow">→</span>
        </button>
      </div>
      <div className="hero-background">
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="gradient-orb gradient-orb-3"></div>
      </div>
    </section>
  )
}

export default Hero
