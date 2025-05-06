import React from "react";

function Header({ onToggle, onCurrencyChange, currency }) {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>Expense Tracker</h2>

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <select onChange={onCurrencyChange} value={currency}>
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
          <option value="INR">INR (₹)</option>
          <option value="GBP">GBP (£)</option>
        </select>
        <button onClick={onToggle}>Toggle Dark Mode</button>
      </div>
    </header>
  );
}

export default Header;
