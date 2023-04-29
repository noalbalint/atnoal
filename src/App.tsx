import { useState } from 'react'
import Header from './components/Header';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
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
