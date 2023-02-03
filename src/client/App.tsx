import { useState } from 'react'
import './App.css'
import Tableau from './Tableau'

function App() {
  const [count, setCount] = useState(0)

  const countUp = () => {
    setCount(count + 1)
  }


  return (
    <div className="App">
      <h1>Tableau Dashboard in React </h1>
      <Tableau/>

      <button onClick={countUp}>Beans is { count }</button>
   </div>
  )
}

export default App
