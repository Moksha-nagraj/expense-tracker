import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">ExpenseTracker</div>
      <ul>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#expense-tracker">Tracker</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
