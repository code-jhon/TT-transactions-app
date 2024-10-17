import React, { useState, useEffect } from "react";
import { fetchTransactions } from "./api/transactions";
import { Transaction } from "./types/Transaction";
import { TransactionList } from "./components/TransactionsList";

const App: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const loadTransactions = async () => {
    try {
      const data: Transaction[] = await fetchTransactions();
      setTransactions(data);
    } catch (error) {
      alert(`Error: ${error}`);
    }
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  const handleFilter = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const filtered = transactions.filter(
      (transaction) =>
        transaction.date >= start && transaction.date <= end
    );
    setTransactions(filtered);
  };

  const handleClearFilter = () => {
    setStartDate('');
    setEndDate('');
    loadTransactions(); // Reload the original transactions
  };
  

  return (
    <div className="container">
      <h1>Payment Transaction Dashboard</h1>
      {error && <p className="error">{error}</p>}

      <div className="filters">
        <label>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <button onClick={handleFilter}>Filter</button>
        <button onClick={handleClearFilter}>Clear Filter</button>
      </div>
      <TransactionList transactions={transactions} />
      </div>
  );
}

export default App;