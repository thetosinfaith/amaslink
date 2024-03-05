import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Homepage = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Footer/>
    <Outlet/>
    </>
    
  )
}

export default Homepage