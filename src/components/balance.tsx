import React, {useContext} from 'react';
import { Typography, styled, Box, } from '@mui/material';
import { ExpenseTrackerContext } from './TrackerProvider';
import { IncomeExpenses } from './incomeExpenses';

const BalanceText = styled(Typography)`
  font-size: 25px;
  margin-bottom: 20px;
`;

interface Transaction {
  amount: number;
}
                                                                                                                                                                                                                                                                                                                                                                                                 
interface BalanceProps {
  transactions: Transaction[];
}

const Balance: React.FC<BalanceProps> = ({ transactions }) => {
  
  const expenseContext = useContext(ExpenseTrackerContext);
    
  if (!expenseContext) {
    return null;
  }

 const  {expenseTrackerStorage}  = expenseContext;
 const{storage} = expenseTrackerStorage;

const incomeAmount = storage.filter((transaction)=>transaction.type==='income') 
.map((transaction)=>parseInt(transaction.amount,10)) 
.reduce((accumulator,amount) =>accumulator +amount,0);

console.log(incomeAmount)

const expenseAmount = storage.filter((transaction)=>transaction.type==='expense') //filers every transaction that has type expense   
.map((transaction)=>parseInt(transaction.amount,10)) // this maps through each one and converts string values to a number
.reduce((accumulator,amount) =>accumulator +amount,0); ///calculates the total expense

console.log(expenseAmount)

const total = incomeAmount - expenseAmount

  return (
    <Box>
      <BalanceText>Balance: {'£'+total}</BalanceText>
    </Box>
  );
};


export default Balance;
