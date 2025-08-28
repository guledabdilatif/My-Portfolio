import React, { useEffect } from 'react'
import './experience.css'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { DiCss3Full } from 'react-icons/di'
import { DiJavascript1, DiPhp } from 'react-icons/di';
import { FaBootstrap, FaFigma, FaReact, FaGitAlt } from 'react-icons/fa'
import { SiAdobeillustrator, SiMysql } from 'react-icons/si';
import { GrWordpress } from "react-icons/gr";
import { FaLaravel } from "react-icons/fa";
import { SiPostman } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, [])
  return (
    <section id='Experience' className='container' data-aos="fade-up">
      <h1 className='text-center'>My Skills</h1>
      <div className="row">
        <div className="col-md-4 text-center" data-aos="fade-up">
          <div className="experience-box">
            <h4>FRONTEND</h4>
            <div className="experience-icon text-center">
              <AiOutlineHtml5 />
              <DiCss3Full />
              <DiJavascript1 />
              <FaBootstrap className='mx-4' />
              <FaReact />
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center" data-aos="fade-up">
          <div className="experience-box">
            <h4>BACKEND</h4>
            <div className="experience-icon text-center">
              <DiPhp />
              <SiMysql className='mx-4'/>
              <FaLaravel />
            </div>

          </div>
        </div>
        <div className="col-md-4 text-center" data-aos="fade-up">
          <div className="experience-box">
            <h4>TOOLS</h4>
            <div className="experience-icon text-center">
              <SiAdobeillustrator />
              <FaFigma />
              <GrWordpress />
              <FaGitAlt className='mx-4' />
              <SiPostman />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
export default Experience