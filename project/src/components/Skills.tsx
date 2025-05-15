import React from 'react';
import { Code, Database, PenTool, Users } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="w-6 h-6 text-primary-600" />,
    skills: [
      { name: "HTML/CSS", level: 85 },
      { name: "JavaScript", level: 70 },
      { name: "Python", level: 80 },
      { name: "Java", level: 65 },
      { name: "C", level: 60 },
      { name: "SQL", level: 75 },
    ]
  },
  {
    title: "Technical Skills",
    icon: <Database className="w-6 h-6 text-secondary-600" />,
    skills: [
      { name: "Data Science", level: 75 },
      { name: "Frontend Dev", level: 70 },
      { name: "Data Analysis", level: 80 },
      { name: "AI Tools", level: 65 },
    ]
  },
  {
    title: "Soft Skills",
    icon: <Users className="w-6 h-6 text-accent-600" />,
    skills: [
      { name: "Leadership", level: 90 },
      { name: "Mentoring", level: 85 },
      { name: "Communication", level: 80 },
      { name: "Problem Solving", level: 85 },
    ]
  },
  {
    title: "Creative Skills",
    icon: <PenTool className="w-6 h-6 text-success-500" />,
    skills: [
      { name: "Project Design", level: 75 },
      { name: "Educational Content", level: 80 },
      { name: "Visual Presentations", level: 70 },
      { name: "Creative Learning", level: 85 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            My Skills
          </h2>
          <div 
            className="w-20 h-1 bg-primary-600 mx-auto mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          ></div>
          <p 
            className="text-gray-700"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            A diverse set of technical and soft skills that I've developed through education and practical experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="h-2.5 rounded-full"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: 
                            index === 0 ? '#7c3aed' : 
                            index === 1 ? '#2563eb' : 
                            index === 2 ? '#db2777' : 
                            '#10b981',
                          transition: 'width 1.5s ease-in-out'
                        }}
                        data-aos="slide-right"
                        data-aos-delay={150 * (skillIndex + 1)}
                        data-aos-duration="1000"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;