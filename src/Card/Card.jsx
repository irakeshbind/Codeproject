import React from 'react'
import img from "../images/nm.png"
import img1 from '../images/im1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img4.jpg'

import './Card.css'
function Card(props) {
  return (
    <>
        <h2>{props.name}</h2>
    <div className="ct obj-with">
    <div className="cart-t ">
        <div className="cart-img">
            <img src={img} alt="" />
            <div className='add-cart'>
            <h3>Add card</h3>
            </div>
            <p>Quick viewx</p>
        </div>

        <div className="cart-img">
            <img src={img1} alt="" />
            <h3>Add card</  h3>
            <p>Quick viewx</p>
        </div>

        <div className="cart-img">
            <img src={img2} alt="" />
            <h3>Add card</h3>
            <p>Quick viewx</p>
        </div>

        <div className="cart-img">
            <img src={img3} alt="" />
            <h3>Add card</h3>
            <p>Quick viewx</p>
        </div>


    </div>
    </div>
    </>

  ) 
}

export default Card