import React from 'react'
import About from './components/About'
import Navbar from './components/NavBar'
import Hero from './components/hero'

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 aniliased selection:bg-cyan-300'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className='flixed top-0 -z-10 h-full w-full'></div>
      <div className='container mx-auto px-8'></div>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
