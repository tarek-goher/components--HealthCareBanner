import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nav.css';
import '../index.css';

import logo from '../assets/Assets/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChevronRight, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons'
function BasicExample() {
  return (
    <Navbar expand="lg"  >
      <Container className='cont' >
      <img src={logo} title='logo' className="logo"/>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="active" href="#home">Home</Nav.Link>
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown title="pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About US</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Our team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">FAQ's</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Booking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Error 404</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Login / Ragister</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="services" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Service Details</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blog" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Blog Details</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>Contact Us</Nav.Link>
            <Nav.Link><FontAwesomeIcon icon={faSearch} /></Nav.Link>
            <Nav.Link>
            <FontAwesomeIcon icon={faPhone}  className='phone'/>
               + 201146109626 </Nav.Link>
            <Nav.Link>
              <button > Contact Us <FontAwesomeIcon icon={faChevronRight}  className={"icons"}/></button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default BasicExample;