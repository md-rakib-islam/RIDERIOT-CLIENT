import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import SectionBg from "./../../images/files/bg.jpg";

const Contact = () => {
  return (
    <div
      style={{ background: `url(${SectionBg})`, backgroundAttachment: "fixed" }}
    >
      <ContactForm />
    </div>
  );
};
const formStyle = { background: "transparent", color: "white" };
function ContactForm() {
  return (
    <div style={{ padding: "58px 0 40px" }}>
      <h2 className="text-center text-white">Contact Us</h2>

      <p className="text-center text-muted mb-4">
        You can easily reach us through filling up the form
      </p>

      <div>
        <Container>
          <Form>
            <Row>
              <Col sm>
                <Form.Group
                  className="mb-3 text-white"
                  controlId="formBasicText"
                >
                  <Form.Label>Your Name </Form.Label>
                  <Form.Control
                    style={formStyle}
                    type="text"
                    placeholder="Enter Your Name"
                  />
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group
                  className="mb-3 text-white"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Your Email </Form.Label>
                  <Form.Control
                    style={formStyle}
                    type="email"
                    placeholder="Enter Your Email"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Control
              style={formStyle}
              className="my-3"
              type="text"
              placeholder="Write Your Subject..."
            />
            <Form.Group
              className="mb-3 text-white"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Your Messages</Form.Label>
              <Form.Control
                style={formStyle}
                placeholder="Write you message..."
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Button className="mb-5 px-4" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default Contact;
