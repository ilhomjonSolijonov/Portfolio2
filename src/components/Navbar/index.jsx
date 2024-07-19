import React from 'react'
import './style.css'
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { CiMobile3 } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const index = () => {
  return (
    <div className='navbar'>
        <div className='navbar-container'>
            <div className='navbar_img-box'>

            </div>
            <h1 className='navbar-title'>Ilhomjon Solijonov</h1>
            <div className='navbar-job'>
                Web developer
            </div>
            <hr />
            <ul className='navbar-lists'>
                <li className='navbar-list'>
                    <div className='navbar-icon'>
                        <MdOutlineEmail />
                    </div>
                    <div className='navbar-list-text'>
                        <h2 className='navbar-list_key'>Email</h2>
                        <a href='https://gmail.com' className='navbar-list_value'>ilhomjonsolijonov843 <br /> @gmail.com</a>
                    </div>
                </li>
                <li className='navbar-list'>
                    <div className='navbar-icon'>
                        <CiMobile3 />
                    </div>
                    <div className='navbar-list-text'>
                        <h2 className='navbar-list_key'>Phone</h2>
                        <a href='tel+998990571401' className='navbar-list_value'>+998 (99) 057 14-01</a>
                    </div>
                </li>
                <li className='navbar-list'>
                    <div className='navbar-icon'>
                        <LiaBirthdayCakeSolid />
                    </div>
                    <div className='navbar-list-text'>
                        <h2 className='navbar-list_key'>Birthday</h2>
                        <h2 className='navbar-list_value'>January 14, 2006</h2>
                    </div>
                </li>
                <li className='navbar-list'>
                    <div className='navbar-icon'>
                        <IoLocationOutline />
                    </div>
                    <div className='navbar-list-text'>
                        <h2 className='navbar-list_key'>Location</h2>
                        <a href='#' className='navbar-list_value'>Toshkent, Uzbekistan</a>
                    </div>
                </li>
            </ul>  
            <ul className='navbar-medias'>
                <li className='navbar-media'>
                    <FaFacebookF />
                </li>
                <li className='navbar-media'>
                    <FaInstagram />
                </li>
                <li className='navbar-media'>
                    <FaYoutube />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default index
