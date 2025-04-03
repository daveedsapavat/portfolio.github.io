import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certification from './components/Certification'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>

    <Navbar/>

      <Routes>

        <Route path="/" element={<Home/>}  />
        <Route path='/home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='projects' element={<Project/>}/>
        <Route path='skills' element={<Skills/>}/>
        <Route path='experience' element={<Experience/>} />
        <Route path='certifications' element={<Certification/>} />
        <Route path='contact' element={<Contact/>}/>

      </Routes>

    <Footer/>
    </Router>
  )
}

export default App
