import React from 'react'
import Image from 'next/image'
const Appheader = () => {
  return (
    <div>
        <Image src={'/logo.svg'} width={150}
        height={150} className='border-3 border-black '/>
      
    </div>
  )
}

export default Appheader
