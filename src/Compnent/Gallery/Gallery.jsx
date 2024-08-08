import React from 'react'
import './Gallery.css'
import img from "../../images/nm.png"
function Gallery(props) {
  return (
    <>
    <div className="gall-t">
        <h1>Gallery</h1>
    </div>

<div className='gal obj-with'>
    <div className="gallery">
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
  

        </div>
         </div>
    </>
  )
}

export default Gallery