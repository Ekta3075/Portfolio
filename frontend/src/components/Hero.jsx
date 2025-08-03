import React from 'react';
import { Button } from './ui/button';
import { Download, Mail, Github, Linkedin, GraduationCap } from 'lucide-react';
import { personalInfo } from '../mockData';

const Hero = () => {
  const handleDownloadResume = () => {
    window.open(personalInfo.resumeUrl, '_blank');
  };

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

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-12">

          {/* 👤 Profile Photo */}
          <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-lg border-4 border-blue-100">
            <img
              src="/ektapic.jpg"
              alt="Ekta's Profile"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
            {personalInfo.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            {personalInfo.tagline}
          </p>

          <div className="flex items-center justify-center gap-2 mb-8">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            <p className="text-gray-700 font-medium">{personalInfo.education}</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button 
            onClick={handleDownloadResume}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => handleContactClick('email')}
            className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          <Button
            variant="ghost"
            size="lg"
            onClick={() => handleContactClick('linkedin')}
            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="lg"
            onClick={() => handleContactClick('github')}
            className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </Button>
        </div>

        <div className="mt-16">
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
              <div className="text-gray-600 font-medium">Internships</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-gray-600 font-medium">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
              <div className="text-gray-600 font-medium">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
