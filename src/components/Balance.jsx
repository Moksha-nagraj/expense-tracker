import React, { useState, useEffect } from "react";

function Balance({ transactions }) {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const total = transactions.reduce(
      (acc, curr) =>
        curr.category === "income" ? acc + curr.amount : acc - curr.amount,
      0
    );
    setBalance(total);
  }, [transactions]);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${balance.toFixed(2)}</h1>
    </>
  );
}

export default Balance;
