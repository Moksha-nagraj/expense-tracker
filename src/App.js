// App.js
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import ExpenseApp from "./components/ExpenseApp";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="expense-tracker">
        <ExpenseApp /> {/* Expense Tracker section */}
      </div>
      <About />
      <Contact />
    </>
  );
}

export default App;
