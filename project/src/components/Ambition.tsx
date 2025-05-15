import React from 'react';
import { Target, ArrowUp } from 'lucide-react';

const Ambition = () => {
  return (
    <section id="ambition" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            My Ambition
          </h2>
          <div 
            className="w-20 h-1 bg-primary-600 mx-auto mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          ></div>
        </div>

        <div 
          className="max-w-4xl mx-auto bg-gradient-to-r from-primary-500 to-secondary-600 rounded-lg shadow-xl overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="md:flex">
            <div className="md:w-1/3 flex items-center justify-center p-8 bg-white">
              <div className="relative">
                <div className="w-40 h-40 rounded-full bg-primary-100 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-primary-200 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-primary-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary-400 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center">
                          <Target className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-2 rounded-full shadow-lg">
                  <div className="bg-success-500 rounded-full p-2">
                    <ArrowUp className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 p-8 md:p-10 text-white">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/30 pb-4">
                Future Goals
              </h3>
              <p className="mb-6 leading-relaxed">
                "To build a platform that bridges practical and theoretical learning, and grow into a tech leader who makes a difference in education."
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-1">
                    <div className="h-3 w-3 rounded-full bg-white"></div>
                  </div>
                  <p>Develop innovative educational tools that make complex concepts accessible to all learners</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-1">
                    <div className="h-3 w-3 rounded-full bg-white"></div>
                  </div>
                  <p>Lead initiatives that promote the integration of practical learning with theoretical knowledge</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-1">
                    <div className="h-3 w-3 rounded-full bg-white"></div>
                  </div>
                  <p>Foster a community that values education, innovation, and collaborative problem-solving</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ambition;