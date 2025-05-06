import React from "react";
import jsPDF from "jspdf";

function TransactionList({ transactions, onDelete }) {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Transaction Report", 20, 10);

    transactions.forEach((txn, index) => {
      doc.text(
        `${index + 1}. ${txn.text} | ${txn.amount} | ${txn.category}`,
        20,
        20 + index * 10
      );
    });

    doc.save("transactions.pdf");
  };

  return (
    <div>
      <h3>Transaction History</h3>
      <ul className="list">
        {transactions.map((txn) => (
          <li key={txn.id} className={txn.amount < 0 ? "minus" : "plus"}>
            {txn.text} <span>{txn.amount}</span>
            <button onClick={() => onDelete(txn.id)} className="delete-btn">
              x
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={generatePDF}
        style={{ marginTop: "20px", padding: "10px" }}
      >
        Download PDF Report
      </button>
    </div>
  );
}

export default TransactionList;
