import React from 'react';
import { Grid, Box } from '@mui/material';
import HistoryCards from './HistoryCards';
const HistoryCardGrid = () => {
  const cards = [
    { id: 1, title: 'Camera', price: 10 },
    { id: 2, title: 'Mobile phone', price: 30 },
    { id: 3, title: 'Cake ', price: 30 },
    { id: 3, title: 'Cash', price: 30 },
  ];

  return (
    <Grid container spacing={1}>
      {cards.map((card) => (
        <Grid key={card.id} item lg={12}>
          <HistoryCards id={card.id} title={card.title} price={card.price} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HistoryCardGrid;
