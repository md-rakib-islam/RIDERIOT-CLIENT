import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import sectionBg from "../../images/files/bg.jpg";
const About = () => {
  return (
    <div
      style={{ background: `url(${sectionBg})`, backgroundAttachment: "fixed" }}
      className="py-5"
    >
      <Container style={{ marginTop: "100px" }}>
        <h2 className="text-center text-white mb-4">WELCOME TO RIDERIOT</h2>

        <Row>
          <Col md className="pe-3">
            <h5 className="text-white">About Us</h5>
            <p className="text-muted">
              We’re a bike shop, a family and a team of riders, helping folks in
              New York explore their passion for cycling. Biking is more than
              transportation or exercise, it’s a lifestyle. Whether you need
              help with where to ride or are in need.
            </p>
            <p className="text-muted">
              New York explore their passion for cycling. Biking is more than
              transportation or exercise, it’s a lifestyle. Whether you need
              help with where to ride or are in need.
            </p>
          </Col>
          <Col md className="pe-3">
            <h5 className="text-white">Our Vision</h5>
            <p className="text-muted">
              Biking is more than transportation or exercise, it’s a lifestyle.
              Whether you need help with where to ride or are in need.
            </p>
            <h5 className="text-white">Our Mission</h5>
            <p className="text-muted">
              We’re a bike shop, a family and a team of riders, helping folks in
              New York explore their passion for cycling. Biking is more than
              transportation or exercise, it’s a lifestyle.
            </p>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md>
            <h5 className="text-white">Sign up for our monthly newsletter</h5>
            <p className="text-muted">
              Be the first to know about news and updates.We never share you
              mail with others. Trust us!
            </p>
          </Col>
          <Col md className="d-flex align-items-center">
            <Form className="w-100">
              <Form.Label className="text-white">
                Leave your mail below
              </Form.Label>
              <Form.Group
                className="d-flex text-white"
                controlId="formBasicEmail"
              >
                <Form.Control
                  style={{ background: "transparent", color: "white" }}
                  className="py-2 rounded-0"
                  type="email"
                  placeholder="Enter email"
                />
                <NavLink to="/login">
                  <button
                    style={{ width: "120px" }}
                    className="btn rounded-0 btn-danger"
                  >
                    SIGN UP
                  </button>
                </NavLink>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
