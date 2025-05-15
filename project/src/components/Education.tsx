import React from 'react';
import { Bookmark, GraduationCap, Award } from 'lucide-react';

const educationData = [
  {
    id: 1,
    years: "2024 - Present",
    institution: "Sphoorthy Engineering College",
    degree: "B.Tech in Data Science",
    description: "Currently pursuing a Bachelor's degree in Data Science, focusing on the intersection of computer science, statistics, and domain expertise to extract knowledge and insights from data.",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "primary"
  },
  {
    id: 2,
    years: "2022 - 2024",
    institution: "Narayana Junior College",
    degree: "Intermediate Education",
    description: "Completed intermediate education with an impressive 94% overall score, demonstrating strong academic capabilities and dedication to learning.",
    icon: <Award className="w-6 h-6" />,
    color: "secondary",
    achievement: "94% Score"
  },
  {
    id: 3,
    years: "2021 - 2022",
    institution: "Jyoti Vijay Niketan CBSE School",
    degree: "High School Education",
    description: "Received a comprehensive foundation in various subjects following the CBSE curriculum, which emphasized both academic excellence and holistic development.",
    icon: <Bookmark className="w-6 h-6" />,
    color: "accent"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            Education Journey
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
            My academic path that has shaped my knowledge and perspectives
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:translate-x-px"></div>

          {/* Timeline Items */}
          {educationData.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex flex-col md:flex-row items-center mb-16 relative ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-delay={100 + (index * 50)}
            >
              {/* Timeline Point */}
              <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transform -translate-x-1/2 md:-translate-x-1/2 border-4 border-white z-10">
                <div className={`w-full h-full rounded-full flex items-center justify-center bg-${item.color}-100 text-${item.color}-600`}>
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="md:w-1/2 ml-12 md:ml-0 md:px-12 md:mx-0">
                <div className={`bg-white rounded-lg shadow-lg p-6 border-l-4 border-${item.color}-500 md:transform ${
                  index % 2 === 0 ? 'md:-translate-x-4' : 'md:translate-x-4'
                }`}>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-${item.color}-100 text-${item.color}-600 mb-4`}>
                    {item.years}
                  </span>
                  {item.achievement && (
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-success-100 text-success-700 mb-4 ml-2">
                      {item.achievement}
                    </span>
                  )}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.institution}</h3>
                  <h4 className="text-lg font-medium text-primary-600 mb-3">{item.degree}</h4>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;