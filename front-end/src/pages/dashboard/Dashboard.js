import React from 'react'
import Time from '../../utils/Time'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

const Dashboard = () => {
  return (
    <div style={{display:'flex'}}>
        <LeftSidebar />
        <RightSidebar />        
    </div>
  )
}

export default Dashboard