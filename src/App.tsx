import { Suspense, lazy } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import './App.css'

const Projects = lazy(() => import('./components/Projects'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Projects />
        <About />
        <Contact />
      </Suspense>
    </div>
  )
}

export default App
