import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import AboutMe from './components/about-me'
import ProjectOne from './components/project-one'
import ProjectTwo from './components/project-two'
import ProjectThree from './components/project-three'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='portfolio'>
        <AboutMe />
        <ProjectOne />
        <ProjectTwo />
        <ProjectThree />
      </div>
    </>
  )
}

export default App
