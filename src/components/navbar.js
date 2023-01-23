import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MultiStepForm from './MultiStepForm';
import Personal from '../pages/Personal';
import Professional from '../pages/Professional';
import Portfolio from '../pages/Portfolio';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./navbar.css"
import Services from '../pages/Services';
import TabContainer from '../pages/TabContainer';
const navbar = () => {

 

  return (
    <div className='contianer w-100 mt-2'>
      <Navbar expand="lg">

        <Navbar.Brand className='ms-4' href="#home">bidspek</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='ms-4 ' href="#home">For Owners</Nav.Link>
            <NavDropdown className='ms-4' title="For Service Provider" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='ms-4' href="#link">About Us</Nav.Link>

          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">

        </Navbar.Collapse>
      </Navbar>

      <div className='container w-50 '>

        <h1 className='center mt-5'> Create Profile</h1>

<MultiStepForm/>
<br/>
      </div>
    </div>
  )
}

export default navbar
