import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Cloud Platforms',
      skills: [
        { name: 'Google Cloud Platform', level: 90 },
        { name: 'AWS', level: 85 },
        { name: 'Azure', level: 85 },
      ],
    },
    {
      category: 'Virtualization & Infrastructure',
      skills: [
        { name: 'VMware (VCP-VCF)', level: 95 },
        { name: 'KVM Virtualization', level: 90 },
        { name: 'Linux Administration', level: 95 },
        { name: 'RHEL', level: 95 },
      ],
    },
    {
      category: 'DevOps & Automation',
      skills: [
        { name: 'Ansible Automation', level: 88 },
        { name: 'Prometheus Monitoring', level: 85 },
        { name: 'Grafana Dashboards', level: 85 },
        { name: 'Infrastructure as Code', level: 80 },
      ],
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: catIndex * 0.1 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
