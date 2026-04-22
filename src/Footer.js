import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 pt-4 pb-3">
      <Container>
        <Row>

          <Col md={4}>
            <h5>Hospital System</h5>
            <p>
              Online hospital appointment booking system where patients can
              easily book appointments with doctors.
            </p>
          </Col>

          <Col md={4}>
            <h5>Quick Links</h5>
            <p>Home</p>
            <p>Doctors</p>
            <p>Book Appointment</p>
            <p>Login</p>
          </Col>

          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: hospital@gmail.com</p>
            <p>Phone: +91 9876543210</p>
            <p>Address: Delhi, India</p>
          </Col>

        </Row>

        <hr />

        <p className="text-center">
          © 2026 Hospital Appointment System | All Rights Reserved
        </p>

      </Container>
    </footer>
  );
}

export default Footer;