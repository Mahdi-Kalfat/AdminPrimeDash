import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Header from "./Components/header";
import Dashboard from "./pages/dashboard";
import Whitelist from "./pages/whitelist";
import emsWhitelist from "./pages/emsWhitelist";
import lspdWhitelist from "./pages/lspdWhitelist";
function App() {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar remains consistent */}
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header /> {/* Header at the top */}
          <main className="flex-1 bg-gray-100 p-4 overflow-auto">
            {/* Content changes based on route */}
            <Routes>
              <Route path="/" element={<Dashboard />} /> {/* Dashboard Route */}
              <Route path="/whitelist" element={<Whitelist />} />{" "}
              <Route path="/police-whitelist" element={<lspdWhitelist />} />{" "}
              <Route path="/EMS-whitelist" element={<emsWhitelist />} />{" "}
              {/* Status Page Route */}
            </Routes>
          </main>
          <Footer /> {/* Footer at the bottom */}
        </div>
      </div>
    </Router>
  );
}

export default App;
