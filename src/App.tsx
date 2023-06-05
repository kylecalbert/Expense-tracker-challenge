import React from 'react';
import logo from './logo.svg';
import { Box } from '@mui/material';
import './App.css';
import Login from './components/Login';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import { ExpenseTrackerProvider } from './components/TrackerProvider';
import ExpenseTracker from './components/ExpenseTracker';

function App() {
  const handleFormSubmit = (loginData: any) => {
    console.log(loginData);
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Login onFormSubmit={handleFormSubmit} />} />
        <Route path="/tracker" element={<ExpenseTracker />} />
      </Route>
    )
  );
  return (
    <ExpenseTrackerProvider>
      <RouterProvider router={router} />
    </ExpenseTrackerProvider>
  );
}

const Root = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};
export default App;
