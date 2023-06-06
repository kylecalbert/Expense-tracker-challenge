import React, { useContext } from 'react';
import { Typography, Box, styled, Card, CardContent} from '@mui/material';

import { ExpenseTrackerContext } from './TrackerProvider';


const Container = styled(Box)`
    display: flex;
    & > div {
        flex: 1;
        padding: 10px;
    }
`;
  
  export const IncomeExpenses: React.FC = () => {
    const expenseContext = useContext(ExpenseTrackerContext);
    
    if (!expenseContext) {
      return null;
    }

   const  {expenseTrackerStorage}  = expenseContext;
   const{storage} = expenseTrackerStorage;







const expenseAmount = storage.filter((transaction)=>transaction.type==='expense') //filers every transaction that has type expense   
.map((transaction)=>parseInt(transaction.amount,10)) // this maps through each one and converts string values to a number
.reduce((accumulator,amount) =>accumulator +amount,0); ///calculates the total expense
 


console.log(expenseAmount)



const incomeAmount = storage.filter((transaction)=>transaction.type==='income') 
.map((transaction)=>parseInt(transaction.amount,10)) 
.reduce((accumulator,amount) =>accumulator +amount,0);

console.log(incomeAmount)

  
        return (
          <Container>
          <Card>
              <CardContent>
                  <Typography>Income</Typography>
                  <Typography style={{ color: 'green' }}>+£{incomeAmount}</Typography>
              </CardContent>
          </Card>
          <Card>
              <CardContent>
                  <Typography>Expense</Typography>
                  <Typography style={{ color: 'red' }}>-£{expenseAmount}</Typography>
              </CardContent>
          </Card>
      </Container>
          );
        };