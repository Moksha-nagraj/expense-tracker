import React from "react";

function IncomeExpenses({ transactions }) {
  const income = transactions
    .filter((t) => t.category === "income")
    .reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions
    .filter((t) => t.category === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income.toFixed(2)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${expense.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
