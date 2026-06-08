import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import './Hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Anchitya</span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="hero-subtitle">
            Linux & Cloud Infrastructure Analyst
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="hero-description">
            VCP-VCF Certified | AWS & Azure Expert | Infrastructure Automation Specialist
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="hero-buttons"
        >
          <motion.button
            className="btn btn-primary glass"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          <motion.button
            className="btn btn-secondary glass"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FiArrowDown size={24} />
      </motion.div>
    </section>
  )
}

export default Hero
