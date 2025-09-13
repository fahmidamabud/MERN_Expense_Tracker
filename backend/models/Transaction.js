// Transaction model
import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a text field"],
    },
    amount: {
      type: Number,
      required: [true, "Please add a positive or negative number"],
    },
    category: {
      type: String,
      default: "General",
    },
    type: {
      type: String,
      enum: ["income", "expense"],
      required: true,
    },
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
