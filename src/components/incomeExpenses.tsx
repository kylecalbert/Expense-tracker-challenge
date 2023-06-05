import React from 'react';
import { Typography, Box, styled, Card, CardContent} from '@mui/material';
// import { GlobalContext } from '../context/GlobalState';

const Container = styled(Box)`
    display: flex;
    & > div {
        flex: 1;
        padding: 10px;
    }
`;
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
  
    // const amounts = transactions.map((transaction) => transaction.amount);
  
    // const income = amounts
    //   .filter((item) => item > 0)
    //   .reduce((acc, item) => (acc += item), 0);
  
    // const expense =
    //   amounts
    //     .filter((item) => item < 0)
    //     .reduce((acc, item) => (acc += item), 0) * -1;
  
        return (
          <Container>
          <Card>
              <CardContent>
                  <Typography>Income</Typography>
                  {/* <Typography style={{ color: 'green' }}>+₹{income}</Typography> */}
              </CardContent>
          </Card>
          <Card>
              <CardContent>
                  <Typography>Expense</Typography>
                  {/* <Typography style={{ color: 'red' }}>-₹{expense}</Typography> */}
              </CardContent>
          </Card>
      </Container>
          );
        };