import React, { createContext, useState } from 'react';

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

interface FormContextData {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  formDataErrors: FormDataErrors;
  setFormDataErrors: React.Dispatch<React.SetStateAction<FormDataErrors>>;
}

export const FormContext = createContext<FormContextData | undefined>(
  undefined
);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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

  return (
    <FormContext.Provider
      value={{ formData, setFormData, formDataErrors, setFormDataErrors }}
    >
      {children}
    </FormContext.Provider>
  );
};
