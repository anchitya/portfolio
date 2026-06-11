import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
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
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-container">
        <div className="about-content" ref={contentRef}>
          <h2 className="section-title">About Me</h2>
          <div className="about-text">
            <p>
              I'm a passionate developer and designer with a love for creating beautiful and interactive web experiences. 
              With expertise in React, TypeScript, and modern web technologies, I build performant applications that users love.
            </p>
            <p>
              My journey in tech started with a curiosity about how things work. Now, I combine that curiosity with a 
              deep understanding of design principles and user experience to create stunning digital products.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the community.
            </p>
          </div>

          <div className="skills">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <h4>Frontend</h4>
                <ul>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>GSAP</li>
                  <li>Three.js</li>
                </ul>
              </div>
              <div className="skill-item">
                <h4>Backend</h4>
                <ul>
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>SQL</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div className="skill-item">
                <h4>Tools & Platforms</h4>
                <ul>
                  <li>Vite</li>
                  <li>Git</li>
                  <li>Docker</li>
                  <li>Vercel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
