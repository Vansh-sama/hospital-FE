import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./appointment.css";

function Appointment() {

  const location = useLocation();
  const doctor = location.state;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    problem: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const finalData = {
      ...formData,
      doctor: doctor?.name || "General"
    };

    try {
      const res = await fetch("http://localhost:5000/api/appointments/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(finalData)
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ SAME ALERT STYLE
        alert(`Appointment Booked!
Doctor: ${doctor?.name}
Patient: ${formData.name}
Email: ${formData.email}`);

        // 🔥 reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          date: "",
          time: "",
          problem: ""
        });

      } else {
        alert("❌ " + data.message);
      }

    } catch (error) {
      console.log(error);
      alert("Server error");
    }
  };

  return (
    <Container className="appointment-page mt-5">

      <h2 className="appointment-title">Book Appointment</h2>

      {/* 👨‍⚕️ SELECTED DOCTOR */}
      {doctor && (
        <div className="doctor-info">
          <h5>Doctor: {doctor.name}</h5>
          <p>{doctor.specialist}</p>
        </div>
      )}

      <Form onSubmit={submitForm} className="appointment-form">

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter Name"
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={formData.phone}
                placeholder="Enter Phone"
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* EMAIL */}
        <Row>
          <Col md={12}>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter Email"
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Select Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Select Time</Form.Label>
              <Form.Control
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Problem / Symptoms</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="problem"
            value={formData.problem}
            placeholder="Describe your problem"
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit" className="submit-btn">
          Confirm Appointment
        </Button>

      </Form>

    </Container>
  );
}

export default Appointment;