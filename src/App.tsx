import React from 'react'
import { useState } from 'react'
import './App.css'

function App(): React.ReactElement {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Noals website</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
