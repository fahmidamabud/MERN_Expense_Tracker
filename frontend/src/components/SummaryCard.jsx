import React from "react";

function SummaryCards({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);
  const balance = income - expense;

  return (
    <div className="summary-cards">
      <div className="card income">Income: ${income.toFixed(2)}</div>
      <div className="card expense">Expense: ${expense.toFixed(2)}</div>
      <div className="card balance">Balance: ${balance.toFixed(2)}</div>
    </div>
  );
}

export default SummaryCards;
