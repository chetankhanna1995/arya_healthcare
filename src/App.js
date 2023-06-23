import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from '../src/Components/Home_page/Home'
import About from "./Components/About_page/About"
import Contact from './Components/Contact_page/Contact'
import Products from "./Components/Products_page/Products"
import Footer from './Components/Footer_page/Footer'
import "./App.css"

const App = () => {
  return (
    <div >
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/products' element={< Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={< Contact />} />
      </Routes>
      <Footer />
    </div>

  )
}

export default App