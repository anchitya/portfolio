import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Contact.css'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return

    gsap.from(contentRef.current, {
      scrollTrigger: {
        trigger: contentRef.current,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact-container">
        <div className="contact-content" ref={contentRef}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a project in mind? Let's collaborate and create something amazing together!
          </p>

          <div className="contact-methods">
            <a href="mailto:your-email@example.com" className="contact-card">
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>
              <p>your-email@example.com</p>
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon">𝕏</div>
              <h3>Twitter</h3>
              <p>@your-twitter</p>
            </a>

            <a href="https://github.com/anchitya" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon">💻</div>
              <h3>GitHub</h3>
              <p>github.com/anchitya</p>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon">💼</div>
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/anchitya</p>
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Anchitya. Built with React, TypeScript, and GSAP.</p>
      </footer>
    </section>
  )
}

export default Contact
