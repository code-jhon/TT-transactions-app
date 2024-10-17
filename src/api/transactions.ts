import { Transaction } from "../types/Transaction";

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
];

// method to fetch trx
export const fetchTransactions = async (): Promise<Transaction[]> => {
  return new Promise((resolveInner) => {
    setTimeout(resolveInner(mockTransactions), 1000);
  });
};
