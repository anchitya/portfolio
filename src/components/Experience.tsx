import { motion } from 'framer-motion'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Analyst I Infrastructure Services',
      company: 'DXC Technology',
      period: 'October 2024 - Present',
      location: 'Bengaluru',
      highlights: [
        'Lead team in delivering mission-critical server solutions',
        'Executed SAN migrations for data storage optimization',
        'Orchestrated 50+ physical and virtual servers deployment',
        'Managed 2000+ server migrations with zero unplanned downtime',
      ],
    },
    {
      title: 'Analyst II Infrastructure Services',
      company: 'DXC Technology',
      period: 'November 2023 - September 2024',
      location: 'Bengaluru',
      highlights: [
        'Led infrastructure solutions across Unix/Linux systems',
        'Optimized data storage systems and network efficiency',
        'Coordinated operations across 6 data centers',
        'Enhanced RHEL VM management processes',
      ],
    },
    {
      title: 'Associate Professional Software Engineer',
      company: 'DXC Technology',
      period: 'June 2022 - October 2023',
      location: 'Bengaluru',
      highlights: [
        'Provided technical support in infrastructure services',
        'Participated in infrastructure projects and tasks',
        'Troubleshot infrastructure systems',
        'Followed industry best practices and standards',
      ],
    },
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content glass">
                <h3 className="exp-title">{exp.title}</h3>
                <p className="exp-company">{exp.company}</p>
                <p className="exp-meta">
                  {exp.period} • {exp.location}
                </p>
                <ul className="exp-highlights">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
