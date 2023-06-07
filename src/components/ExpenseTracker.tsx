import React from 'react';
import { Header } from './header';
import Balance from './balance';
import { IncomeExpenses } from './incomeExpenses';
import NewTransactions from './NewTransactions';
import HistoryCardGrid from './HistoryCardGrid';
import { Box } from '@mui/material';

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
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          textAlign: 'center',
        }}
      >
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
          maxWidth: 400,
        }}
      >
        <IncomeExpenses />
      </Box>
      <Box
        sx={{
          maxWidth: 400,
          marginTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflowY: 'auto',
        }}
      >
        <HistoryCardGrid />
      </Box>
      <Box
        sx={{
          width: '100%',
          maxWidth: 400,
          display: 'flex',
          marginBottom: 20,
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
