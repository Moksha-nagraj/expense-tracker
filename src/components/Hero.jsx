// Hero.jsx
import React from "react";
import "./Hero.css";

function Hero() {
  const handleGetStarted = () => {
    // Scroll to the Expense Tracker section
    const element = document.getElementById("expense-tracker");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="hero" className="hero-section">
      <div className="overlay">
        <h1>Track Your Expenses</h1>
        <p>Manage your budget efficiently with our tracker.</p>
        <button onClick={handleGetStarted}>Get Started</button>
      </div>
    </div>
  );
}

export default Hero;
