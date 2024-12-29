import React, { useState, useEffect } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('about');

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const { top } = element.getBoundingClientRect();
          if (top <= windowHeight * 0.5 && top > -windowHeight * 0.5) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/20">
      <div className="flex justify-end space-x-8 p-6 px-12">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`text-lg transition-colors ${
              activeSection === id
                ? 'text-white font-medium'
                : 'text-white/60 hover:text-white'
            }`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}