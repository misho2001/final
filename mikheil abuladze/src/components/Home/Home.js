import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/sunil.png";
import SocialMedia from "../SocialMedia";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 className="heading-name">
                My name is 
                <strong className="main-name"> Mikheil abuladze</strong>
              </h1>

              <p className="heading-description blockquote">
                I am interested at about using Javascript and Animation Libraries
                to create awesome user experiences.
              </p>
            </Col>

            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
              <p>
                {" "}

              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
