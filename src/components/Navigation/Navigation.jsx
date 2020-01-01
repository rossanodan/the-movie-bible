import React, { useContext } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import ThemeContext from '../../context/ThemeContext';

const Navigation = () => {
  const { dark, toggle } = useContext(ThemeContext);
  let bg, variant;
  if (dark) {
    bg = variant = 'dark';
  } else {
    bg = variant = 'light';
  }
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg={bg} variant={variant}>
        <Navbar.Brand href="/">The Movie Bible</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Theme" id="collasible-nav-dropdown">
              { dark ? <NavDropdown.Item onClick={() => toggle()}>Switch to Light</NavDropdown.Item> : <NavDropdown.Item onClick={() => toggle()}>Switch to Dark</NavDropdown.Item> }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header> 
  );
}

export default Navigation;