"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowRight, Brain, Target, Trophy, Users } from "lucide-react";

const features = [
  {
    icon: <Brain className="h-6 w-6 text-white dark:text-gray-900" />,
    title: "AI-Powered Questions",
    description: "Get personalized interview questions based on your field and experience level."
  },
  {
    icon: <Target className="h-6 w-6 text-white dark:text-gray-900" />,
    title: "Instant Feedback",
    description: "Receive detailed feedback and scores to improve your answers."
  },
  {
    icon: <Trophy className="h-6 w-6 text-white dark:text-gray-900" />,
    title: "Track Progress",
    description: "Monitor your improvement over time with detailed analytics."
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer at Google",
    text: "SEEKHO helped me prepare for my technical interviews. The AI-generated questions were spot on!"
  },
  {
    name: "Michael Rodriguez",
    role: "Product Manager at Amazon",
    text: "The feedback system is incredible. It helped me identify areas I needed to improve."
  },
  {
    name: "Emily Thompson",
    role: "Data Scientist at Microsoft",
    text: "I landed my dream job thanks to the practice I got with SEEKHO. Highly recommended!"
  }
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">SEEKHO</span>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link href="/courses">
                <Button className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                Master Your Interview Skills with AI
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Practice with personalized interview questions, get instant feedback, and improve your chances of landing your dream job.
              </p>
              <div className="flex gap-4">
                <Link href="/courses">
                  <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
                    Start Practicing
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              {/* Replace with your hero image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                Hero Image Placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Why Choose SEEKHO?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Everything you need to ace your next interview
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 rounded-lg bg-gray-900 dark:bg-white flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Success Stories
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Hear from our users who landed their dream jobs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    <Users className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Ace Your Next Interview?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Join thousands of learners who have improved their interview skills with SEEKHO.
          </p>
          <Link href="/courses">
            <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
              Start Practicing Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
