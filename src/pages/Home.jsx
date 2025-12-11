import React from "react";
import Header from "../components/Header";
import Features from "../components/Features";
import Products from "../components/Products";
import Services from "../components/Services";
import About from "../components/About";

 function Home() {
  return (
    <div className="font-sans antialiased">
      <Header />
      <Features />
      <Products />
      <Services />
      <About />
    </div>
  );
}

export default Home;