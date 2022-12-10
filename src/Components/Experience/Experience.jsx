import React from 'react'
import './experience.css'
import {AiOutlineHtml5} from 'react-icons/ai'
import {DiCss3Full} from 'react-icons/di'
import {DiJavascript1} from 'react-icons/di'
import {AiFillGithub} from 'react-icons/ai'
import {FaBootstrap, FaFigma, FaReact} from 'react-icons/fa'

const Experience = () => {
  return (
   <section id='Experience' className='container'>
    <h5 className='text-center'>What skills I Have</h5>
    <h1 className='text-center'>My Skills</h1>
    <div className="row">
      <div className="col-md-4">
        <div className="experience-box">
          <div className="experience-icon text-center"><AiOutlineHtml5/></div>
          <h4>HTML</h4>
          <h6>Experienced</h6>
        </div>
      </div>
      <div className="col-md-4">
        <div className="experience-box">
          <div className="experience-icon text-center"><DiCss3Full/></div>
          <h4>CSS</h4>
          <h6>Experienced</h6>
        </div>
      </div>
      <div className="col-md-4">
        <div className="experience-box">
          <div className="experience-icon text-center"><FaBootstrap/></div>
          <h4>Bootstrap</h4>
          <h6>Experienced</h6>
        </div>
      </div>
      <div className="col-md-4">
        <div className="experience-box">
          <div className="experience-icon text-center"><DiJavascript1/></div>
          <h4>Javascript</h4>
          <h6>Intermediate</h6>
        </div>
      </div>
      <div className="col-md-4">
        <div className="experience-box">
          <div className="experience-icon text-center"><FaFigma/></div>
          <h4>Figma</h4>
          <h6>Intermediate</h6>
        </div>
      </div>
      <div className="col-md-4">
        <div className="experience-box">
          <div className="experience-icon text-center"><FaReact/></div>
          <h4>React</h4>
          <h6>Intermediate</h6>
        </div>
      </div>
      <div className="col-md-12 text-center">
        <div className="experience-box">
          <div className="experience-icon text-center"><AiFillGithub/></div>
          <h4>Github</h4>
          <h6>Basic</h6>
        </div>
      </div>
    </div>
   </section>
  )
}
export default Experience