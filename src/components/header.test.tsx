import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './header';


test('renders learn react link', () => {
  render(<Header />);
  const headerText = screen.getByText('Expense Tracker');
  expect(headerText).toBeInTheDocument();
});

