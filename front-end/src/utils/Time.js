import React, { useState } from 'react'

const Time = () => {
    const [time,setTime] = useState('')
    setTimeout(()=> {
        const d = new Date().toLocaleTimeString()
        setTime(d) 
    },1000)
  return (
    <div style={{fontWeight:'600', fontSize: '18px'}}>{time}</div>
  )
}


export default Time
