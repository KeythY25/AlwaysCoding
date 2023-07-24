import { useState } from 'react'
import './App.css'
import logo from './Components/logo.png'
import Main from './Components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
      <div className='logo_'>
        <img src={logo}/>
      </div>
    </nav>
    <div className='main_body'>
       <Main/>
      </div>  
     
    </>
  )
}

export default App
