import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="custom-navbar sticky-top">
      <Container>

        {/* 🏥 LOGO */}
        <Navbar.Brand as={Link} to="/" className="logo">
          City Care Hospital
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <Nav className="gap-3 align-items-center">

            {/* HOME */}
            <Nav.Link
              as={Link}
              to="/"
              className={location.pathname === "/" ? "active-link" : ""}
            >
              Home
            </Nav.Link>

            {/* DOCTORS */}
            <Nav.Link
              as={Link}
              to="/doctors"
              className={location.pathname === "/doctors" ? "active-link" : ""}
            >
              Doctors
            </Nav.Link>

            {/* APPOINTMENT (normal users) */}
            <Nav.Link
              as={Link}
              to="/appointment"
              className={location.pathname === "/appointment" ? "active-link" : ""}
            >
              Appointment
            </Nav.Link>

            {/* 🔐 ADMIN ONLY LINKS */}
            {user?.role === "admin" && (
              <>
                <Nav.Link
                  as={Link}
                  to="/appointments"
                  className={location.pathname === "/appointments" ? "active-link" : ""}
                >
                  Appointments
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/dashboard"
                  className={location.pathname === "/dashboard" ? "active-link" : ""}
                >
                  Dashboard
                </Nav.Link>
              </>
            )}

            {/* 👤 USER */}
            {user ? (
              <>
                <span className="user-name">Hi, {user.name}</span>

                <Nav.Link onClick={handleLogout} className="logout-btn">
                  Logout
                </Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login" className="login-btn">
                Login
              </Nav.Link>
            )}

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavBar;