import React, { useState } from "react";

function AddTransaction({ onAdd }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("expense");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && category && date) {
      const newTransaction = {
        id: Date.now(),
        amount: parseFloat(amount),
        category,
        date,
      };
      onAdd(newTransaction);
      setAmount("");
      setCategory("expense");
      setDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default AddTransaction;
