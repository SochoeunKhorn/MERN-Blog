import React from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { Routes, Route, BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
