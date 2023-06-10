import React, { useState } from 'react'

const TodayDate = () => {
    const [date,setDate] = useState('')
    setTimeout(()=> {
        const d = new Date().toLocaleDateString()
        setDate(d)
    },1000)
  return (
    <div style={{fontWeight:'600', fontSize: '18px'}}>{date}</div>
  )
}

export default TodayDate