import React, { useState } from 'react';
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

interface FormData {
  title: string;
  amount: string;
  type: string;
}

interface FormDataErrors {
  titleError: string;
  amountError: string;
  typeError: string;
}

const NewTransactions = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    amount: '',
    type: '',
  });

  const [formDataErrors, setFormDataErrors] = useState<FormDataErrors>({
    titleError: '',
    amountError: '',
    typeError: '',
  });

  const handleAddTransaction = () => {
    if (!formData.title || !formData.amount || !formData.type) {
      if (!formData.title) {
        setFormDataErrors({
          ...formDataErrors,
          titleError: 'Title is required',
          amountError: 'Amount is required',
          typeError: 'Please select Income or Expense',
        });
      }

      return false;
    }

    alert('Transaction added successfully');
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue === '' || /^\d+$/.test(inputValue)) {
      setFormData({ ...formData, amount: inputValue });
      setFormDataErrors({ ...formDataErrors, amountError: '' });
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography>Enter the title</Typography>
      <TextField
        error={Boolean(formDataErrors.titleError)}
        helperText={formDataErrors.titleError}
        placeholder="please enter the title"
        label="title"
        margin="normal"
        variant="outlined"
        value={formData.title}
        onChange={(e) => {
          setFormData({ ...formData, title: e.target.value });
          setFormDataErrors({ ...formDataErrors, titleError: '' });
        }}
        style={{ width: 500 }}
      />

      <Typography>Enter the amount</Typography>
      <TextField
        error={Boolean(formDataErrors.amountError)}
        helperText={formDataErrors.amountError}
        placeholder="please enter the amount"
        label="amount"
        margin="normal"
        variant="outlined"
        value={formData.amount}
        onChange={handleAmountChange}
        style={{ width: 500 }}
      />

      <Box
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column', // Change flexDirection to 'column'
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
            value={formData.type}
            onChange={(e) => {
              setFormData({ ...formData, type: e.target.value });
              setFormDataErrors({ ...formDataErrors, typeError: '' });
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
          {formDataErrors.typeError && (
            <Typography color="error">{formDataErrors.typeError}</Typography>
          )}
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
