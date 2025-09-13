// transactionController.js
import Transaction from "../models/Transaction.js";

// @desc    Get all transactions
// @route   GET /api/transactions
export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ createdAt: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Add new transaction
// @route   POST /api/transactions
export const addTransaction = async (req, res) => {
  try {
    const { text, amount, category, type } = req.body;
    const transaction = await Transaction.create({ text, amount, category, type });
    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ message: "Invalid data" });
  }
};

// @desc    Delete transaction
// @route   DELETE /api/transactions/:id
export const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    await transaction.deleteOne();
    res.json({ message: "Transaction removed" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
