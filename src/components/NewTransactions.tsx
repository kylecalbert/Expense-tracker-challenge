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

///Creating data object that can be used to store the users inputs

const NewTransactions = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    amount: '',
    type: '',
  });

  ///creating a seperate object, which will store error messages

  const [formDataErrors, setFormDataErrors] = useState<FormDataErrors>({
    titleError: '',
    amountError: '',
    typeError: '',
  });

  const handleAddTransaction = () => {
    ///if title or amount of transation type doesnt exist, dsiplay errors
    if (!formData.title || !formData.amount || !formData.type) {
      //if a title doesnt doesnt exist in object or a title hasnt been inputed in field
      if (!formData.title) {
        setFormDataErrors({
          ...formDataErrors, //open the error object
          titleError: 'Title is required', //find title error and then update it with this message
        });
      }

      if (!formData.amount) {
        setFormDataErrors({
          ...formDataErrors,
          amountError: 'Amount is required',
        });
      }

      if (!formData.type) {
        setFormDataErrors({
          ...formDataErrors,
          typeError: 'Please select Income or Expense',
        });
      }

      return false;
    }

    //else if all fields are filled in correctly show this message.
    alert('Transaction added successfully');
  };

  /// handling the user input in the "amount" filed
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue === '' || /^\d+$/.test(inputValue)) {
      //if the input is a number
      setFormData({ ...formData, amount: inputValue }); ///open the form data and set amount to the users value
      setFormDataErrors({ ...formDataErrors, amountError: '' }); //also find the "amountError" and set it to an emptey string
    }
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography>Enter the title</Typography>
      <TextField
        error={Boolean(formDataErrors.titleError)} //checks if "titlError" has a vlue, if it does, a true boolean value is returned.
        helperText={formDataErrors.titleError} // if true is returned in the error, helper text will show an error message which is set to the custom titleError message
        placeholder="please enter the title"
        label="title"
        margin="normal"
        variant="outlined"
        value={formData.title}
        onChange={(e) => {
          setFormData({ ...formData, title: e.target.value }); //if the user enters a title it is stored in the "title"
          setFormDataErrors({ ...formDataErrors, titleError: '' }); // to make sure the error message is removed once a user enters a value, we reset the "titleError" to an empey strin
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
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 10,
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
              setFormData({ ...formData, type: e.target.value }); // see comments above, similar concept
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
          {formDataErrors.typeError && ( ///if the typeError returns a true, then show the error message
            <Typography color="error">{formDataErrors.typeError}</Typography>
          )}
        </FormControl>
      </Box>

      <Button
        onClick={handleAddTransaction} // clicking this button goes to the handleAddTransation function.
        style={{ marginTop: 10 }}
        variant="contained"
        color="primary"
      >
        Add transactions
      </Button>
    </Box>
  );
};

export default NewTransactions;
