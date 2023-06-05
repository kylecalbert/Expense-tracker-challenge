import React from 'react';
import { Typography, Box, } from '@mui/material';
// import { GlobalContext } from '../context/GlobalState';

//Money formatter function
function moneyFormatter(num: number): string {
    let p = num.toFixed(2).split('.');
    return (
      '$ ' +
      p[0]
        .split('')
        .reverse()
        .reduce(function (acc, num, i, orig) {
          return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
        }, '') +
      '.' +
      p[1]
    );
  }
  
  export const IncomeExpenses: React.FC = () => {
    // const { transactions } = useContext(GlobalContext);
  
    const amounts = transactions.map((transaction) => transaction.amount);
  
    const income = amounts
      .filter((item) => item > 0)
      .reduce((acc, item) => (acc += item), 0);
  
    const expense =
      amounts
        .filter((item) => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1;
  
        return (
            <Box className="inc-exp-container">
              <Box>
                <Typography variant="h4">Income</Typography>
                <Typography className="money plus">{moneyFormatter(income)}</Typography>
              </Box>
              <Box>
                <Typography variant="h4">Expense</Typography>
                <Typography className="money minus">{moneyFormatter(expense)}</Typography>
              </Box>
            </Box>
          );
        };