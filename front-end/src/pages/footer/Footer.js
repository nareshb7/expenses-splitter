import { Layout } from 'antd'
import React from 'react'

const Footer = () => {
  return (
    <div style={{display:'flex', justifyContent:'space-around',}}>
      <div>
        <img src='#' alt='logo' />
      </div>
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
      <ul>
        <li>Home</li>
        <li>Room</li>
        <li>Create</li>
      </ul>
    </div>
  )
}

export default Footer