import React from "react";
import './Homepage/index.css';
import Header from "./Homepage/Header.js";
import Hero from "./Homepage/Hero.js";
import Features from "./Homepage/Features.js";
import Get_started from "./Homepage/Get_started.js";
import Footer from "./Homepage/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <hr/>
      <Features />
      <hr/>
      <Get_started />
      <Footer />
    </div>
  );
}

export default App;