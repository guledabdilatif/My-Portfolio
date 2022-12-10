import React from 'react'
import './footer.css'
import {FaWhatsapp} from 'react-icons/fa'
import {RxEnvelopeClosed} from 'react-icons/rx'
import {BiPhoneCall} from 'react-icons/bi'

const Footer = () => {
  return (
    <div className=' text-center footer'>
        <h2>ABDILADIF MOHAMUD</h2>
        <div className='quick-links text-center'>
            <a href="#">Home</a>
            <a href="#About">About</a>
            <a href="#Experience">Skills</a>
            <a href="#Services">Services</a>
            <a href="#Portfolio">Portfolio</a>
            <a href="#Contact">Contact</a>
        </div>
       <div className="footer-social-icon text-center">
       <a href="https://wa.me/+254723710285" target='_target'>< FaWhatsapp className='icon'/></a>
       <a href="mailto:guledabdilatif@gmail.com" target='_blank'><RxEnvelopeClosed className='icon'/></a>
       <a href="tel:+254723710285" target='_blank'>< BiPhoneCall className='icon'/></a>
       </div>
       <p className='text-center'> Abdiladif Mohamud. All rights reserved</p>
        
    </div>
  )
}

export default Footer