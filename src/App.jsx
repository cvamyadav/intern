import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LangingPage from './components/LangingPage'
import Regester from './components/Register'
import Register from './components/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <LangingPage/>
        <Register/>
        </div>
    </>
  )
}

export default App
