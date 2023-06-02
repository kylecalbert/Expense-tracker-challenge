import React, { createContext, useState } from 'react';

interface ExpenseTrackerData {
  title: string;
  amount: string;
  type: string;
}
interface expenseTrackerErrors {
  titleError: string;
  amountError: string;
  typeError: string;
}

interface ExpenseContextData {
  expenseTrackerData: ExpenseTrackerData;
  setExpenseTrackerData: React.Dispatch<
    React.SetStateAction<ExpenseTrackerData>
  >;
  expenseTrackerErrors: expenseTrackerErrors;
  setExpenseTrackerErrors: React.Dispatch<
    React.SetStateAction<expenseTrackerErrors>
  >;
}

export const ExpenseTrackerContext = createContext<
  ExpenseContextData | undefined
>(undefined);

export const ExpenseTrackerProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [expenseTrackerData, setExpenseTrackerData] =
    useState<ExpenseTrackerData>({
      title: '',
      amount: '',
      type: '',
    });
  const [expenseTrackerErrors, setExpenseTrackerErrors] =
    useState<expenseTrackerErrors>({
      titleError: '',
      amountError: '',
      typeError: '',
    });

  return (
    <ExpenseTrackerContext.Provider
      value={{
        expenseTrackerData,
        setExpenseTrackerData,
        expenseTrackerErrors,
        setExpenseTrackerErrors,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
