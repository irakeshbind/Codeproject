import React from 'react'
import img from '../../images/nm.png'
import './Hero.css'
function Hero() {
  return (
    <div className="hero">
      <div className="text-w">
        <h1>Sales on upto 50% off</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorum labore sunt dolores nisi atque accusamus vero quibusdam laboriosam eveniet?</p>
        <button>Shop Now</button>
      </div>
      <div className="img-w">
         <img src={img} alt="rakesh" />
      </div>
    </div>
  )
}

export default Hero