import {useRef} from 'react'
import emailjs from '@emailjs/browser';
import './style.css'
import Menu from '../../components/Menu/index'
import { BsFillSendFill } from "react-icons/bs";


const index = () => {
  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yx9ykfs', 'template_5dg8w2i', form.current, {
        publicKey: 'WKb6ZoO0QMwxD0XUG',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
    <div className='about-box'>
      <header className='header'>
        <h1>Contact</h1>
        <div className='header-menu'>
          <Menu/>
        </div>
      </header>
      <main className='about-content'>
        <iframe className='contact-iframe' width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Tashkent+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        <h1 className='contact-title'>Contact Form</h1>
        <form  ref={form} onSubmit={sendEmail} className='contact-form'>
          <div className='contact-inputs'>
            <input type="text" placeholder='Full Name' name="from_name" required/>
            <input type="email" placeholder='Email' name="from_email" required/>
          </div>
          <textarea placeholder='Message' name="message"></textarea>
          <button type='submit' className='contact-btn'>Send Message <BsFillSendFill /></button>
        </form>
      </main>
    </div>
  )
}

export default index
