import { useState, useEffect } from "react";
import { fetchTransactions } from "./api/transactions";
import { Transaction } from "./types/Transaction";
import { TransactionList } from "./components/TransactionsList";

export default function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data);
      } catch (error) {
        alert(`Error: ${error}`);
      }
    };
    loadTransactions();
  }, []);

  return (
    <div className="App">
      <h1>Transactions</h1>
      <TransactionList transactions={transactions} />
    </div>
  );
}