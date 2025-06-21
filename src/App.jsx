import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Project from './component/Project'
import Exprince from './component/Exprince'
import Footer from './component/Footer'
import Contactus from './component/Contactus'
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <>
      <div>
        
        <Navbar />
        <Home />
        <About />
        <Project />
        <Exprince />
        <Contactus />
        <Footer />
      </div>
      <Toaster />
    </>
  )
}

export default App
