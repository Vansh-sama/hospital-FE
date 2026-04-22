import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();
  const [stats, setStats] = useState({});

  const fetchStats = async () => {
    const res = await fetch("http://localhost:5000/api/dashboard");
    const data = await res.json();
    setStats(data);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || user.role !== "admin") {
      alert("Access denied ❌");
      navigate("/");
    } else {
      fetchStats();
    }
  }, []);

  return (
    <Container className="mt-5">

      <h2 className="mb-4">Admin Dashboard</h2>

      <Row>

        <Col md={4}>
          <Card className="p-3 text-center shadow">
            <h5>Total Appointments</h5>
            <h2>{stats.totalAppointments}</h2>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-3 text-center shadow">
            <h5>Total Users</h5>
            <h2>{stats.totalUsers}</h2>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-3 text-center shadow">
            <h5>Total Doctors</h5>
            <h2>{stats.totalDoctors}</h2>
          </Card>
        </Col>

      </Row>

    </Container>
  );
}

export default Dashboard;