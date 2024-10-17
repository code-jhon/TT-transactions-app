export interface Transaction {
  id: string;
  date: Date;
  description: string;
  amount: number;
}

export interface HeaderProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onFilter: () => void;
  onClearFilter: () => void;
}
