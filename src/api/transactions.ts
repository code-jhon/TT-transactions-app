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
    description: "Underarmour",
    amount: 1500,
  },
  {
    id: "003",
    date: new Date("2024-01-03"),
    description: "nautica",
    amount: 5200,
  },
  {
    id: "004",
    date: new Date("2024-01-04"),
    description: "GameStop",
    amount: 500,
  },
  {
    id: "005",
    date: new Date("2024-01-05"),
    description: "Amazon",
    amount: 2500,
  },
  {
    id: "006",
    date: new Date("2024-01-06"),
    description: "blizzard",
    amount: 300,
  },
  {
    id: "007",
    date: new Date("2024-05-07"),
    description: "puma",
    amount: 1200,
  },
  {
    id: "008",
    date: new Date("2024-01-08"),
    description: "Walmart",
    amount: 700,
  },
  {
    id: "009",
    date: new Date("2024-10-09"),
    description: "chanel",
    amount: 900,
  },
  {
    id: "010",
    date: new Date("2024-01-10"),
    description: "Bestbuy",
    amount: 1000,
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
