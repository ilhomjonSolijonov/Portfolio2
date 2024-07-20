import React from 'react'
import './style.css'
import Menu from '../../components/Menu/index'
import { SiAffinitydesigner } from "react-icons/si";
import { MdOutlineDeveloperMode } from "react-icons/md";

const index = () => {
  return (
    <div className='about-box'>
      {/* header */}
      <header className='header'>
        <h1>About Me</h1>
        <div className='header-menu'>
          <Menu/>
        </div>
      </header>
      {/* content */}
      <main className='about-content'>
        <section className='about-info'>
          <div className='yellow-line'></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt sint reiciendis autem dolorem qui dignissimos voluptate veniam iure. <br /> <br /> Aut praesentium excepturi ut reiciendis asperiores voluptates tempore similique tempora esse assumenda, porro a iure accusantium sint quia vero, consequuntur molestias. Vel sapiente cupiditate illum dolorum repellendus architecto veniam obcaecati et, est excepturi beatae aspernatur reprehenderit? Quos aperiam quas tempore illum </p>
        </section>
        <section className='about-work'>
          <h2>What I'm Doing</h2>
          <ul>
            <li>
              <div>
                <SiAffinitydesigner />
              </div>
              <div>
                <h3>Web Design</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, earum.</p>
              </div>
            </li>
            <li>
              <div>
                <MdOutlineDeveloperMode />
              </div>
              <div>
                <h3>Web Developer</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, earum.</p>
              </div>
            </li>
            <li>
              <div>
                <MdOutlineDeveloperMode />
              </div>
              <div>
                <h3>Mobile Developer</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, earum.</p>
              </div>
            </li>
          </ul>
        </section>
        <section>
          
        </section>
      </main>
    </div>
  )
}

export default index
