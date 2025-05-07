import React,{useState} from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Textarea } from '@/components/ui/textarea'
import { coachingExpert } from '@/services/Options'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
export const CoachingExpertGrid = ({ coachingExpert }) => {
    const [selectedTeacher, setSelectedTeacher] = useState(null);
    
    return (
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6'>
        {coachingExpert.map((teacher, index) => (
          <div 
            key={index}
            onClick={() => setSelectedTeacher(selectedTeacher === index ? null : index)}
            className={`cursor-pointer transition-all duration-300 hover:scale-105 p-2 rounded-xl
              ${selectedTeacher === index ? 'border-2 border-blue-500' : 'border-2 border-transparent'}`}
          >
            <Image 
              src={teacher.avatar} 
              alt={teacher.name}
              width={100}
              height={100}
              className="mt-4 mx-auto rounded-2xl w-20 h-20 object-cover"
            />
            <h2 className='text-center mt-2'>{teacher.name}</h2>
          </div>
        ))}
      </div>
    
    );
  };
function Userinput({children,coachingOption}) {
  
  return (
    <div>
      <Dialog>
  <DialogTrigger>{children}</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>{coachingOption.name}</DialogTitle>
      <DialogDescription>
       <div className='mt-3'>
        <h2 className='text-black'>Enter a topic to learn in {coachingOption.name}</h2>
        <Textarea placeholder="Enter Your Topic:" className="mt-2"/>

        {/* <div className='grid grid-cols-3 md:grid-cols-5 gap-6 '>
           {coachingExpert.map((teacher,index)=>(
            <div key={index}>
                <Image src={teacher.avatar} alt={teacher.name}
                width={100} height={100} className="mt-3 rounded-2xl h-{80px} w={80px} object-cover"/>
                <h2 className='text-center'>{teacher.name}</h2>
            </div>

           ))} 
        </div> */}
{/* <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6'>
      {coachingExpert.map((teacher, index) => (
        <div 
          key={index}
          onClick={() => setSelectedTeacher(selectedTeacher === index ? null : index)}
          className={`cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 p-2 rounded-xl
            ${selectedTeacher === index ? 'border-2 border-blue-500' : 'border-2 border-transparent'}`}
        >
          <Image 
            src={teacher.avatar} 
            alt={teacher.name}
            width={100}
            height={100}
            className="mt-3 mx-auto rounded-2xl w-20 h-20 object-cover"
          />
          <h2 className='text-center mt-2 font-medium'>{teacher.name}</h2>
        </div>
      ))}
    </div> */}
       <CoachingExpertGrid coachingExpert={coachingExpert} />
       <Button>
        Cancel
        </Button>
       </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default Userinput;
