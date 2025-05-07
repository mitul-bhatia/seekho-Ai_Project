"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { UserButton } from "@stackframe/stack";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white py-4 px-6 md:px-12 fixed w-full top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-blue-900 rounded-full flex items-center justify-center">
            <div className="h-6 w-6 border-4 border-white rounded-full"></div>
          </div>
          <span className="text-2xl font-bold text-blue-900">SEEKHO</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-blue-800 transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-blue-800 transition-colors">How It Works</a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-800 transition-colors">Testimonials</a>
          <a href="#pricing" className="text-gray-700 hover:text-blue-800 transition-colors">Pricing</a>
          <Button className="bg-blue-800 hover:bg-blue-700">Sign Up Free</Button>
        </div>
        
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-6 flex flex-col space-y-4 z-50">
          <a href="#features" className="text-gray-700 hover:text-blue-800 transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-blue-800 transition-colors" onClick={() => setIsMenuOpen(false)}>How It Works</a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-800 transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
          <a href="#pricing" className="text-gray-700 hover:text-blue-800 transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</a>
          <Button className="bg-blue-800 hover:bg-blue-700 w-full">Sign Up Free</Button>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Learning Made Simple</h1>
            <p className="text-lg text-blue-100 mb-8">
              Personalized education at your fingertips. Our AI tutor adapts to your learning style
              and helps you master any subject with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-blue-800 hover:bg-blue-50 text-lg px-8 py-6">
                Get Started
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-blue-700 text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="bg-gray-200 h-64 w-full rounded flex items-center justify-center">
                <p className="text-gray-500">App Screenshot Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: "AI Tutoring",
      description: "Get personalized help from our advanced AI tutors who adapt to your learning style.",
      icon: "🤖"
    },
    {
      title: "Interactive Exercises",
      description: "Practice with engaging exercises designed to reinforce your understanding.",
      icon: "✏️"
    },
    {
      title: "Progress Tracking",
      description: "Monitor your growth with detailed analytics and performance insights.",
      icon: "📊"
    },
    {
      title: "24/7 Availability",
      description: "Learn anytime, anywhere with round-the-clock access to educational resources.",
      icon: "🕒"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features That Set Us Apart</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with proven educational methods to create a learning experience unlike any other.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
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

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Student",
      content: "Seekho has transformed my learning experience. I was struggling with calculus, but the AI tutor made complex concepts so much easier to understand.",
      avatar: "👩‍🎓"
    },
    {
      name: "Michael Chen",
      role: "Parent",
      content: "My son's grades improved dramatically after using Seekho for just two months. The personalized approach really works!",
      avatar: "👨‍💼"
    },
    {
      name: "Priya Patel",
      role: "Teacher",
      content: "As an educator, I recommend Seekho to all my students who need additional support. It's like having a personal tutor available 24/7.",
      avatar: "👩‍🏫"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from students, parents, and educators who have experienced the Seekho difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Basic access to get you started",
      features: [
        "1 subject of your choice",
        "Basic AI tutoring",
        "Limited practice exercises",
        "Basic progress tracking"
      ],
      buttonText: "Start Free",
      highlighted: false
    },
    {
      name: "Standard",
      price: "$9.99",
      period: "per month",
      description: "Perfect for most students",
      features: [
        "3 subjects of your choice",
        "Advanced AI tutoring",
        "Unlimited practice exercises",
        "Detailed progress analytics",
        "Study schedule planning"
      ],
      buttonText: "Subscribe Now",
      highlighted: true
    },
    {
      name: "Premium",
      price: "$19.99",
      period: "per month",
      description: "Comprehensive learning solution",
      features: [
        "Unlimited subjects",
        "Priority AI tutoring",
        "Advanced practice exercises",
        "Comprehensive analytics",
        "Study schedule planning",
        "Parent/teacher dashboard",
        "24/7 support"
      ],
      buttonText: "Get Premium",
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include access to our core platform features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-lg shadow-md overflow-hidden ${plan.highlighted ? 'ring-2 ring-blue-500' : ''}`}>
              <div className={`p-6 ${plan.highlighted ? 'bg-blue-50' : ''}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 ml-1">/{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <Button className={`w-full py-2 ${plan.highlighted ? 'bg-blue-800' : 'bg-gray-800'}`}>
                  {plan.buttonText}
                </Button>
              </div>
              <div className="p-6 bg-gray-50">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Start Your Learning Journey Today
        </h2>
        <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
          Join thousands of students who have transformed their learning experience with Seekho's AI-powered tutoring platform.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-blue-800 hover:bg-blue-50 text-lg px-8 py-6">
            Sign Up Free
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-blue-700 text-lg px-8 py-6">
            Request Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 bg-blue-700 rounded-full flex items-center justify-center">
                <div className="h-6 w-6 border-4 border-white rounded-full"></div>
              </div>
              <span className="text-2xl font-bold text-white">SEEKHO</span>
            </div>
            <p className="text-gray-400">
              Making quality education accessible to everyone through the power of AI.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                📱
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                📸
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
            </div>
            <p className="text-gray-400">Subscribe to our newsletter</p>
            <div className="mt-2 flex">
              <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l text-gray-900 flex-grow" />
              <button className="bg-blue-700 px-4 py-2 rounded-r hover:bg-blue-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Seekho Learning, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};