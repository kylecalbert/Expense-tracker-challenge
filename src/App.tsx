import React from 'react';
import logo from './logo.svg';
import { Box } from '@mui/material';
import './App.css';
import HistoryCardGrid from './components/HistoryCardGrid';
function App() {
  return (
    <Box className="App">
      <Box sx={{ width: 550, height: 2, background: 'blue' }}>
        <HistoryCardGrid />
      </Box>
    </Box>
  );
}

export default App;
