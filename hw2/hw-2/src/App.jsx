// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import reactLogo from './assets/react.svg'
// eslint-disable-next-line no-unused-vars
import viteLogo from '/vite.svg'
import './App.css'
import CCColor from './Class Componet/CCColor'
import CCScore from './Class Componet/CCScore'
import CCTable from './Class Componet/CCTable'



function App() {
  

  return (
    <>
     <h2 style={{color:"black"}}>Change Color </h2>
      <CCColor></CCColor>
      <br></br>
      <h2 style={{color:"black"}}>pycometry score </h2>
      <CCScore></CCScore>
      <h2 style={{color:"black"}}>table </h2>
     <CCTable></CCTable>
     
    </>
    

  )
}

export default App
