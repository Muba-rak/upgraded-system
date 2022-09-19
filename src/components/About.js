import React from 'react';
import './About.css'

const About = () => {
  return <div>
      <div className='about'>
        <h1>Who I am...</h1>
        <div className='about_main'>
            <div className='animate__animated animate__fadeInLeft about_left'>
                <h3>About me</h3>
                <p>I'm Mubarak Olanrewaju, a professional and talented Frontend Web Developer. I am passionate about leveraging
                    my diverse backgrounds to decipher challenging problems and create delightful experiences. I honed my skills at web development,
                    technical writing and design.
                </p>
                <p>I develop websites with HTML, CSS and Javascript.</p>
                <p>Being a diligent, passionate and result-oriented guy, I always work towards achieving best results on each projects I work on</p>
            </div>
            <div className=' animate__animated animate__fadeInRight about_right'>
                <h3>Tech Skills</h3>
                <div className='hov animate__animated animate__slideInDown'><p>HTML</p></div>
                <div className='hov animate__animated animate__slideInUp'><p>CSS</p></div>
                <div className='hov animate__animated animate__slideInRight'><p>Bootstrap</p></div>
                <div className='hov animate__animated animate__slideInLeft'><p>Javascript</p></div>
                <div className='hov animate__animated animate__slideInUp' ><p>React JS</p></div>
                <div className='hov animate__animated animate__slideInUp'><p>Node JS</p></div>
            </div>

        </div>

      </div>
  </div>;
};

export default About;
