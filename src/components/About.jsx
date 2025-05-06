import React from "react";
import "./About.css";

function About() {
  return (
    <div id="about" className="about-section">
      <div className="about-container">
        <h2>About Us</h2>
        <p className="about-description">
          Welcome to <strong>ExpenseTracker</strong>, your ultimate solution to
          managing personal finances with ease. Our app helps you track your
          expenses, set budget goals, and stay on top of your financial health.
        </p>
        <div className="about-content">
          <div className="feature">
            <h3>Track Your Spending</h3>
            <p>
              Effortlessly log and categorize all your expenses, making it
              easier to monitor where your money goes.
            </p>
          </div>
          <div className="feature">
            <h3>Set Budget Goals</h3>
            <p>
              Create custom budgets for different spending categories and get
              notified when you're nearing your limit.
            </p>
          </div>
          <div className="feature">
            <h3>View Spending Trends</h3>
            <p>
              Visualize your spending habits through charts and graphs, so you
              can make informed decisions about your finances.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
