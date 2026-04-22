import React from "react";
import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";   // ✅ ADD
import "./home.css";

function Home() {

  const navigate = useNavigate();   // ✅ ADD

  return (
    <div className="main-bg">

      {/* 🔥 HERO */}
      <div className="hero-section d-flex align-items-center text-center text-light">
        <div className="overlay"></div>

        <Container className="hero-content">
          <h1 className="hospital-name">City Care Hospital</h1>
          <p className="tagline">Your Health, Our Responsibility</p>

          {/* ✅ FIXED BUTTON */}
          <Button
            className="main-btn"
            onClick={() => navigate("/appointment")}
          >
            Book Appointment
          </Button>

        </Container>
      </div>

      {/* 🩺 SERVICES */}
      <Container className="mt-5">
        <h2 className="section-title">Our Services</h2>

        <Row>
          {[
            "General Checkup",
            "Dental Care",
            "Heart Specialist",
            "Child Care",
            "Eye Treatment",
            "Skin Care"
          ].map((item, i) => (
            <Col md={4} key={i} className="mb-4">
              <Card className="custom-card text-center">
                <Card.Body>
                  <h5>{item}</h5>
                  <p>Quality healthcare with modern facilities.</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* 👨‍⚕️ DOCTORS */}
      <Container className="mt-5">
        <h2 className="section-title">Our Doctors</h2>

        <Row>
          {[
            {
              name: "Dr. Sharma",
              spec: "General Physician",
              img: "https://randomuser.me/api/portraits/men/31.jpg"
            },
            {
              name: "Dr. Mehta",
              spec: "Dentist",
              img: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            {
              name: "Dr. Singh",
              spec: "Cardiologist",
              img: "https://randomuser.me/api/portraits/men/33.jpg"
            },
            {
              name: "Dr. Kaur",
              spec: "Skin Specialist",
              img: "https://randomuser.me/api/portraits/women/34.jpg"
            },
            {
              name: "Dr. Verma",
              spec: "Eye Specialist",
              img: "https://randomuser.me/api/portraits/men/35.jpg"
            },
            {
              name: "Dr. Khan",
              spec: "Child Specialist",
              img: "https://randomuser.me/api/portraits/men/36.jpg"
            }
          ].map((doc, i) => (
            <Col md={4} key={i} className="mb-4">
              <Card className="custom-card text-center doctor-card">
                <Card.Body>

                  <img
                    src={doc.img}
                    alt="doctor"
                    className="doctor-img"
                  />

                  <h5>{doc.name}</h5>
                  <p className="text-primary fw-semibold">{doc.spec}</p>

                  {/* ✅ FIXED BUTTON */}
                  <Button
                    className="main-btn mt-2"
                    onClick={() => navigate("/appointment", { state: doc })}
                  >
                    Book Appointment
                  </Button>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* ⭐ WHY */}
      <Container className="mt-5">
        <h2 className="section-title">Why Choose Us</h2>

        <Row className="text-center">
          {["24/7 Service", "Expert Doctors", "Easy Booking"].map((item, i) => (
            <Col md={4} key={i}>
              <div className="why-box">
                <h5>{item}</h5>
                <p>Reliable healthcare solution</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

     {/* 💬 TESTIMONIAL */}
<Container className="mt-5">
  <h2 className="section-title">Our Patients</h2>

  <Carousel>
    {[
      {
        name: "Rohit Sharma",
        text: "Excellent service and friendly staff. Booking was very easy!",
        role: "Heart Patient",
        img: "https://randomuser.me/api/portraits/men/41.jpg"
      },
      {
        name: "Neha Verma",
        text: "Doctors are very experienced and helpful. Highly recommended!",
        role: "Skin Treatment",
        img: "https://randomuser.me/api/portraits/women/42.jpg"
      },
      {
        name: "Amit Kumar",
        text: "Clean hospital and quick service. Very satisfied!",
        role: "General Checkup",
        img: "https://randomuser.me/api/portraits/men/43.jpg"
      },
      {
        name: "Pooja Singh",
        text: "Best child specialist. My kid felt very comfortable.",
        role: "Child Care",
        img: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      {
        name: "Rahul Mehta",
        text: "Dental treatment was painless and professional.",
        role: "Dental Care",
        img: "https://randomuser.me/api/portraits/men/45.jpg"
      },
      {
        name: "Simran Kaur",
        text: "Eye treatment was perfect. Staff is very supportive.",
        role: "Eye Care",
        img: "https://randomuser.me/api/portraits/women/46.jpg"
      }
    ].map((p, i) => (
      <Carousel.Item key={i}>
        <div className="testimonial">

          {/* 👤 IMAGE */}
          <img src={p.img} alt="patient" className="patient-img" />

          {/* ⭐ RATING */}
          <p className="stars">⭐⭐⭐⭐⭐</p>

          {/* 💬 REVIEW */}
          <p>"{p.text}"</p>

          {/* 👤 NAME */}
          <h6>{p.name}</h6>
          <small>{p.role}</small>

        </div>
      </Carousel.Item>
    ))}
  </Carousel>
</Container>

      {/* 📊 STATS */}
      <div className="stats">
        <Container>
          <Row>
            <Col md={3}><h2>50+</h2><p>Doctors</p></Col>
            <Col md={3}><h2>1000+</h2><p>Patients</p></Col>
            <Col md={3}><h2>500+</h2><p>Appointments</p></Col>
            <Col md={3}><h2>10+</h2><p>Departments</p></Col>
          </Row>
        </Container>
      </div>

      {/* 🔥 CTA */}
      <div className="cta">
        <h3>Need Medical Help?</h3>

        {/* ✅ FIXED BUTTON */}
        <Button
          className="main-btn"
          onClick={() => navigate("/appointment")}
        >
          Book Now
        </Button>

      </div>

    </div>
  );
}

export default Home;