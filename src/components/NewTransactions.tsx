import React, { useContext } from 'react';
import {
  TextField,
  Box,
  Typography,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { ExpenseTrackerContext } from './TrackerProvider';

const NewTransactions = () => {
  const expenseContext = useContext(ExpenseTrackerContext);
  if (!expenseContext) {
    return null;
  }

  const {
    expenseTrackerData, // Temporary Data container for the a new transaction that user wants to add (title, amount, type)
    setExpenseTrackerData, // Function to update the expenseTrackerData
    setExpenseTrackerStorage,
    expenseTrackerStorage, //  used to store the temprary data which can be saved and retained in the history section.
    expenseTrackerErrors, // Errors related to the new transaction inputs
    setExpenseTrackerErrors, // Function to update the expenseTrackerErrors
  } = expenseContext;

  const { title, amount, type } = expenseTrackerData;
  const { titleError, amountError, typeError } = expenseTrackerErrors;

  const handleAddTransaction = () => {
    if (!title || !amount || !type) {
      // Checking if any of the required fields title, amount, type is missing
      setExpenseTrackerErrors({
        ...expenseTrackerErrors,
        titleError: title ? '' : 'Title is required', //if so, check if title has a value, if it doesnt then  add error message
        amountError: amount ? '' : 'Amount is required',
        typeError: type ? '' : 'Please select Income or Expense',
      });

      return false; // Return false to prevent adding the transaction
    }

    //adding the new transaction the user has entered to the storage so it can be stored in history card section.
    setExpenseTrackerStorage((previousStorage) => ({
      ...previousStorage,
      storage: [...previousStorage.storage, expenseTrackerData],
    }));

  };



  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue === '' || /^\d+$/.test(inputValue)) {
      ///if the amount is not a number  then dont allow the user to enter a value
      setExpenseTrackerData({ ...expenseTrackerData, amount: inputValue });
      setExpenseTrackerErrors({ ...expenseTrackerErrors, amountError: '' });
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography>Enter the title</Typography>
      <TextField
        error={Boolean(titleError)}
        helperText={titleError}
        placeholder="please enter the title"
        label="title"
        margin="normal"
        variant="outlined"
        value={title}
        onChange={(e) => {
          setExpenseTrackerData({
            ...expenseTrackerData,
            title: e.target.value,
          });
          setExpenseTrackerErrors({ ...expenseTrackerErrors, titleError: '' });
        }}
        style={{ width: 500 }}
      />

      <Typography>Enter the amount</Typography>
      <TextField
        error={Boolean(amountError)}
        helperText={amountError}
        placeholder="please enter the amount"
        label="amount"
        margin="normal"
        variant="outlined"
        value={amount}
        onChange={handleAmountChange}
        style={{ width: 500 }}
      />

      <Box
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FormControl>
          <Typography>Income or Expense</Typography>
          <RadioGroup
            defaultValue="income"
            name="radio-buttons-group"
            sx={{ flexDirection: 'row' }}
            value={type}
            onChange={(e) => {
              setExpenseTrackerData({
                ...expenseTrackerData,
                type: e.target.value,
              });
              setExpenseTrackerErrors({
                ...expenseTrackerErrors,
                typeError: '',
              });
            }}
          >
            <FormControlLabel
              value="income"
              control={<Radio />}
              label="Income"
            />
            <FormControlLabel
              value="expense"
              control={<Radio />}
              label="Expense"
            />
          </RadioGroup>
          {typeError && <Typography color="error">{typeError}</Typography>}
        </FormControl>

        <Button
          onClick={handleAddTransaction}
          style={{ marginTop: 10 }}
          variant="contained"
          color="primary"
        >
          Add transactions
        </Button>
      </Box>
    </Box>
  );
};

export default NewTransactions;
