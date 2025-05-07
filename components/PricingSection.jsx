"use client"
import React from "react";
import { Button } from "./ui/button";
export default function PricingSection  ()  {
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