import {
  faMailBulk,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import footerLogo from "./../../../images/files/logo.png";
import payment from "./../../../images/files/pay_copyright.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="text-black fw-bold">
      <div className="py-4 gradient">
        <Container>
          <Row>
            <Col md={6}>
              <div className=" my-2">
                <img width="180px" src={footerLogo} alt="" />
              </div>

              <ul className="list-unstyled">
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span className="ms-1 fs-5"> Demra,Dhaka,Bangladesh</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faMailBulk} />
                  <span className="ms-1 fs-5">Official: rkbride@bd.com</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  <span className="ms-1 fs-5">HotLine: 01704404410(24/7)</span>
                </li>
              </ul>
            </Col>
            <Col md={2}>
              <ul className="list-unstyled footer-link text-black">
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About us</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact us</NavLink>
                </li>
                <li>
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/policy">Policy</NavLink>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <div className="">
                <img
                  className="img-fluid"
                  src={payment}
                  alt="payment methods"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <hr className="m-0 p-0" />
      <p className="text-center m-0 py-3 copyright">
        Copyright © All Reserved by rkRide
      </p>
    </div>
  );
};

export default Footer;
