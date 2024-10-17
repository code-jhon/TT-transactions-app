import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import type { FilterProps } from '../types/Transaction';

export const Filter: React.FC<FilterProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onFilter,
  onClearFilter,
 }) => {
  return (
    <Box display="flex" alignItems="center" gap={2} mb={2} mt={3}>
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
  );
};
