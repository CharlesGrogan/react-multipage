import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  .navbar-light .navbar-brand {
    color: antiquewhite;
  }
  .navbar-light .navbar-nav .nav-link {
    color: white;
}
.navbar-light .navbar-toggler {
  color: white;
  border-color: rgba(0,0,0,.1);
}
  .navbar-brand, .navbar-nav .nav-link {
    color: #bbb
    &:hover {
      color: white;
    }
  }
`;

export const Navigationbar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">CloudHopper</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
