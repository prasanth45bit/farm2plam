import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import ProductDetail from "./pages/ProductDetail";
import ModernFarming from "./pages/ModernFarming";
import ImageUpload from "./pages/upload.jsx";

export default function App() {
  return (
    <Router>
      <div className="font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/products/:categoryId" element={<ProductListing />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/services" element={<ModernFarming />} />
            <Route path="/upload" element={<ImageUpload />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}