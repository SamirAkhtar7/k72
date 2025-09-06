import React, { useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Agence from './pages/Agence'
import Project from './pages/Project'
import Navber from './components/navigtion/Navber'
import FullScreenNav from './components/navigtion/FullScreenNav'

const App = () => {






  return (
    <div className='overflow-x-hidden text-white'>
      <FullScreenNav />
      <Navber />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App