import React from 'react';
import './Contact.css';
import { useState } from 'react';



const Contact = () => {
    const [header, setHeader] = useState('Get in touch ')

    const handleClick = ()=>{
        if(header === 'Get in touch '){
            setHeader('Thanks for reaching out')
    
        }else{
            setHeader('Get in touch')
    
        }
      
    }

    
  return <div className='contact'>
      <div className='contact_main'>
      <h4 className='animate__animated animate__bounce'>Contact me 📞</h4>
        
        <h2 className='animate__animated animate__bounceIn'>{header}</h2>
        <div>
            <p>I am available to work on your projects and bring your design to fully functional website</p>
        </div>
        <div className='contact_details'>
            <div><p>🌏 Lagos, Nigeria</p></div>
            <div><p>📧 oladapomubarak@gmail.com</p></div>
            <div><p>📱 +234-906-724-4404</p></div>
        </div>
        <div className='form'>
            <form>
                <input className='frm1'required type='text' placeholder='Full name' /><br />
                <input className='frm1' required type='email' placeholder='Email' /><br />
                <input type='tel' required placeholder='Phone Number' /><br />
                <textarea placeholder='Enter Your message'></textarea><br />
                <input className='sub' type='submit' onClick={()=>{handleClick()}}/><br /><br /><br /><br /><br /><br />
            </form>


        </div>


      </div>
      
  </div>;
};

export default Contact;
