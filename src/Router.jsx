import { Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home/Home';
import Projects from './pages/Home/Project';

const Router = ({ darkMode }) => {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/proyectos/:id" element={<Projects darkMode={darkMode} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Router;
