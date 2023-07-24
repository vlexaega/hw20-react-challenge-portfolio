import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import Nav from './components/nav'
import Header from './components/header'
import AboutMe from './components/about-me'
import Projects from './components/projects'
import ContactMe from './components/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Nav />
      <div className='text-gray-400 bg-gray-900 body-font'>
        <AboutMe />
        <Projects />
        <ContactMe />
      </div>
    </>
  )
}

export default App
