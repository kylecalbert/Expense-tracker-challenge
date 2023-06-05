import React from 'react';
import { Box, styled } from '@mui/material';
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

const Component = styled(Box)`
  background: #FFF;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  width: 800px;
  & > div {
    padding: 10px;
    width: 50%;
    height: 70vh;
  }
}
`;

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
