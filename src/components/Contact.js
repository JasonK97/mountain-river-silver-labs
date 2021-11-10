import React from 'react'
import mountainTrees from '../assets/022_15-2.jpg'

function Contact() {
  return (
    <div className='contact-page'>
      <img src={mountainTrees} alt='A tree filled mountain' width='100%' />
      <div className='contact-block'>
        <h2>Contact Information</h2>
        <h4>Talk to us to learn more about pricing and availability</h4>
        <p>Email : mtn.river.silvers@gmail.com</p>
        <p>Phone : (208) xxx-xxxx</p>
      </div>
    </div>
  )
}

export default Contact
