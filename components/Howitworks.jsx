"use client"
import React from "react";
export default function HowItWorksSection ()  {
    const steps = [
      {
        number: "01",
        title: "Sign Up",
        description: "Create your account and tell us about your learning goals."
      },
      {
        number: "02",
        title: "Choose Subjects",
        description: "Select the topics you want to learn or improve upon."
      },
      {
        number: "03",
        title: "Complete Assessment",
        description: "Take a quick assessment so we can personalize your learning path."
      },
      {
        number: "04",
        title: "Start Learning",
        description: "Begin your personalized lessons with our AI tutor guiding you every step of the way."
      }
    ];
  
    return (
      <section id="how-it-works" className="py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Getting started with Seekho is simple. Follow these steps to begin your learning journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mb-6">
                  <span className="text-blue-800 font-bold text-xl">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-100 -z-10 transform -translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  