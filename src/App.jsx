import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import './App.css'
import './i18n' // Importa la configuración de i18next

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Router>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <AnimatePresence mode='wait'>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  )
}

export default App
