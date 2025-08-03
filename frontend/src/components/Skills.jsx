import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Database, Brain, Wrench, Sparkles } from 'lucide-react';
import { skills } from '../mockData';

const Skills = () => {
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Data Analysis':
        return <Database className="w-6 h-6 text-blue-600" />;
      case 'Machine Learning':
        return <Brain className="w-6 h-6 text-purple-600" />;
      case 'Programming':
        return <Code className="w-6 h-6 text-green-600" />;
      case 'Tools & Platforms':
        return <Wrench className="w-6 h-6 text-orange-600" />;
      case 'Specializations':
        return <Sparkles className="w-6 h-6 text-pink-600" />;
      default:
        return <Code className="w-6 h-6 text-gray-600" />;
    }
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Data Analysis':
        return 'from-blue-50 to-blue-100 border-blue-200';
      case 'Machine Learning':
        return 'from-purple-50 to-purple-100 border-purple-200';
      case 'Programming':
        return 'from-green-50 to-green-100 border-green-200';
      case 'Tools & Platforms':
        return 'from-orange-50 to-orange-100 border-orange-200';
      case 'Specializations':
        return 'from-pink-50 to-pink-100 border-pink-200';
      default:
        return 'from-gray-50 to-gray-100 border-gray-200';
    }
  };

  const getSkillBadgeColor = (category) => {
    switch(category) {
      case 'Data Analysis':
        return 'bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200';
      case 'Machine Learning':
        return 'bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200';
      case 'Programming':
        return 'bg-green-100 text-green-700 border-green-200 hover:bg-green-200';
      case 'Tools & Platforms':
        return 'bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-200';
      case 'Specializations':
        return 'bg-pink-100 text-pink-700 border-pink-200 hover:bg-pink-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200';
    }
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for data science, machine learning, and software development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <Card 
              key={index} 
              className={`shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border bg-gradient-to-br ${getCategoryColor(skillCategory.category)}`}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl font-semibold text-gray-900">
                  {getCategoryIcon(skillCategory.category)}
                  {skillCategory.category}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      className={`${getSkillBadgeColor(skillCategory.category)} border transition-all duration-200 hover:scale-105 cursor-pointer`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Level Indicators */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Proficiency Levels
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                A
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Advanced</h4>
              <p className="text-sm text-gray-600">Python, Power BI, Data Analysis, Machine Learning</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                I
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Intermediate</h4>
              <p className="text-sm text-gray-600">TensorFlow, AWS, Deep Learning, NLP</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                L
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Learning</h4>
              <p className="text-sm text-gray-600">Generative AI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;