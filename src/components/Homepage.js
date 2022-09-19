import React from 'react';
import './Homepage.css';
import 'animate.css';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return <div className='homepage'>
      <div className='homepage_main'>
        <h1 className='animate__animated animate__flash'>Hi, I'm Mubarak </h1>
        <p>I'm a frontend Developer</p>
        <p>I like to craft solid and scalable frontend products with great user experiences.
        Highly skilled at progressive enhancement, design systems & UI Engineering.</p>
        <div className='animate__animated animate__bounceIn  homepage_button'>
            <Link to='/Contact'><button>Get in touch</button></Link>
            <Link to='/Project'><button className='btn2'>View my works</button></Link>
        </div>
      </div>

  </div>;
};

export default Homepage;
