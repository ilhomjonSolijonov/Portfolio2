import React from 'react'
import './style.css'
import Menu from '../../components/Menu/index'
import { FaBook } from "react-icons/fa6";
import { CgWorkAlt } from "react-icons/cg";




const index = () => {
  return (
    <div className='about-box'>
      <header className='header'>
        <h1>Resume</h1>
        <div className='header-menu'>
          <Menu/>
        </div>
      </header>
      <main className='about-content'>
        <section className='resume-info'>
          <div className='resume-info-title-box'>
              <div className='resume-info-icon'><FaBook /></div>
              <h2 className='resume-info-title'>Education</h2>
          </div>
          <div className='resume-card'>
            <div className='resume-card-left'>
                <div className='resume-left-indicator'></div>
                <div className='resume-left-hr'></div>
            </div>
            <div className='resume-card-right'>
              <h3 className='resume-card-title'>IT School in Tashkent</h3>
              <span className='resume-card-year'>2021 - 2022</span>
              <p className='resume-card-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur libero suscipit impedit! Voluptatibus illo maxime eveniet id fugit quasi laboriosam expedita odit modi dolores deserunt ipsa, laudantium sapiente totam labore magnam.</p>
            </div>
          </div>
          <div className='resume-card'>
            <div className='resume-card-left'>
                <div className='resume-left-indicator'></div>
                <div className='resume-left-hr'></div>
            </div>
            <div className='resume-card-right'>
              <h3 className='resume-card-title'>British Management University in Tashkent</h3>
              <span className='resume-card-year'>2023 - 2027</span>
              <p className='resume-card-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur libero suscipit impedit! Voluptatibus illo maxime eveniet id fugit quasi laboriosam expedita odit modi dolores deserunt ipsa, laudantium sapiente totam labore magnam.</p>
            </div>
          </div>
          <div className='resume-info-title-box'>
              <div className='resume-info-icon'><CgWorkAlt /></div>
              <h2 className='resume-info-title'>Experiencs</h2>
          </div>
          <div className='resume-card'>
          <div className='resume-card-left'>
              <div className='resume-left-indicator'></div>
              <div className='resume-left-hr'></div>
          </div>
          <div className='resume-card-right'>
            <h3 className='resume-card-title'>IT School in Tashkent</h3>
            <span className='resume-card-year'>2021 - 2022</span>
            <p className='resume-card-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur libero suscipit impedit! Voluptatibus illo maxime eveniet id fugit quasi laboriosam expedita odit modi dolores deserunt ipsa, laudantium sapiente totam labore magnam.</p>
          </div>
          </div>
          <div className='resume-card'>
            <div className='resume-card-left'>
                <div className='resume-left-indicator'></div>
                <div className='resume-left-hr'></div>
            </div>
            <div className='resume-card-right'>
              <h3 className='resume-card-title'>iTeam</h3>
              <span className='resume-card-year'>2022 - 2023</span>
              <p className='resume-card-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur libero suscipit impedit! Voluptatibus illo maxime eveniet id fugit quasi laboriosam expedita odit modi dolores deserunt ipsa, laudantium sapiente totam labore magnam.</p>
            </div>
          </div>
          <div className='resume-card'>
            <div className='resume-card-left'>
                <div className='resume-left-indicator'></div>
                <div className='resume-left-hr'></div>
            </div>
            <div className='resume-card-right'>
              <h3 className='resume-card-title'>Apinline</h3>
              <span className='resume-card-year'>2024 - 2024 July</span>
              <p className='resume-card-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur libero suscipit impedit! Voluptatibus illo maxime eveniet id fugit quasi laboriosam expedita odit modi dolores deserunt ipsa, laudantium sapiente totam labore magnam.</p>
            </div>
          </div>
        </section>
        <h2 className='resume-skills-title'>My Skills</h2>
        <section className='resume-skills'>
          <div className='skills-card'>
            <h3 className='skills-card-title'>HTML <span>95%</span></h3>
            <div className='skills-range'>
                <span></span>
            </div>
          </div> 
          <div className='skills-card'>
            <h3 className='skills-card-title'>CSS <span>90%</span></h3>
            <div className='skills-range'>
                <span></span>
            </div>
          </div>
          <div className='skills-card'>
            <h3 className='skills-card-title'>SASS/SCSS <span>90%</span></h3>
            <div className='skills-range'>
                <span></span>
            </div>
          </div>
          <div className='skills-card'>
            <h3 className='skills-card-title'>JS <span>75%</span></h3>
            <div className='skills-range'>
                <span></span>
            </div>
          </div> 
          <div className='skills-card'>
            <h3 className='skills-card-title'>Bootstrap <span>88%</span></h3>
            <div className='skills-range'>
                <span></span>
            </div>
          </div> 
          <div className='skills-card'>
            <h3 className='skills-card-title'>Tailwind CSS <span>90%</span></h3>
            <div className='skills-range'>
                <span></span>
            </div>
          </div> 
          <div className='skills-card'>
            <h3 className='skills-card-title'>Figma <span>70%</span></h3>
            <div className='skills-range'>
                <span></span>
            </div>
          </div> 
          <div className='skills-card'>
            <h3 className='skills-card-title'>ReactJS <span>80%</span></h3>
            <div className='skills-range'>
                <span></span>
            </div>
          </div> 
          <div className='skills-card'>
            <h3 className='skills-card-title'>Redux Toolkit <span>70%</span></h3>
            <div className='skills-range'>
                <span></span>
            </div>
          </div> 
          <div className='skills-card'>
            <h3 className='skills-card-title'>Git, GitHub <span>70%</span></h3>
            <div className='skills-range'>
                <span></span>
            </div>
          </div> 
        </section>
      </main>
    </div>
  )
}

export default index
