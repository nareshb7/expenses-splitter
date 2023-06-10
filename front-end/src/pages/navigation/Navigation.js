import { Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import Time from '../../utils/Time'
import TodayDate from '../../utils/Date'

const Navigation = () => {
  const navItems = [
    {label:'Home', path: '/'},
    {label:'Login', path: '/login'},
    {label:'Create Room', path: '/createRoom'},
    {label:'', node: TodayDate},
    {label:'', node: Time },
  ]
  return (
    <div>
      <div className='demo-logo'></div>
      <Menu
       theme='dark'
       mode='horizontal'
       items={navItems.map((item , idx)=> {
        return {
          label: item.label,
          icon: item.node ? React.createElement(item.node) : <Link to={item.path}/>
        }
       })}
       />
    </div>
  )
}

export default Navigation