import { motion } from 'framer-motion'
import './Home.css'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home-container"
    >
      <section className="hero-section">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1>Desarrollador Full Stack</h1>
          <p>Transformando ideas en soluciones digitales</p>
        </motion.div>
      </section>

      <section className="skills-section">
        {/* Tus habilidades aquí */}
      </section>
    </motion.div>
  )
}

export default Home