import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'
import './Navbar.css'

interface NavbarProps {
  isDark: boolean
  toggleTheme: () => void
}

const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact']

  const handleScroll = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id.toLowerCase())
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar glass">
      <div className="nav-container">
        <motion.div
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="logo-text">Anchitya</span>
        </motion.div>

        <div className="nav-menu-desktop">
          {menuItems.map((item, index) => (
            <motion.button
              key={item}
              className="nav-link"
              onClick={() => handleScroll(item)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.button>
          ))}
        </div>

        <div className="nav-actions">
          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </motion.button>

          <motion.button
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`mobile-menu glass ${isOpen ? 'open' : ''}`}
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        transition={{ duration: 0.3 }}
      >
        {menuItems.map((item) => (
          <button
            key={item}
            className="mobile-link"
            onClick={() => handleScroll(item)}
          >
            {item}
          </button>
        ))}
      </motion.div>
    </nav>
  )
}

export default Navbar
