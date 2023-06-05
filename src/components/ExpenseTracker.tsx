import React from 'react';

import NewTransactions from './NewTransactions';
import HistoryCardGrid from './HistoryCardGrid';
import { Box } from '@mui/material';

const ExpenseTracker = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
        className="App"
      >
        <Box
          sx={{
            width: '80%',
            maxWidth: 600,

            marginBottom: '2rem',
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
    </Box>
  );
};

export default ExpenseTracker;
