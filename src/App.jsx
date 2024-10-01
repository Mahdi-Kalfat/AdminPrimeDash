import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Whitelist from "./pages/whitelist"; // Import the Whitelist component
import lspdWhitelist from "./pages/lspdWhitelist"; // Import the Police whitelist component
import emsWhitelist from "./pages/emsWhitelist"; // Import the EMS whitelist component
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main dashboard route */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Whitelist routes */}
        <Route path="/whitelist" element={<Whitelist />} />
        <Route path="/police-whitelist" element={<lspdWhitelist />} />
        <Route path="/EMS-whitelist" element={<emsWhitelist />} />
        {/* Add a catch-all route or redirect if needed */}
        <Route path="/" element={<Login />} /> {/* Default route */}
      </Routes>
    </Router>
  );
}

export default App;
