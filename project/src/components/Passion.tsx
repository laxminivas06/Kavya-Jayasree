import React from 'react';
import { Monitor, BookOpen, PenTool, Code } from 'lucide-react';

const passionItems = [
  {
    title: "Tech-Integrated Education",
    icon: <Monitor className="w-10 h-10 text-primary-600" />,
    description: "Passionate about using technology to enhance educational experiences, making learning more interactive and accessible for all students.",
    color: "primary"
  },
  {
    title: "Student Mentorship",
    icon: <BookOpen className="w-10 h-10 text-secondary-600" />,
    description: "Dedicated to guiding fellow students, sharing knowledge, and helping others overcome challenges in their learning journey.",
    color: "secondary"
  },
  {
    title: "Creative Learning",
    icon: <PenTool className="w-10 h-10 text-accent-600" />,
    description: "Enthusiastic about finding innovative ways to approach education, incorporating creativity to make complex concepts more engaging and memorable.",
    color: "accent"
  },
  {
    title: "Real-World Projects",
    icon: <Code className="w-10 h-10 text-success-500" />,
    description: "Excited about developing practical applications that solve actual problems, bridging the gap between theory and real-world implementation.",
    color: "success"
  }
];

const Passion = () => {
  return (
    <section id="passion" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            My Passions
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
            What drives me and brings purpose to my educational and professional journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {passionItems.map((item, index) => (
            <div 
              key={item.title}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className={`absolute inset-0 bg-${item.color}-600 opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center p-6`}>
                <p className="text-white text-center font-medium">{item.description}</p>
              </div>
              
              <div className="bg-white p-8 flex flex-col items-center text-center">
                <div className={`bg-${item.color}-100 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <div className={`w-10 h-1 bg-${item.color}-500 transition-all duration-300 group-hover:w-20`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Passion;