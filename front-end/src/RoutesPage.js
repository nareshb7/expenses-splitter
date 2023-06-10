import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import CreateRoom from './pages/create_room/CreateRoom'
import Signup from './pages/signup/Signup'
import Dashboard from './pages/dashboard/Dashboard'

const RoutesPage = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='login' element={<Login/>}/>
      <Route path='createroom' element={<CreateRoom/>}/>
      <Route path='signup' element={<Signup/>} />
      <Route path='dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default RoutesPage