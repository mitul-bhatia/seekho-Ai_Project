import React from 'react'
import Featureasssistant from './components/Featureasssistant'
import Feedback from './components/feedback'
import History from './components/history'

const Dashboard = () => {
  return (
    <div>
      <Featureasssistant/>
      <div>
      <Feedback/>
      <History/>
      </div>
    </div>
  )
}

export default Dashboard
