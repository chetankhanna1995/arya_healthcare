import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import NavigationBar from './Components/Navbar/NavigationBar'
import Home from './Components/Home_page/Home'
import About from "./Components/About_page/About"
import Contact from './Components/Contact_page/Contact'
import Products from "./Components/Products_page/Products"
import Footer from './Components/Footer_page/Footer'
import "./App.css"

const App = () => {
  return (
    <div >
      <NavigationBar />
      <Routes >
        <Route path='/' element={< Home />} />
        <Route path='/products' element={< Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={< Contact />} />
      </Routes>
      <Footer />
    </div>

  )
}

export default App