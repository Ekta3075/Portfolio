import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { ChevronDown, ChevronUp, Github, ExternalLink, Zap, Target } from 'lucide-react';
import { projects } from '../mockData';

const Projects = () => {
  const [openProjects, setOpenProjects] = useState({});

  const toggleProject = (projectId) => {
    setOpenProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Data Analytics':
        return '📊';
      case 'AI/ML':
        return '🤖';
      case 'NLP':
        return '🧠';
      default:
        return '💻';
    }
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Data Analytics':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'AI/ML':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'NLP':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions combining data science, machine learning, and practical applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Collapsible key={project.id} open={openProjects[project.id]}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-white overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={`${getCategoryColor(project.category)} border`}>
                      {getCategoryIcon(project.category)} {project.category}
                    </Badge>
                    <CollapsibleTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => toggleProject(project.id)}
                        className="text-gray-500 hover:text-blue-600"
                      >
                        {openProjects[project.id] ? 
                          <ChevronUp className="w-4 h-4" /> : 
                          <ChevronDown className="w-4 h-4" />
                        }
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </CardTitle>
                  
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs bg-blue-50 border-blue-200 text-blue-700">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs bg-gray-50 border-gray-200 text-gray-500">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <CollapsibleContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-500" />
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 ml-6">
                            • {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4 text-green-500" />
                        Impact:
                      </h4>
                      <p className="text-sm text-gray-600 bg-green-50 p-3 rounded-lg border border-green-200">
                        {project.impact}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">All Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs bg-blue-50 border-blue-200 text-blue-700">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CollapsibleContent>

                  <div className="flex gap-2 pt-4 border-t border-gray-100">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => window.open(project.github, '_blank')}
                      className="flex-1 text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm"
                      onClick={() => window.open(project.demo, '_blank')}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;