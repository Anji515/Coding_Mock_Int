import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../Pages/MainPage'
import History from '../Pages/History'
import Teams from '../Pages/Teams'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/teams' element={<Teams/>}/>
    </Routes>
  )
}

export default MainRoutes