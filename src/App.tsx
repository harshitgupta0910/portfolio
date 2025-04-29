import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes as needed */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;