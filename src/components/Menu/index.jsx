import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'

const index = () => {
  return (
    <div className='menu-box'>
        <NavLink to="/">
            About Me
        </NavLink>
        <NavLink to="/resume">
            Resume
        </NavLink>
        <NavLink to="/portfolio">
            Portfolio
        </NavLink>
        <NavLink to="/blog">
            Blog
        </NavLink>
        <NavLink to="/contact">
            Contact
        </NavLink>
    </div>
  )
}

export default index
