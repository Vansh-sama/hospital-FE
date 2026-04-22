import React, { useEffect, useState, useRef } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AppointmentsList() {

  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);

  const hasChecked = useRef(false);

  const fetchAppointments = async () => {
    const res = await fetch("https://hospital-be-qeur.onrender.com/api/appointments");
    const data = await res.json();
    setAppointments(data);
  };

  useEffect(() => {
    if (hasChecked.current) return;
    hasChecked.current = true;

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || user.role !== "admin") {
      alert("Access denied ❌");
      navigate("/");
    } else {
      fetchAppointments();
    }
  }, [navigate]); // ✅ FIX

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure to delete?");
    if (!confirmDelete) return;

    const res = await fetch(`https://hospital-be-qeur.onrender.com/api/appointments/${id}`, { // ✅ FIX
      method: "DELETE"
    });

    const data = await res.json();
    alert(data.message);

    fetchAppointments();
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">All Appointments</h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((a) => (
            <tr key={a._id}>
              <td>{a.name}</td>
              <td>{a.email}</td>
              <td>{a.phone}</td>
              <td>{a.doctor}</td>
              <td>{a.date}</td>
              <td>{a.time}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(a._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default AppointmentsList;