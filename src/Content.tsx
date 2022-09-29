import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import App from './App'
import NavigationBar from './components/NavigationBar'
import Recommendations from './pages/Recommendations'
import WallOfClients from './pages/WallOfClients'

const Content = () => {
  return (
    <>
    <NavigationBar />
    <Routes>
      <Route path='/clients' element={<WallOfClients />} />
      <Route path='/recommendations' element={<Recommendations />} />
      <Route path='/' element={ <Navigate to="/clients" /> } />
    </Routes>
    </>
  )
}

export default Content