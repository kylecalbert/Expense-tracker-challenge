import React from 'react';
import { Box, CardContent, Typography, styled } from '@mui/material';
import {Header} from './components/header';
import Balance from './components/balance';
import {IncomeExpenses} from './components/incomeExpenses';
import './App.css';

const Component = styled(Box)`
  background: #FFF;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  width: 800px;
  & > div {
    padding: 10px;
    width: 50%;
    height: 70vh;
  }
}
`;

function App() {
  const transactions = [
    { amount: 100 },
    { amount: 50 }
  ]
  return (
    <div className="App">
        <Header/>
        <Component>
      <Box>
        <Balance transactions = {transactions}/>
      </Box>
      <Box>
        <IncomeExpenses/>
      </Box>
      </Component>
  </div>
);
}

export default App;
