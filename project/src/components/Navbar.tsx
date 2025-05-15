import { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { Link } from 'react-scroll';

const navLinks = [
  { name: 'Home', target: 'hero' },
  { name: 'About', target: 'about' },
  { name: 'Skills', target: 'skills' },
  { name: 'Education', target: 'education' },
  { name: 'Experience', target: 'experience' },
  { name: 'Passion', target: 'passion' },
  { name: 'Vision', target: 'vision' },
  { name: 'Ambition', target: 'ambition' },
  { name: 'Contact', target: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link 
            to="hero" 
            spy={true} 
            smooth={true} 
            duration={500}
            className="flex items-center cursor-pointer"
          >
            <BookOpen className="h-6 w-6 text-primary-600 mr-2" />
            <span className={`text-xl font-bold ${scrolled ? 'text-primary-700' : 'text-primary-600'}`}>
              Kavya Jayasree
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.target}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`text-sm font-medium ${
                scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-gray-800 hover:text-primary-500'
              } cursor-pointer transition duration-300`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-primary-600" />
          ) : (
            <Menu className="h-6 w-6 text-primary-600" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="px-4 py-2 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.target}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block py-2 px-4 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition duration-300 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;