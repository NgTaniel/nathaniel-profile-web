// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar'
import RootPage from '../pages/RootPage'
import AboutPage from '../pages/AboutPage'

const App = () => {
  return (
    <>
    <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>   
    </BrowserRouter>
    </>
    // <div>Hello</div>
  )
}

export default App
