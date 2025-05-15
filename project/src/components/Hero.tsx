import React from 'react';
import { Link } from 'react-scroll';
import { Download, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20"
    >
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div data-aos="fade-down" data-aos-delay="100">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
              Hi, I'm 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500"> Kavya Jayasree</span>
            </h1>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="200">
            <p className="text-xl md:text-2xl font-medium mb-8 text-gray-700">
              Tech Explorer | Education Enthusiast | Future Innovator
            </p>
          </div>
          
          <div 
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-8 py-3 bg-primary-600 text-white font-medium rounded-full hover:bg-primary-700 transition duration-300 shadow-lg hover:shadow-primary-500/20 flex items-center justify-center"
            >
              Explore More
              <ChevronDown className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="#"
              className="px-8 py-3 bg-white text-primary-600 font-medium rounded-full border border-primary-600 hover:bg-primary-50 transition duration-300 shadow-lg flex items-center justify-center"
              onClick={(e) => e.preventDefault()}
            >
              Download Resume
              <Download className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-primary-600 cursor-pointer"
        >
          <ChevronDown className="h-8 w-8" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;