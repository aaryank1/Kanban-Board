import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Board from './Components/Board'

const App = () => {
  return (
    <div className='main'>
      <Navbar />
      <Board />
    </div>
  )
}

export default App