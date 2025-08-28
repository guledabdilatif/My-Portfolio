import './header.css'
import React, { useEffect } from "react";
import Resume from '../../Assets/images/Resume.pdf'
import { AiOutlineGithub } from 'react-icons/ai'


import Nav from '../Nav/Nav'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Header = () => {
   useEffect(() => {
      AOS.init({
         duration: 2000
      });
   }, [])
   return (
      <section id='#'>
         <div className="header">
            <div className="container">
               <div className="text-center">
                  <Nav />
                  <div>
                     
                  </div>
                  <div className="margin"></div>
                  <h5>Hello I'm</h5>
                  <h1>ABDILADIF MOHAMUD</h1>
                  <h4>Software Engineer</h4>
                  <div className="buttons text-center">
                     <a href={Resume} className='btn' download>Download CV</a>
                     <a href="#Contact" className='btn-primary'>Let's Talk</a>
                  </div>
                  <div className="row" data-aos="fade-up">
                     <div className="col-md-4 text-center">
                        <div className="social-icons">
                           <a href="https://github.com/guledabdilatif" target='_blank'><AiOutlineGithub className='icon' /></a>
                        </div>
                     </div>
                     <div className="col-md-4" data-aos="fade-up">
                       
                     </div>
                     <div className="col-md-4">
                        <div className="scroll-down">
                           <a href="#About">Scroll Down</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Header