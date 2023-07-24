import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutMe from './components/about-me'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='portfolio'>
        <AboutMe />
      </div>
    </>
  )
}

export default App
