import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={`${import.meta.env.VITE_LOGO}`}
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt="Movie Review logo"
              />
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
