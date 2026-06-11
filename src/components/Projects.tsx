import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Projects.css'

gsap.registerPlugin(ScrollTrigger)

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  link: string
  github: string
}

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce site with interactive UI and smooth animations.',
      tags: ['React', 'TypeScript', 'GSAP'],
      link: '#',
      github: 'https://github.com/anchitya/e-commerce',
    },
    {
      id: 2,
      title: 'Gender & Age Recognition',
      description: 'AI-powered face recognition using OpenCV and CNN for gender and age prediction.',
      tags: ['Python', 'OpenCV', 'Deep Learning'],
      link: '#',
      github: 'https://github.com/anchitya/MiniProject-GenderRecognitionAgePrediction',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Interactive portfolio showcasing projects with 3D elements and smooth animations.',
      tags: ['React', 'Three.js', 'GSAP'],
      link: '#',
      github: 'https://github.com/anchitya/portfolio',
    },
  ]

  useEffect(() => {
    const items = projectsRef.current?.querySelectorAll('.project-card')
    if (!items) return

    items.forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <div className="projects-container">
        <h2 ref={titleRef} className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-button">
                  GitHub
                </a>
                <a href={project.link} className="link-button">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
