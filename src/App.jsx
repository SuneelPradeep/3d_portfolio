import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { useSelector } from 'react-redux'

const App = () => {
  const darkMode = useSelector((state)=> state.darkMode)
  useEffect(()=>{
      darkMode ?
        document.documentElement.classList.add('dark')
: document.documentElement.classList.remove('dark')
      
  },[darkMode])

  return (
    <main className="dark:bg-black dark:text-white bg-white h-full"> 
    <Router >
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </Router>
  
    </main>
  )
}

export default App
