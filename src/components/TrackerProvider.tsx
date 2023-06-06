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

interface expenseTrackerStorage {
  storage: ExpenseTrackerData[];
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

  expenseTrackerStorage: expenseTrackerStorage;
  setExpenseTrackerStorage: React.Dispatch<
    React.SetStateAction<expenseTrackerStorage>
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

  const [expenseTrackerStorage, setExpenseTrackerStorage] =
    useState<expenseTrackerStorage>({
      storage: [],
    });

    

const expenseAmount = expenseTrackerStorage.storage.filter((transaction)=>transaction.type==='expense') //filers every transaction that has type expense   
.map((transaction)=>parseInt(transaction.amount,10)) // this maps through each one and converts string values to a number
.reduce((accumulator,amount) =>accumulator +amount,0); ///calculates the total expense
 

const incomeAmount = expenseTrackerStorage.storage.filter((transaction)=>transaction.type==='income') 
.map((transaction)=>parseInt(transaction.amount,10)) 
.reduce((accumulator,amount) =>accumulator +amount,0);


      

    

  return (
    <ExpenseTrackerContext.Provider
      value={{
        expenseTrackerData,
        setExpenseTrackerData,
        expenseTrackerErrors,
        setExpenseTrackerErrors,
        expenseTrackerStorage,
        setExpenseTrackerStorage,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
