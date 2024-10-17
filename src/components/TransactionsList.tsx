import React from "react";
import { Transaction } from "../types/Transaction";

type TransactionProps = {
  transactions: Transaction[];
};

export const TransactionList: React.FC<TransactionProps> = ({ transactions }) => {
  return (
    <div className="transaction-list">
      {transactions &&
        transactions.map((transaction, index) => (
          <div key={index}>
            <p>id: {transaction.id}</p>
            <p>date: {transaction.date.toDateString()}</p>
            <p>desc: {transaction.description}</p>
            <p>amount: {transaction.amount}</p>
          </div>
        ))}
    </div>
  );
};
