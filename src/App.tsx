import React from 'react';
import { Box, CardContent, Typography } from '@mui/material';
import Header from './components/header';
import Balance from './components/balance';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
      <Box>
        <Balance />
      </Box>
  </div>
);
}

export default App;
