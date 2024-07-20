import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/index'
import { Routes, Route } from 'react-router-dom'
// pages
import AboutMe from './pages/About/index'
import Resume from './pages/Resume/index'
import Portfolio from './pages/Portfolio/index'
import Blog from './pages/Blog/index'
import Contact from './pages/Contact/index'

function App() {

  return (
    <div className='app-box'>
      <div className='app-container'>
        <div className='app-navbar'>
          <Navbar/>
        </div>
        <div className='app-content'>
          <Routes>
            <Route path='/' element={<AboutMe />}></Route>
            <Route path='/resume' element={<Resume />}></Route>
            <Route path='/portfolio' element={<Portfolio />}></Route>
            <Route path='/blog' element={<Blog />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes >
        </div>
      </div>
    </div>
  )
}

export default App
