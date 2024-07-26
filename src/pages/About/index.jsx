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
          <p>Hello, I'm glad you visited my Portfolio site to learn about me. Here you have information about me. <br /> <br /> My full name is Ilhomjon Solijonov Nazirjon, I was born on January 14, 2006 in Chust District, Namangan Region. We have 2 children, me and my brother. My brother can say the reason why I came to programming is because he was the first to take me to the programming center when I was young. came and after that I got interested in programming, <br /><br />
          I think it's Front-End Junior + Or Middle level right now. You can find detailed information about my programming language knowledge in the Resume section, and in the Portfolio section I'll post all the projects I've done. If you want to contact me, you can do so in the Contact section </p>
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
                <p>create and build websites and web pages by combining any number of visual design elements including text, photos, graphics, animations and videos.</p>
              </div>
            </li>
            <li>
              <div>
                <MdOutlineDeveloperMode />
              </div>
              <div>
                <h3>Mobile Developer</h3>
                <p> focus on developing apps for mobile devices. They're also known as Android or iOS developers if they work on one platform, but it's common for developers to work on both.</p>
              </div>
            </li>
            <li>
              <div>
                <MdOutlineDeveloperMode />
              </div>
              <div>
                <h3>Web Developer</h3>
                <p>create functional, user-friendly websites and web applications. They may write code, develop and test new applications, or monitor site performance and traffic. Front-end developers focus on the user-facing side of their work, while back-end developers make websites functional and secure.</p>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default index
