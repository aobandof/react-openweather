import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { GoSearch } from "react-icons/go"
import SearchBar from './SearchBar';

function Header() {
  
  return (
    // <header className="row">

      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Form inline>
          <SearchBar></SearchBar>
          <GoSearch color="gray"/>
        </Form>

        <Navbar.Brand className="brand" href="#home">App Clima</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#help">Ayuda</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    // </header>
  );
}

export default Header;