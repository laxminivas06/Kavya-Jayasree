import React from 'react';
import { BookOpen, Users, BrainCircuit } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    title: "Education Mentor",
    organization: "Padma Tutorials",
    period: "2023 - Present",
    description: "Actively working as a member at Padma Tutorials, helping students understand complex concepts through personalized teaching methods and fostering an interactive learning environment.",
    icon: <BookOpen className="w-10 h-10 text-primary-600" />,
    skills: ["Teaching", "Curriculum Development", "Student Mentoring"]
  },
  {
    id: 2,
    title: "Student Mentor",
    organization: "College Community",
    period: "2023 - Present",
    description: "Guiding fellow students in their educational journey, helping them navigate through technical subjects and encouraging them to develop practical skills alongside theoretical knowledge.",
    icon: <Users className="w-10 h-10 text-secondary-600" />,
    skills: ["Peer Education", "Technical Guidance", "Leadership"]
  },
  {
    id: 3,
    title: "Practical Learning Programs",
    organization: "Various Institutions",
    period: "2022 - Present",
    description: "Participating in hands-on learning initiatives that bridge the gap between theory and application, developing projects that solve real-world problems and enhance technical skills.",
    icon: <BrainCircuit className="w-10 h-10 text-accent-600" />,
    skills: ["Project Development", "Team Collaboration", "Problem Solving"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            Experience
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
            My professional experiences and roles that have contributed to my growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experienceData.map((exp, index) => (
            <div 
              key={exp.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="p-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    {exp.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-500">{exp.period}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{exp.title}</h3>
                <h4 className="text-md font-medium text-primary-600 mb-4">{exp.organization}</h4>
                <p className="text-gray-700 mb-6">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;