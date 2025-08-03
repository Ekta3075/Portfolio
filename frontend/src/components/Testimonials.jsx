import React from 'react';
import { Card, CardContent } from './ui/card';
import { Quote } from 'lucide-react';
import { testimonials } from '../mockData';

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            What People Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Feedback from mentors and colleagues on professional collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-blue-50 to-indigo-50"
            >
              <CardContent className="p-8">
                <Quote className="w-12 h-12 text-blue-400 mb-6" />
                
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-blue-600 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;