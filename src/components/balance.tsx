import React from 'react';
import { Typography, styled, Box, Card, CardContent } from '@mui/material';

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
  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2);

  return (
    <Box>
      <BalanceText>Balance: ₹{total}</BalanceText>
    </Box>
  );
};

export default Balance;

// const BalanceCard: React.FC = () => {
//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h5" component="div">
//           Income
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Expense
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default BalanceCard;