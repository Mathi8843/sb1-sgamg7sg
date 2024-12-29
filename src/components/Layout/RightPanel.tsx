import React from 'react';
import Navigation from './Navigation';
import About from '../Sections/About';
import Education from '../Sections/Education';
import Skills from '../Sections/Skills';
import Projects from '../Sections/Projects';
import Contact from '../Sections/Contact';

export default function RightPanel() {
  return (
    <div className="ml-[400px] min-h-screen bg-transparent">
      <Navigation />
      <div className="px-12 py-8">
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}