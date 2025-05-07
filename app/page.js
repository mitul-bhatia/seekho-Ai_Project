"use client";
import Link from 'next/link'
import React, { useState } from 'react';
import Image from "next/image";
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { UserButton } from "@stackframe/stack";
import Navbar from '@/components/navbar';
import HowItWorksSection from '@/components/Howitworks';
import PricingSection from '@/components/PricingSection';

export default function Home() {
  return (
    <main className=" flex flex-col">
 
      <Navbar/>
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Learning Made Simple</h1>
            <p className="text-lg text-blue-100 mb-8">
              Personalized education at your fingertips. Our AI tutor adapts to your learning style
              and helps you master any subject be it dsa or webdev.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-blue-800 hover:bg-blue-50 text-lg px-8 py-6" >
                <Link href={"/dashboard"}>Get Started</Link>
              </Button>
              <Button variant="outline" className="border-white text-black hover:bg-blue-700 text-lg px-8 py-6">
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
      <HowItWorksSection />
    <PricingSection/>

   
      <Footer />
    </main>
  );
}






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
          
     
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p> Seekho Learning, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};