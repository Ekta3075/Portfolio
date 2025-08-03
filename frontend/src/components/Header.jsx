import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Download } from 'lucide-react';
import { personalInfo } from '../mockData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleDownloadResume = () => {
    window.open(personalInfo.resumeUrl, '_blank');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300"
            >
              {personalInfo.name.split(' ').map(n => n[0]).join('')}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('certifications')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Certifications
            </button>
            <Button 
              onClick={handleDownloadResume}
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg border border-gray-200">
            <nav className="flex flex-col space-y-4 px-4">
              <button
                onClick={() => scrollToSection('experience')}
                className="text-gray-700 hover:text-blue-600 font-medium text-left transition-colors duration-300"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-700 hover:text-blue-600 font-medium text-left transition-colors duration-300"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-gray-700 hover:text-blue-600 font-medium text-left transition-colors duration-300"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('certifications')}
                className="text-gray-700 hover:text-blue-600 font-medium text-left transition-colors duration-300"
              >
                Certifications
              </button>
              <Button 
                onClick={handleDownloadResume}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white w-full justify-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;