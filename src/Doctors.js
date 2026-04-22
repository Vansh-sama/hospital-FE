import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";   // ✅ ADD
import "./doctor.css";

function Doctors() {

  const navigate = useNavigate();   // ✅ ADD

  const doctors = [
    {
      id: 1,
      name: "Dr. Sharma",
      specialist: "General Physician",
      study: "MBBS, MD",
      experience: "10 Years",
      timing: "10 AM - 2 PM",
      fees: "₹500",
      awards: "Best Doctor Award 2022",
      img: "https://randomuser.me/api/portraits/men/31.jpg"
    },
    {
      id: 2,
      name: "Dr. Mehta",
      specialist: "Dentist",
      study: "BDS, MDS",
      experience: "7 Years",
      timing: "11 AM - 4 PM",
      fees: "₹300",
      awards: "Top Dentist Award",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Dr. Singh",
      specialist: "Cardiologist",
      study: "MBBS, DM Cardiology",
      experience: "12 Years",
      timing: "9 AM - 1 PM",
      fees: "₹700",
      awards: "Heart Specialist Award",
      img: "https://randomuser.me/api/portraits/men/33.jpg"
    },
    {
      id: 4,
      name: "Dr. Kaur",
      specialist: "Skin Specialist",
      study: "MBBS, MD Dermatology",
      experience: "6 Years",
      timing: "2 PM - 6 PM",
      fees: "₹400",
      awards: "Skin Care Excellence",
      img: "https://randomuser.me/api/portraits/women/34.jpg"
    },
    {
      id: 5,
      name: "Dr. Verma",
      specialist: "Eye Specialist",
      study: "MBBS, MS Ophthalmology",
      experience: "9 Years",
      timing: "10 AM - 3 PM",
      fees: "₹450",
      awards: "Best Eye Surgeon",
      img: "https://randomuser.me/api/portraits/men/35.jpg"
    },
    {
      id: 6,
      name: "Dr. Khan",
      specialist: "Child Specialist",
      study: "MBBS, MD Pediatrics",
      experience: "8 Years",
      timing: "12 PM - 5 PM",
      fees: "₹350",
      awards: "Child Care Award",
      img: "https://randomuser.me/api/portraits/men/36.jpg"
    }
  ];

  return (
    <Container className="doctor-page mt-5">

      <h2 className="doctor-title">Meet Our Specialists</h2>

      {doctors.map((doc) => (
        <Row key={doc.id} className="doctor-box align-items-center">

          {/* 👨‍⚕️ IMAGE */}
          <Col md={2}>
            <img src={doc.img} alt="doctor" className="doctor-img" />
          </Col>

          {/* 📄 DETAILS */}
          <Col md={7}>
            <h4>{doc.name}</h4>
            <p className="spec">{doc.specialist}</p>

            <p><b>Education:</b> {doc.study}</p>
            <p><b>Experience:</b> {doc.experience}</p>
            <p><b>Timing:</b> {doc.timing}</p>
            <p><b>Fees:</b> {doc.fees}</p>
            <p><b>Awards:</b> {doc.awards}</p>
          </Col>

          {/* 🔘 BUTTON */}
          <Col md={3} className="text-center">
            <Button
              className="book-btn"
              onClick={() => navigate("/appointment", { state: doc })}  // ✅ FIX
            >
              Book Appointment
            </Button>
          </Col>

        </Row>
      ))}

    </Container>
  );
}

export default Doctors;