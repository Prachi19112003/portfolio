import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './pages/Welcome';
import Portfolio from './pages/Portfolio';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import ResumeOverview from './components/ResumeOverview';
import Contact from './components/Contact';
import ResumeDownload from './components/ResumeDownload';
import Chatbot from './components/Chatbot';
import Myprojects from './components/Myprojects'; // New Component

function App() {
  return (
    <Router>
      <Routes>
        {/* Welcome Page */}
        <Route path="/" element={<Welcome />} />

        {/* Portfolio Page with Bubble Buttons and Chatbot */}
        <Route path="/portfolio" element={<><Portfolio /><Chatbot /></>} />

        {/* Components Navigation */}
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<ResumeOverview />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume-download" element={<ResumeDownload />} />

        {/* New Projects Page */}
        <Route path="/projects" element={<Myprojects />} />
      </Routes>
    </Router>
  );
}

export default App;
