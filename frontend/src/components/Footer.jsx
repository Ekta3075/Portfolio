import React from 'react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Mail, Linkedin, Github, Download, ArrowUp } from 'lucide-react';
import { personalInfo } from '../mockData';

const Footer = () => {
  const handleContactClick = (type) => {
    switch(type) {
      case 'email':
        window.location.href = `mailto:${personalInfo.email}`;
        break;
      case 'linkedin':
        window.open(personalInfo.linkedin, '_blank');
        break;
      case 'github':
        window.open(personalInfo.github, '_blank');
        break;
      default:
        break;
    }
  };

  const handleDownloadResume = () => {
    window.open(personalInfo.resumeUrl, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Call to Action Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-light mb-6">
            Let's Work Together
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Ready to turn data into insights? Let's discuss how we can collaborate on your next project.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              onClick={() => handleContactClick('email')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline"
              onClick={handleDownloadResume}
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Personal Info */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">{personalInfo.name}</h4>
            <p className="text-gray-300 mb-4">{personalInfo.tagline}</p>
            <p className="text-gray-400 text-sm">{personalInfo.education}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold mb-4 text-gray-200">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a href="#experience" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#certifications" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Certifications
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-semibold mb-4 text-gray-200">Connect</h5>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  {personalInfo.email}
                </a>
              </div>
              
              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleContactClick('linkedin')}
                  className="text-gray-400 hover:text-blue-400 hover:bg-gray-800 p-2"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleContactClick('github')}
                  className="text-gray-400 hover:text-gray-200 hover:bg-gray-800 p-2"
                >
                  <Github className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 {personalInfo.name}. Built with React & Tailwind CSS.
          </p>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-gray-400 hover:text-blue-400 hover:bg-gray-800"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;