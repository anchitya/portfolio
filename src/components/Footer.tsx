import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer glass">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            © {currentYear} Anchitya. Built with React, TypeScript & Framer Motion.
          </p>
          <p className="footer-credits">
            Inspired by modern portfolio design. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
