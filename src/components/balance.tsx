import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

// //Money formatter function
// function moneyFormatter(num) {
//   let p = num.toFixed(2).split('.');
//   return (
//     '$ ' + (p[0].split('')[0]=== '-' ? '-' : '') +
//     p[0]
//       .split('')
//       .reverse()
//       .reduce(function (acc, num, i, orig) {
//         return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
//       }, '') +
//     '.' +
//     p[1]
//   );
// }

// export const Balance = () => {

//   const amounts = transactions.map(transaction => transaction.amount);

//   const total = amounts.reduce((acc, item) => (acc += item), 0);

//   return (
//     <>
//       <h4>Your Balance</h4>
//     <h1>{moneyFormatter(total)}</h1>
//     </>
//   )
// }

interface HistoryCardProps{
  title:string 
  price:number,

}

const HistoryCard: React.FC<HistoryCardProps> = ({ title, price }) => {
  return (
    <Card sx={{ backgroundColor: '#ffffff', display: 'flex', justifyContent: 'space-between' }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="h6" component="div" align="right">
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HistoryCard;