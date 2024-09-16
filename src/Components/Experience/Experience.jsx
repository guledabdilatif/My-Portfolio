import React, { useEffect } from 'react'
import './experience.css'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { DiCss3Full } from 'react-icons/di'
import { DiJavascript1 } from 'react-icons/di'
import { AiFillGithub } from 'react-icons/ai'
import { FaBootstrap, FaFigma, FaReact, FaGitAlt } from 'react-icons/fa'
import { TbBrandReactNative } from 'react-icons/tb'
import { SiAdobeillustrator } from 'react-icons/si'
import { FaPhp } from "react-icons/fa";
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
      <h5 className='text-center'>What skills I Have</h5>
      <h1 className='text-center'>My Skills</h1>
      <div className="row">
        <div className="col-md-4 text-center" data-aos="fade-up">
          <div className="experience-box">
            <div className="experience-icon text-center"><AiOutlineHtml5 /></div>
            <h4>HTML</h4>
            <h6>Experienced</h6>
          </div>
        </div>
        <div className="col-md-4 text-center" data-aos="fade-up">
          <div className="experience-box">
            <div className="experience-icon text-center"><DiCss3Full /></div>
            <h4>CSS</h4>
            <h6>Experienced</h6>
          </div>
        </div>
        <div className="col-md-4 text-center" data-aos="fade-up">
          <div className="experience-box">
            <div className="experience-icon text-center"><FaBootstrap /></div>
            <h4>Bootstrap</h4>
            <h6>Experienced</h6>
          </div>
        </div>
        <div className="col-md-4 text-center" data-aos="fade-up">
          <div className="experience-box">
            <div className="experience-icon text-center"><DiJavascript1 /></div>
            <h4>Javascript</h4>
            <h6>Intermediate</h6>
          </div>
        </div>
        <div className="col-md-4 text-center" data-aos="fade-up">
          <div className="experience-box">
            <div className="experience-icon text-center"><FaPhp /></div>
            <h4>PHP</h4>
            <h6>Intermediate</h6>
          </div>
        </div>
        <div className="col-md-4 text-center" data-aos="fade-up">
          <div className="experience-box">
            <div className="experience-icon text-center"><FaFigma /></div>
            <h4>Figma</h4>
            <h6>Intermediate</h6>
          </div>
        </div>
        <div className="col-md-4 text-center" data-aos="fade-up">
          <div className="experience-box">
            <div className="experience-icon text-center"><SiAdobeillustrator /></div>
            <h4>Adobe Illustrator</h4>
            <h6>Experienced</h6>
          </div>
        </div>
        <div className="col-md-4 text-center" data-aos="fade-up">
          <div className="experience-box">
            <div className="experience-icon text-center"><FaReact /></div>
            <h4>React</h4>
            <h6>Intermediate</h6>
          </div>
        </div>
        <div className="col-md-4 text-center" data-aos="fade-up">
          <div className="experience-box">
            <div className="experience-icon text-center"><FaGitAlt /></div>
            <h4>Git</h4>
            <h6>Experienced</h6>
          </div>
        </div>
        <div className="col-md-4 text-center" data-aos="fade-up">
          <div className="experience-box">
            <div className="experience-icon text-center"><AiFillGithub /></div>
            <h4>Github</h4>
            <h6>Experienced</h6>
          </div>
        </div>
        <div className="col-md-4 text-center" data-aos="fade-up">
          <div className="experience-box">
            <div className="experience-icon text-center"><TbBrandReactNative /></div>
            <h4>React native</h4>
            <h6>Intermediate</h6>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Experience