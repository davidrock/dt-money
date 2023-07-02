import { ReactNode, createContext, useEffect, useState } from "react";

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
}

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

export const TransactionsContext = createContext<TransactionContextType>(
  {} as TransactionContextType
);

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const url = new URL("http://localhost:3000/transactions");

    if (query) {
      url.searchParams.append("q", query);
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
      }}>
      {children}
    </TransactionsContext.Provider>
  );
}
