import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavigationBar = (props) => {
  return (
    <Navbar
      className="border-bottom text-white"
      bg="transparent"
      expand="lg"
      ref={props.ref}
    >
      <Navbar.Brand
        className="text-white"
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: "bold",
        }}
      >
        Marco Capurri <br />
        <small
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: "0.6rem",
          }}
        >
          Software Developer
        </small>
      </Navbar.Brand>
      <Navbar.Toggle
        className="border-0 navbar-dark"
        aria-controls="navbar-toggle"
      />
      <Navbar.Collapse id="navbar-toggle">
        <Nav className="ml-auto" style={{ textAlign: "right" }}>
          <LinkContainer to="/">
            <Nav.Link className="nav-link text-white font-weight-bold">
              Home
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link className="nav-link text-white font-weight-bold">
              About
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link className="nav-link text-white font-weight-bold">
              Contact
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
