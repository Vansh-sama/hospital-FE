import { useState } from "react";
import { Form, Button, Container, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false); // 🔥 loading state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    setLoading(true); // 🔥 start loading

    try {
      const res = await fetch("https://hospital-be-qeur.onrender.com/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ " + data.message);
        navigate("/login");
      } else {
        alert("❌ " + data.message);
      }

    } catch (error) {
      console.log(error);
      alert("❌ Server error");
    } finally {
      setLoading(false); // 🔥 stop loading
    }
  };

  return (
    <div className="auth-bg">

      <Container className="auth-container">
        <div className="auth-card">

          <h2 className="auth-title">Register</h2>

          <Form onSubmit={handleRegister}>

            {/* NAME */}
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* EMAIL */}
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* PASSWORD */}
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* BUTTON */}
            <Button type="submit" className="auth-btn w-100" disabled={loading}>
              {loading ? (
                <>
                  <Spinner size="sm" animation="border" /> Registering...
                </>
              ) : (
                "Register"
              )}
            </Button>

          </Form>

          <p className="text-center mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>

        </div>
      </Container>

    </div>
  );
}

export default Register;