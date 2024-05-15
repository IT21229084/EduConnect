import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavbarWithMegaMenu from './components/NavbarWithMegaMenu.jsx'
import Footer from "./components/Footer.jsx"

function App() {
 
  return (
    <>
      {/* <NavbarWithMegaMenu/> */}
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
