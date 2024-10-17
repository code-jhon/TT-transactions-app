import type { Transaction } from "../types/Transaction";

const mockTransactions: Transaction[] = [
  {
    id: "001",
    date: new Date("2024-01-01"),
    description: "Burlington",
    amount: 500,
  },
  {
    id: "002",
    date: new Date("2024-01-02"),
    description: "Ross",
    amount: 1500,
  },
  {
    id: "003",
    date: new Date("2024-01-03"),
    description: "Macy's",
    amount: 5200,
  },
  {
    id: "004",
    date: new Date("2024-01-04"),
    description: "GameStop",
    amount: 500,
  },
];

/**
 * Simulates fetching transactions from a data source.
 * Returns a promise that resolves with mock transaction data after a delay.
 * 
 * @returns {Promise<Transaction[]>} A promise that resolves to an array of transactions.
 */
export const fetchTransactions = async (): Promise<Transaction[]> => {
  return new Promise((resolveInner, reject) => {
    try {
      setTimeout(() => resolveInner(mockTransactions), 1000);
    } catch (error) {
      reject(error);
    }
  });
};
