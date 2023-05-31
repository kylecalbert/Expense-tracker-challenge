import React from 'react';
import { Card, Box, CardContent, Typography } from '@mui/material';

interface HistoryCardProps {
  title: string;
  price: number;
  id: number;
}

const HistoryCards: React.FC<HistoryCardProps> = ({ title, price, id }) => {
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
          {price}
        </Typography>
      </CardContent>
      <Box
        sx={{
          backgroundColor: '#ff0000',
          minWidth: '1rem',
          width: '2%',
        }}
      />
    </Card>
  );
};

export default HistoryCards;
