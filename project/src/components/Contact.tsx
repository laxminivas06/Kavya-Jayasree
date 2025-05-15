import React, { useState } from 'react';
import { Mail, Phone, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset the submitted state after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            Get In Touch
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
            Feel free to reach out if you have any questions or want to connect!
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div 
              className="md:w-2/5 bg-gradient-to-r from-primary-600 to-secondary-600 p-8 text-white"
              data-aos="fade-right"
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="mb-8">I'd love to hear from you! Whether you have a question or just want to say hello, feel free to drop me a message.</p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Email</p>
                    <p>KavyaJayasree@redgmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Phone</p>
                    <p>+91 901033713</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <p className="text-sm mb-4">Connect with me</p>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div 
              className="md:w-3/5 p-8"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              
              {submitted ? (
                <div className="bg-success-50 border border-success-500 rounded-lg p-6 text-success-700 flex items-center mb-6">
                  <div className="bg-success-100 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm">I'll get back to you as soon as possible.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-300"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;