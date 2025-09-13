import React, { useState } from "react";

function TransactionForm({ addTransaction, clearAll }) {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    type: "income",
    category: "other",
    date: new Date().toISOString().split("T")[0],
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.amount) return;
    addTransaction({ ...formData, amount: parseFloat(formData.amount) });
    setFormData({ ...formData, title: "", amount: "" });
  };

  return (
    <div className="form-container">
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <input
          type="number"
          name="amount"
          value={formData.amount}
          placeholder="Amount"
          onChange={handleChange}
        />
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="salary">Salary</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="shopping">Shopping</option>
          <option value="other">Other</option>
        </select>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
      <button onClick={clearAll} className="btn-delete">Clear All</button>
    </div>
  );
}

export default TransactionForm;
