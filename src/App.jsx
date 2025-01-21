// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import '/src/styles/App.css'
import '/src/styles/components/landing.css'
import Landing from './components/Landing';
import Home from './components/Home';

function App() {
 
//HTML en return
  return (
    <>
      <div>
          <Routes>
            <Route path='/' element = {<Landing/>}/>
            <Route path='/Home' element = {<Home/>}/>
            
          </Routes>
      </div>
    </>
  )
}

export default App
