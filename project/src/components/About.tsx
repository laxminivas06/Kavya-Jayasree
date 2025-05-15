import React from 'react';
import { Award, Heart, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            About Me
          </h2>
          <div 
            className="w-20 h-1 bg-primary-600 mx-auto mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          ></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div 
            className="md:w-2/5"
            data-aos="fade-right"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden mx-auto border-4 border-primary-100 shadow-xl">
                <img 
                  src="https://cdn.britannica.com/48/222648-050-F4D0A2D8/President-of-India-A-P-J-Abdul-Kalam-2007.jpg" 
                  alt="Kavya Jayasree" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg">
                <Award className="w-10 h-10 text-primary-600" />
              </div>
            </div>
          </div>

          <div 
            className="md:w-3/5"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Tech Explorer & Education Enthusiast
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm Kavya, a passionate student of Data Science with a deep interest in the intersection of technology and education. I believe in the power of combining theoretical knowledge with practical application to create meaningful learning experiences.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              My journey is guided by curiosity, dedication, and a commitment to making a difference through innovative educational approaches. I'm constantly exploring new technologies and methodologies that can enhance the learning process and make education more accessible and engaging.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Heart className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Passionate</h4>
                  <p className="text-sm text-gray-600">Driven by a love for learning and teaching</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-secondary-100 p-3 rounded-full mr-4">
                  <Zap className="w-5 h-5 text-secondary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Innovative</h4>
                  <p className="text-sm text-gray-600">Exploring creative solutions to educational challenges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;