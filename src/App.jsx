import React from 'react'
import Navbar from './Compnent/Navbar/Navbar'
import Hero from './Compnent/Hero/Hero'
import Card from './Card/Card'
import Gallery from './Compnent/Gallery/Gallery'
import Contact from './Compnent/Contact/Contact'
import Footer from './Compnent/Footer/Footer'


function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Card name="Means Awoited's mens"/>
    <Gallery name="GAllery"/>
    <Contact name="Contact"/>
    <Footer/>
    </>
  )
} 

export default App