import { useState } from 'react'
import Profile from './components/Profile'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Profile/>
    </div>
  )
}

export default App
