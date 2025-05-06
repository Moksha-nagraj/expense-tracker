import React, { useState } from "react";
import Header from "./Header";
import Balance from "./Balance";
import IncomeExpenses from "./IncomeExpenses";
import AddTransaction from "./AddTransaction";
import TransactionList from "./TransactionList";

function ExpenseApp() {
  const [transactions, setTransactions] = useState([]);
  const [currency, setCurrency] = useState("USD");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const addTransaction = (transaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((t) => t.id !== id)
    );
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(amount);
  };

  return (
    <div
      id="expense-tracker"
      className={`container ${darkMode ? "dark-mode" : ""}`}
    >
      <Header
        onToggle={toggleDarkMode}
        onCurrencyChange={handleCurrencyChange}
        currency={currency}
      />
      <Balance transactions={transactions} formatCurrency={formatCurrency} />
      <IncomeExpenses
        transactions={transactions}
        formatCurrency={formatCurrency}
      />
      <AddTransaction onAdd={addTransaction} />
      <TransactionList
        transactions={transactions}
        onDelete={deleteTransaction}
      />
    </div>
  );
}

export default ExpenseApp;
