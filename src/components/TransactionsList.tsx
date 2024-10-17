import React from "react";
import { Transaction } from "../types/Transaction";
import { List, ListItem, Typography, Box, Card, CardContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

type TransactionProps = {
  transactions: Transaction[];
};

export const TransactionList: React.FC<TransactionProps> = ({ transactions }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <List
      className="transaction-list"
      style={{
        display: 'grid',
        gridTemplateColumns: isMobile
          ? 'repeat(auto-fill, minmax(100%, 1fr))'
          : isTablet
          ? 'repeat(auto-fill, minmax(50%, 1fr))'
          : 'repeat(auto-fill, minmax(20%, 1fr))',
        gap: '16px',
      }}
    >
      {transactions &&
        transactions.map((transaction, index) => (
          <ListItem key={index}>
            <Card variant="outlined" style={{ minHeight: '200px', width: '100%'}}>
              <CardContent>
                <Box style={{ minHeight: '200px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Typography variant="body1">{transaction.date.toDateString()}</Typography>
                  <Typography variant="body2">Transaction id: {transaction.id}</Typography>
                  <Typography variant="body2">{transaction.description}</Typography>
                  <Typography variant="body1"><strong>USD ${transaction.amount}</strong></Typography>
                  <div>
                    <img
                      src={`https://cdn.brandfetch.io/${transaction.description}.com/w/512/h/121/logo`}
                      alt={`${transaction.description} Logo`}
                      style={{ width: '120px', height: 'auto', marginTop: '8px' }}
                    />
                  </div>
                </Box>
              </CardContent>
            </Card>
          </ListItem>
        ))}
    </List>
  );
};