import React, {useEffect} from 'react'
import './footer.css'
import { FaWhatsapp } from 'react-icons/fa'
import { RxEnvelopeClosed } from 'react-icons/rx'
import { BiPhoneCall } from 'react-icons/bi'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, [])
  return (
    <div className=' text-center footer'>
      <h2>ABDILADIF MOHAMUD</h2>
      <div className='quick-links text-center' data-aos="fade-up">
        <a href="#">Home</a>
        <a href="#About">About</a>
        <a href="#Experience">Skills</a>
        <a href="#Services">Services</a>
        <a href="#Portfolio">Portfolio</a>
        <a href="#Contact">Contact</a>
      </div>
      <div className="footer-social-icon text-center" data-aos="fade-up">
        <a href="https://wa.me/+254723710285" target='_target'>< FaWhatsapp className='icon' /></a>
        <a href="mailto:guledabdilatif@gmail.com" target='_blank'><RxEnvelopeClosed className='icon' /></a>
        <a href="tel:+254723710285" target='_blank'>< BiPhoneCall className='icon' /></a>
      </div>
      <p className='text-center'> Abdiladif Mohamud. All rights reserved</p>

    </div>
  )
}

export default Footer