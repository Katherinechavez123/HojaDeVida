import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Header from './components/Header';
import Profile from './components/Profile';
import Academic from './components/Academic';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Interest from './components/Interest';
import Languages from './components/Languages';
import Social from './components/Social';
import Certificate from './components/Certificate';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Profile/>
      <Experience/>
      <Certificate/>
      <div className='container-skills-academic'>
      <Skills/>
      <Academic/>
      </div>
      <div className='container-interest-lenguages'>
      <Interest/>
      <Languages/>
      </div>
      <Social/>
      
    </>
  )
}

export default App
