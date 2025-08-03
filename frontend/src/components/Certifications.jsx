import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Award, Calendar } from 'lucide-react';
import { certifications } from '../mockData';

const Certifications = () => {
  const getCategoryColor = (category) => {
    switch(category) {
      case 'Data Analytics':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Data Visualization':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Business Intelligence':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Remote Sensing':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Cloud Computing':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Generative AI':
        return 'bg-pink-100 text-pink-700 border-pink-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development across various domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-white group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Award className="w-8 h-8 text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300" />
                  <Badge variant="outline" className="text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    {cert.year}
                  </Badge>
                </div>
                
                <CardTitle className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {cert.name}
                </CardTitle>
                
                <p className="text-blue-600 font-medium">
                  {cert.issuer}
                </p>
              </CardHeader>
              
              <CardContent>
                <Badge className={`${getCategoryColor(cert.category)} border`}>
                  {cert.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">6+</div>
              <div className="text-gray-600 font-medium">Certifications</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">4</div>
              <div className="text-gray-600 font-medium">Domains</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">2024</div>
              <div className="text-gray-600 font-medium">Latest Year</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Completion Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;