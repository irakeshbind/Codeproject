import React from 'react'
import './Contact.css'
function Contact(props) {
  return (
    <>
    <div className='contact-t'>
        <h1>{props.name}</h1>
    </div>

    <div className="input-text">
        <input type="text" name="name" placeholder='Enter your name' />
        <br/><br/>
        <input type="email" name="email" placeholder='Enter your email'/>
        <br/><br/>
        <input type="submit" value='submit'/>
    </div>
    </>
  )
}

export default Contact