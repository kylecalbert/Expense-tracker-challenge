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
    <Box>
      <Grid container spacing={1}>
        {storage.map((card, index) => (
          <Grid item lg={12} key={index} sx={{ height: '80px' }}>
            <HistoryCards
              title={card.title}
              amount={card.amount}
              type={card.type}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HistoryCardGrid;
