import React from 'react';
import { LightbulbIcon } from '../icons/LightbulbIcon';

const Vision = () => {
  return (
    <section id="vision" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            My Vision
          </h2>
          <div 
            className="w-20 h-1 bg-primary-600 mx-auto mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          ></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div 
            className="w-full md:w-2/5 mb-8 md:mb-0"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="flex justify-center">
              <LightbulbIcon />
            </div>
          </div>

          <div 
            className="w-full md:w-3/5"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary-600">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                To inspire and impact through education powered by innovation and practical technology.
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I envision a future where education is not confined to traditional methods but is enriched by technological innovations that make learning more engaging, personalized, and effective. My goal is to be at the forefront of this transformation, creating educational experiences that inspire curiosity and foster practical skills.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By combining my passion for technology with my dedication to education, I aim to develop solutions that address real challenges in the learning process and prepare students for a rapidly evolving digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;