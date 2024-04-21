import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar'
import RootPage from '../pages/RootPage'
import AboutPage from '../pages/AboutPage'
import ExperiencePage from '../pages/ExperiencePage'
import ContactPage from '../pages/ContactPage'

const App = () => {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<RootPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/experience' element={<ExperiencePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>   
    </BrowserRouter>
    </>
  )
}

export default App
