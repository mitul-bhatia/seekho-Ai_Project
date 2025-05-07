"use client"
import React from 'react'
import { useUser } from '@stackframe/stack'
import { Button } from '@/components/ui/button';
import { ExpertsList } from '@/services/Options';
import { BlurFade } from '@/components/magicui/blur-fade';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { TypingAnimation } from "@/components/magicui/typing-animation";
import Userinput from './Userinput';
function Featureasssistant() {
    const user= useUser();
  return (
    <div>
    <div className='flex justify-between items-center mr-10'>
    
        <div className="max-w-4xl mx-auto px-6 py-10">
         
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">My Space</h2>
            <h3 className="text-2xl text-gray-800 mb-2">
            Welcome to your learning world, <span className="font-semibold text-indigo-600">{user.displayName}</span>
            </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                <TypingAnimation>
                    Welcome to your personal space,</TypingAnimation>
                      </p>

              </div>
              {/* <p className="text-lg text-gray-700 leading-relaxed">
                <TypingAnimation>
                    Welcome to your personal space,</TypingAnimation>
                      </p> */}
    <Button>Profile</Button>

  </div>

<div className='ml-15 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8 lg:gap-10 mt-10'>
  {ExpertsList.map((options, index) => (
    <BlurFade key={options.icon} delay={0.25 + index * 0.05} inView>
  <Userinput coachingOption={options}>
    <div
      key={index}
      className=' p-4 bg-secondary rounded-3xl flex flex-col justify-center items-center shadow-md hover:shadow-xl transform transition duration-300 hover:scale-110 cursor-pointer'
    >
      <div className='bg-white rounded-full p-3 mb-3'>
        <Image
          src={options.icon}
          alt={options.name}
          width={80}
          height={80}
          className='h-16 w-16 object-contain'
        />
      </div>
      <h2 className='mt-2 text-center text-sm sm:text-base font-semibold text-gray-800 hover:text-blue-700'>
        {options.name}
      </h2>
    </div>
    </Userinput>
    </BlurFade>
  ))}

</div>


  </div>
)}
  
  

export default Featureasssistant
