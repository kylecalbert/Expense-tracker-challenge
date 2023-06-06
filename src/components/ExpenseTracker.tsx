import React from 'react';
import { Header } from './header';
import Balance from './balance';
import { IncomeExpenses } from './incomeExpenses';
import NewTransactions from './NewTransactions';
import HistoryCardGrid from './HistoryCardGrid';
import { Box, Typography } from '@mui/material';

const ExpenseTracker = () => {
  const transactions = [{ amount: 100 }, { amount: 50 }];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Header />
      </Box>
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Balance transactions={transactions} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxWidth: 600,
        }}
      >
        <IncomeExpenses />
      </Box>
      <Box
        sx={{
          width: '100%',
          maxWidth: 600,
          marginTop: '6rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflowY: 'auto',
          height: 'auto',
        }}
      >
        <HistoryCardGrid />
      </Box>
      <Box
        sx={{
          width: '100%', // Update width to '100%'
          maxWidth: 600,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <NewTransactions />
      </Box>
    </Box>
  );
};

export default ExpenseTracker;
