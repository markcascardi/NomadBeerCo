import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Navbar'

const Navigation = () => {
  return(
    <Navbar className="color-nav" variant="light">
      <Navbar.Brand href="/">Nomad Beer Co</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/beers">Beers</Nav.Link>
        <Nav.Link href="/breweries">Breweries</Nav.Link>
        <Nav.Link href="/add-a-beer">Add a Beer</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Navigation
