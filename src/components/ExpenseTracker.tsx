import React from 'react';
import { Header } from './header';
import Balance from './balance';
import { IncomeExpenses } from './incomeExpenses';
import NewTransactions from './NewTransactions';
import HistoryCardGrid from './HistoryCardGrid';
import { Box } from '@mui/material';




const ExpenseTracker = () => {
  const transactions = [
    { amount: 100 },
    { amount: 50 }
  ]

  return (

    
    <Box sx={{ display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',}}>

      <Box>
        <Header/>
        </Box>
      <Box>
        <Balance transactions = {transactions}/>
      </Box>
      <Box sx={{display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <IncomeExpenses/>
      </Box>
        <Box
          sx={{
            width: '80%',
            maxWidth: 600,

            margin: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <HistoryCardGrid />
        </Box>
        <Box
          sx={{
            width: '80%',
            maxWidth: 600,

            marginTop: '2rem',
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
