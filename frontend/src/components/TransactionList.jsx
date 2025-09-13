import React from "react";

function TransactionList({ transactions, deleteTransaction }) {
  if (transactions.length === 0)
    return <p className="empty-msg">No transactions yet</p>;

  return (
    <div className="transaction-list">
      {transactions.map((t) => (
        <div key={t._id} className="transaction-item">
          <div>
            <strong>{t.title}</strong> - {t.category} <br />
            <small>{new Date(t.date).toLocaleDateString()}</small>
          </div>
          <div className={t.type === "income" ? "income" : "expense"}>
            {t.type === "income" ? "+" : "-"}${t.amount.toFixed(2)}
          </div>
          <button onClick={() => deleteTransaction(t._id)}>❌</button>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;
