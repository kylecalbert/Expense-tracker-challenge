import React, { useContext } from 'react';
import { Grid, Box } from '@mui/material';
import HistoryCards from './HistoryCards';
import { ExpenseTrackerContext } from './TrackerProvider';
const HistoryCardGrid = () => {
  const expenseContext = useContext(ExpenseTrackerContext);

  if (!expenseContext) {
    return null;
  }

  const { expenseTrackerStorage } = expenseContext;
  const { storage } = expenseTrackerStorage;

  return (
    <Grid container spacing={1}>
      {storage.map((card) => (
        <Grid item lg={12}>
          <HistoryCards title={card.title} amount={card.amount} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HistoryCardGrid;
