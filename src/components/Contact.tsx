import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiLinkedin } from 'react-icons/fi'
import './Contact.css'

const Contact = () => {
  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'anchitya@hotmail.com',
      link: 'mailto:anchitya@hotmail.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 (Your Phone)',
      link: 'tel:+91xxxxx',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Delhi, India',
      link: '#',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/anchitya',
      link: 'https://linkedin.com/in/anchitya',
    },
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-content">
          <motion.div
            className="contact-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Let's connect and discuss infrastructure solutions!</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out through any of the channels below.
            </p>
          </motion.div>

          <div className="contact-grid">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={info.label}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card glass"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Icon size={24} className="contact-icon" />
                  <div className="contact-details">
                    <p className="contact-label">{info.label}</p>
                    <p className="contact-value">{info.value}</p>
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
