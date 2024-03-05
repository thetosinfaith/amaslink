import React from 'react'
import './Hero.css'
import HeroImage from '../../assets/hero-image.png'

const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero-contents'>
            <h1>
                <span className='buy'>Buy</span> 
                <span className='from'>Anything From</span>
                <span className='buy'>AMASLINK</span>
            </h1>
            <p className='description'>
               your premier destination for cutting-edge technology and gadgets! Dive into a world of innovation <br />
               where you can explore, select, and seamlessly purchase a wide array of gadgets to elevate your <br />
               lifestyle
            </p>
        </div>
        <div className='hero-image'>
            <img src={HeroImage} alt="" />
            </div>
    </section>
  )
}

export default Hero