// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { fetchTransactions } from '../api/transactions';
import { Transaction } from '../types/Transaction';
import { TransactionList } from '../components/TransactionsList';
import { Header } from '../components/Header';
import { Filter } from '../components/Filter';

const Home: React.FC = () => {
  const today = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(today.getDate() - 7);

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<string>(formatDate(sevenDaysAgo));
  const [endDate, setEndDate] = useState<string>(formatDate(today));

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    try {
      const data: Transaction[] = await fetchTransactions();
      setTransactions(data);
    } catch (error) {
      setError(`Error: ${error}`);
    }
  };

  const handleFilter = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const filtered = transactions.filter(
      (transaction) => transaction.date >= start && transaction.date <= end
    );
    setTransactions(filtered);
  };

  const handleClearFilter = () => {
    setStartDate(formatDate(sevenDaysAgo));
    setEndDate(formatDate(today));
    loadTransactions();
  };

  return (
    <Container disableGutters maxWidth={false} style={{ margin: 0 }}>
      {error && <Typography color="error">{error}</Typography>}
      <Header />
      <Filter 
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        onFilter={handleFilter}
        onClearFilter={handleClearFilter}
      />
      <TransactionList transactions={transactions} />
    </Container>
  );
};

export default Home;
