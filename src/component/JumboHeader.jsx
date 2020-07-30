import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import styled from "styled-components";
import backgroundImg from "../assets/onRock.jpg";

const Styles = styled.div`
  .jumbotron {
    background-image: url(${backgroundImg});
    position: relative;
    z-index: -2;
    background-position: center;
    background-size: cover;
  }
  .screen {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #000;
    opacity: 0.6;
    z-index: -1;
  }

  h1, h2 {
    color: white;
    text-transform: capitalize;
    
  }

`;

export const JumboHeader = () => (
  <Styles>
    <Jumbotron>
      <div className="screen"> </div>
        <h1>The CloudHopper</h1>
        <h2>bootstrap & react</h2>
    </Jumbotron>
  </Styles>
);
