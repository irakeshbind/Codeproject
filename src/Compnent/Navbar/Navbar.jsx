import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className="header">
        <div className="logo">
            <h1>Equal's</h1>
        </div>
        <ul className="navbar">
            <li><a href=""></a>Home</li>
            <li><a href=""></a>Shop</li>
            <li><a href=""></a>Gallery</li>
            <li><a href=""></a>Contact</li>
            
        </ul>
        <div className="input">
            <input type="text" name="name" placeholder='Search here...'/>
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        
        <div className="cart">
            <p>0</p>
            <i className="search"class="fa-solid fa-cart-shopping"></i>
        </div>
        
    </div>
  )
}

export default Navbar