import React from 'react'
import Appheader from './_components/Appheader'

const DashboardLayout = ({children}) => {
  return (
    <div>
        <Appheader />
        {children}
    </div>
  )
}

export default DashboardLayout
