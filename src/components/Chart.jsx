import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Chart({ transactions }) {
  const income = transactions
    .filter((t) => t.category === "income")
    .reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions
    .filter((t) => t.category === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const data = [
    { name: "Income", value: income },
    { name: "Expense", value: expense },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#4caf50" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Chart;
