import { Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home/Home';
import Project from './pages/Home/Project';
import AboutProject from './pages/AboutProject/AboutProject';

const Router = ({ darkMode }) => {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/proyectos/:id" element={<Project darkMode={darkMode} />} />
        <Route path="/Portfolio" element={<AboutProject darkMode={darkMode} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Router;
