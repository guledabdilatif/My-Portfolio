import './footer.css'
import { useEffect } from 'react';
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn, FaFacebook   } from "react-icons/fa";
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
      
      <div className="footer-social-icon text-center">
        <a href="https://www.facebook.com/profile.php?id=100081096567216" target='_target'>< FaFacebook    className='icon' /></a>
        <a href="https://www.instagram.com/guledabdilatif/?hl=en" target='_target'>< FaInstagram    className='icon' /></a>
        <a href="https://x.com/guleidabdiladif" target='_target'>< BsTwitterX   className='icon' /></a>
        <a href="https://www.linkedin.com/in/abdilatif-mohamud-98270923b/" target='_target'>< FaLinkedinIn    className='icon' /></a>
       
      </div>
      <p className='text-center'> Abdiladif Mohamud. All rights reserved</p>

    </div>
  )
}

export default Footer