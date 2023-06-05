import React from 'react';
import { Card, Box, CardContent, Typography } from '@mui/material';

interface HistoryCardProps {
  title: string;
  amount: string;
  type: string;
}

const HistoryCards: React.FC<HistoryCardProps> = ({ title, amount, type }) => {
  const backgroundColor = type === 'income' ? 'green' : 'red';

  return (
    <Card
      sx={{
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <CardContent
        sx={{
          flex: '1 1 auto',
          justifyContent: 'flex-start',
          paddingRight: '16px',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          {title}
        </Typography>
      </CardContent>
      <CardContent sx={{ minWidth: '40px', textAlign: 'right' }}>
        <Typography variant="h6" sx={{ color: 'black' }}>
          {amount}
        </Typography>
      </CardContent>
      <Box
        sx={{
          backgroundColor: backgroundColor,
          minWidth: '1rem',
          width: '2%',
        }}
      />
    </Card>
  );
};

export default HistoryCards;
