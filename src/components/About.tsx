import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '3.5+' },
    { label: 'VMs Migrated', value: '250+' },
    { label: 'Efficiency Gain', value: '60%+' },
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              I'm a Linux Infrastructure Engineer with 3.5+ years of experience delivering enterprise-scale virtualization, automation, and data center transformation initiatives. My core expertise lies in RHEL administration, VMware and KVM virtualization, and observability with Prometheus and Grafana.
            </p>
            <p>
              I specialize in building highly available, production-grade systems that meet strict SLA and reliability targets. At DXC Technology, I've led large-scale infrastructure projects including live migration of 250+ VMs across 3 data centers with zero unplanned downtime.
            </p>
          </motion.div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card glass"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-value gradient-text">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
