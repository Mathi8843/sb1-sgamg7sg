import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16">
      <h2 className="mb-8 text-4xl font-bold text-white">About Me</h2>
      <div className="space-y-6 text-lg text-white/80">
        <p>
          Hello! I'm a passionate Full Stack Developer with over 5 years of experience
          in building web applications. I specialize in React, Node.js, and modern
          web technologies.
        </p>
        <p>
          My journey in software development started when I built my first website
          in college. Since then, I've worked with various startups and enterprises,
          helping them create scalable and user-friendly applications.
        </p>
        <p>
          When I'm not coding, you can find me contributing to open-source projects,
          writing technical blog posts, or exploring new technologies.
        </p>
      </div>
    </section>
  );
}