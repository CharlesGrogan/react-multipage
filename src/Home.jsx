import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import styled from "styled-components";
import person1 from "./assets/person-1.jpg";
import person2 from "./assets/person-2.jpg";
import person3 from "./assets/person-3.jpg";

const Styles = styled.div`
  .person-wrapper {
    margin-bottom: 2rem
  }

  .profile-pic {
    width: 50%;
    padding-top: 2rem;
  }
`;

export const Home = () => (
  <Styles>
    <React.Fragment>
      <div className="home-wrap">
        <h2>Welcome to the CloudHopper</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          fugit commodi odit autem? Sapiente debitis necessitatibus repudiandae
          quo officiis consectetur.
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          possimus consectetur magnam atque?
        </p>
      </div>
      <div className="profile-pics">
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src={person1}
              roundedCircle
              className="profile-pic"
              alt="head shot of random person"
            />
            <h3>Pat</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              esse voluptate pariatur aut eius impedit.
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src={person2}
              roundedCircle
              className="profile-pic"
              alt="head shot of random person"
            />
            <h3>Jessica</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto ducimus iure repellendus quos nisi voluptatem
              excepturi? Molestiae!
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src={person3}
              roundedCircle
              className="profile-pic"
              alt="head shot of random person"
            />
            <h3>Alex</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
              rerum quibusdam saepe dolore illo voluptatem!
            </p>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  </Styles>
);
