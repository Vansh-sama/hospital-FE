import { useState } from "react";
import { Form, Button, Container, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true); // 🔥 start loading

    try {
      const res = await fetch("https://hospital-be-qeur.onrender.com/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ " + data.message);

        localStorage.setItem("user", JSON.stringify(data.user));

        navigate("/");
      } else {
        alert("❌ " + data.message);
      }

    } catch (error) {
      alert("Server error");
    } finally {
      setLoading(false); // 🔥 stop loading
    }
  };

  return (
    <div className="auth-bg">
      <Container className="auth-container">
        <div className="auth-card">

          <h2 className="auth-title">Login</h2>

          <Form onSubmit={handleLogin}>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button type="submit" className="auth-btn w-100" disabled={loading}>
              {loading ? (
                <>
                  <Spinner size="sm" animation="border" /> Logging in...
                </>
              ) : (
                "Login"
              )}
            </Button>

          </Form>

          <p className="text-center mt-3">
            Don’t have an account? <Link to="/register">Register</Link>
          </p>

        </div>
      </Container>
    </div>
  );
}

export default Login;