import React from 'react'
import Appheader from './_components/Appheader'

const DashboardLayout = ({children}) => {
  return (
    <div >
        <Appheader />
        <div  className='p-10 mt-20 md:px-20 lg:px-32 xl:px-56 2xl:px-72'>{children}</div>
        
    </div>
  )
}

export default DashboardLayout
