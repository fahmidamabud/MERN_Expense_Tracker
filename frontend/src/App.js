import React, { useEffect, useState } from "react";
import TransactionForm from "./components/TransactionForm";
import SummaryCards from "./components/SummaryCard";
import ChartComponent from "./components/ChartComponent";
import api from "./services/api";
import TransactionList from "./components/TransactionList";

function App() {
  const [transactions, setTransactions] = useState([]);

  // Fetch all transactions
  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const res = await api.get("/transactions");
    setTransactions(res.data);
  };

  const addTransaction = async (transaction) => {
    const res = await api.post("/transactions", transaction);
    setTransactions([res.data, ...transactions]);
  };

  const deleteTransaction = async (id) => {
    await api.delete(`/transactions/${id}`);
    setTransactions(transactions.filter((t) => t._id !== id));
  };

  const clearAll = async () => {
    await api.delete("/transactions");
    setTransactions([]);
  };

  return (
    <div className="app-container">
      <h1>💰 Expense Tracker</h1>
      <div className="app-content">
        <TransactionForm addTransaction={addTransaction} clearAll={clearAll} />
        <div className="right-panel">
          <SummaryCards transactions={transactions} />
          <TransactionList
            transactions={transactions}
            deleteTransaction={deleteTransaction}
          />
          <ChartComponent transactions={transactions} />
        </div>
      </div>
    </div>
  );
}

export default App;
