import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
// Custom CSS
import "./nav.css";

const NavBar = () => {
  return (
    <div className="navbar p-0 ">
      <Navbar collapseOnSelect expand="lg" className="padding-x w-100">
        <Container className="m-0 p-0 w-100">
          <Navbar.Brand className="fs-xxl navTitle" href="/">
            Res<span>ume.</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto align-items-center gap-5 py-3 py-md-0">
              <Nav.Link className="fs-sm" href="#skills">
                Skills
              </Nav.Link>
              <Nav.Link className="fs-sm" href="#projects">
                Projects
              </Nav.Link>
              <Nav.Link className="fs-sm" href="#experience">
                Experience
              </Nav.Link>
              <Nav.Link href="mailto:shresthauttam66@gmail.com">
                <Button className="fs-sm primaryCtn pe-3">Get In Touch</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
