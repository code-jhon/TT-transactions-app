import React from "react";
import { Transaction } from "../types/Transaction";
import { List, ListItem, Typography, Box, Card, CardContent } from "@mui/material";

type TransactionProps = {
  transactions: Transaction[];
};

export const TransactionList: React.FC<TransactionProps> = ({ transactions }) => {
  return (
    <List className="transaction-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(25%, 1fr))', gap: '16px' }}>
      {transactions &&
        transactions.map((transaction, index) => (
          <ListItem key={index}>
            <Card variant="outlined" style={{ width: '100%' }}>
              <CardContent>
                <Box>
                  <Typography variant="body1">{transaction.date.toDateString()}</Typography>
                  <Typography variant="body2">Transaction id: {transaction.id}</Typography>
                  <Typography variant="body2">{transaction.description}</Typography>
                  <Typography variant="body1"><strong>USD ${transaction.amount}</strong></Typography>
                </Box>
              </CardContent>
            </Card>
          </ListItem>
        ))}
    </List>
  );
};