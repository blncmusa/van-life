import './App.css'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/vans" element={<Vans/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App