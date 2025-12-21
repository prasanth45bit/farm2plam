import React from "react";
import Header from "../components/Header";
import Features from "../components/Features";
import Products from "../components/Products";
import Services from "../components/Services";
import About from "../components/About";

 function Home() {
  return (
    <div className="font-sans antialiased">
  <Header id="home" />
  <Features id="features" />
  <Products id="products" />
  <Services id="services" />
  <About id="about" />
</div>

  );
}

export default Home;