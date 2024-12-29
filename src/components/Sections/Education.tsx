import React from 'react';

export default function Education() {
  const education = [
    {
      degree: "HSLC",
      school: "Sri Kalaivani Matric Hr Sec School",
      year: "2018-2020",
      description: "Specialized in Maths",
    },
    {
      degree: "Bachelor's in Artificial Intelligence and Data Science",
      school: "M Kumarasamy College of Engineering",
      year: "2022-2026",
      description: "Specialized in AI and Machine Learning",
    },
  ];

  return (
    <section id="education" className="py-16">
      <h2 className="mb-8 text-4xl font-bold text-white">Education</h2>
      <div className="space-y-6">
        {education.map((edu) => (
          <div
            key={edu.degree}
            className="rounded-xl bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
            <p className="text-white/80">{edu.school}</p>
            <p className="text-white/60 text-sm">{edu.year}</p>
            <p className="mt-2 text-white/70">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}