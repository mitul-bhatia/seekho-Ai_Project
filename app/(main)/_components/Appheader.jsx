import React from 'react'
import Image from 'next/image'
import { UserButton } from '@stackframe/stack'
const Appheader = () => {
  return (
    <div className='p-1 shaddom-sm flex justify-between items-center border-2 '  >
        <Image src={'/logo.svg'} width={150}
        height={150} className='mb-2'/>
        <div style={{
          marginRight: '10px',

        }}><UserButton/></div>
         
    </div>
  )
}

export default Appheader
