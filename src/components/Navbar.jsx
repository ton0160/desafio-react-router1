import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Nav className="me-auto p-3 fs-4 text">
            <Link to="/home" className="link">🏠 Home</Link>        
            <Link to="/contacto" className="link">📒 Contacto</Link>
          </Nav>
          <Navbar.Brand href="/home" className="fs-2 text">
           🍰 Happy Cake
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
export default Navigation;
