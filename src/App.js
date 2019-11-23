import React, { useState } from 'react';

import Header from './components/Header';
import Content from './components/Content';
import SearchBar from './components/SearchBar';

import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { GoSearch } from "react-icons/go"

function App() {
  const [ lat , setLat ] = useState(0);
  const [ lng , setLng ] = useState(0);
  const [ day, setDay ] = useState(1); 

  const setDataWeather = (site) => {
    console.log(site);
    setLat(site.geometry.location.lat());
    setLng(site.geometry.location.lng());
  }

  return (
    <div className="main">
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Form inline>
          <SearchBar setDataWeather={setDataWeather} />
          <Button variant="outline-success"><GoSearch color="gray"/></Button>
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
      {/* <section>
        <div className="d-flex justify-content-around options">
          <div className="option_day p-2">HOY</div>
          <div className="option_day p-2">MAÑANA</div>
          <div className="option_day p-2">5 DIAS</div>
        </div>
      </section> */}
      <section>
        {/* <SearchBar setDataWeather={setDataWeather} /> */}
      </section>
      <Content values = {{ location: { lat, lng } , day }} />
    </div>
  );
}

export default App;
