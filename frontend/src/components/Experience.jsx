import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Building2, Calendar, CheckCircle } from 'lucide-react';
import { experiences } from '../mockData';

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hands-on experience in data analytics and AI/ML through impactful internships
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block z-10"></div>
                
                {/* Content card */}
                <div className="w-full md:w-5/12">
                  <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-white to-blue-50">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Building2 className="w-6 h-6 text-blue-600" />
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                          {exp.duration}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl font-semibold text-gray-900 mb-2">
                        {exp.role}
                      </CardTitle>
                      <p className="text-blue-600 font-medium text-lg">
                        {exp.company}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <p className="text-gray-700 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, idx) => (
                            <Badge key={idx} variant="outline" className="bg-white border-blue-200 text-blue-700 hover:bg-blue-50">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Empty space for timeline balance */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;