import React from 'react';
import './Header.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';



const Header = () => {
  return <div className='header'>
       <Navbar  expand="lg">
                <Container fluid>
                <Navbar.Brand className='light'><Link to='/'><h1>OM.</h1></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '320px'
                
                }}
                    navbarScroll
                >
                    <div className='header_right'>
                        <Nav.Link className='text-light anc'><Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link className='text-light anc'><Link to='/About'>About</Link></Nav.Link>
                        <Nav.Link className='text-light anc'><Link to='/Project'>Projects</Link></Nav.Link>
                        <Nav.Link className='text-light anc'><Link to='/Contact'>Contact</Link></Nav.Link>
                    </div>   
                </Nav>
            
                </Navbar.Collapse>
            </Container>
        </Navbar>
  </div>;
};

export default Header;
