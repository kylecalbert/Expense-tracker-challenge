import React from 'react';
import logo from './logo.svg';
import { Box } from '@mui/material';
import './App.css';
import HistoryCardGrid from './components/HistoryCardGrid';
import NewTransactions from './components/NewTransactions';

function App() {
  return (
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
  );
}

export default App;
