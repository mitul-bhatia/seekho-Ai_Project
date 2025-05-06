import React from 'react'
import Featureasssistant from './components/Featureasssistant'
import Feedback from './components/feedback'
import History from './components/history'

const Dashboard = () => {
  return (
    <div>
      <Featureasssistant/>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-21'>
      <Feedback/>
      <History/>
      </div>
    </div>
  )
}

export default Dashboard
