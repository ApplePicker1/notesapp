import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import rocketLogo from '/Green_left-facing_rocket_ship.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(7)

  return (
    <>
      <div>
        {/*
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        */}
        <a href="https://ketel.ai" target="_blank">
          <img src={rocketLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Ketel AI's mission is to make implementation better, faster, and easier.</h1>
      {/*
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      */}
      <p className="read-the-docs">
        Contact Us
      </p>
      <p className="dylan-contact">
        Dylan Patel dylan@ketel.ai
      </p>
      <p className="kenny-contact">
        Kenny Oen kenny@ketel.ai
      </p>
    </>
  )
}

export default App
