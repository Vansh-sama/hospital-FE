import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Doctors from "./Doctors";
import Appointment from "./Appointment";
import Login from "./Login";
import Footer from "./Footer";
import Register from "./Register";
import AppointmentsList from "./AppointmentsList";
import Dashboard from "./Dashboard";



function App() {
  return (
    <BrowserRouter>

      <NavBar/>

      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/doctors" element={<Doctors/>} />

        <Route path="/appointment" element={<Appointment/>} />

        <Route path="/login" element={<Login/>} />

        <Route path="/register" element={<Register/>}/>

        <Route path="/appointments" element={<AppointmentsList />} />

        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;