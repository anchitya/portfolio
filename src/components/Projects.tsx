import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Infrastructure Automation',
      description: 'Ansible playbooks for automated server deployment and configuration management across 250+ VMs.',
      tags: ['Ansible', 'Linux', 'DevOps'],
      icon: '⚙️',
    },
    {
      title: 'Monitoring & Observability',
      description: 'Prometheus and Grafana stack for real-time infrastructure monitoring and alerting.',
      tags: ['Prometheus', 'Grafana', 'Observability'],
      icon: '📊',
    },
    {
      title: 'Cloud Migration',
      description: 'Orchestrated migration of 2000+ servers across 3 data centers with zero unplanned downtime.',
      tags: ['AWS', 'Azure', 'GCP'],
      icon: '☁️',
    },
    {
      title: 'Virtualization Optimization',
      description: 'VMware vCenter optimization achieving 60%+ operational efficiency improvements.',
      tags: ['VMware', 'VCP-VCF', 'KVM'],
      icon: '🖥️',
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Key Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-icon">{project.icon}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <motion.button
                className="project-link"
                whileHover={{ x: 5 }}
              >
                Learn More <FiExternalLink size={16} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
