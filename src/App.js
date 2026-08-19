import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Create from "./pages/Create";
import AdminRoute from "./components/AdminRoute";
import AdminDasboard from "./pages/AdminDasboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/create" element={<AdminRoute><Create /></AdminRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminRoute><AdminDasboard /></AdminRoute>} />
            <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
