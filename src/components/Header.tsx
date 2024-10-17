
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, TextField } from '@mui/material';
import type { HeaderProps } from '../types/Transaction';

export const Header: React.FC<HeaderProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onFilter,
  onClearFilter,
}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Transactions (TT)
        </Typography>

        <Box display="flex" alignItems="center" gap={2} mb={3}>
          <TextField
            label="Start Date"
            type="date"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
          />
          <TextField
            label="End Date"
            type="date"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={onFilter}>
            Filter
          </Button>
          <Button variant="outlined" color="secondary" onClick={onClearFilter}>
            Clear
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
