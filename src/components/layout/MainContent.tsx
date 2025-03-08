// MainContent.tsx
import React from 'react';
import { Box, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';

// const DRAWER_WIDTH = 240;

const MainContent: React.FC = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        // ml: `${DRAWER_WIDTH}px`, // Adjust for sidebar width
        backgroundColor: '#f4f4f4',
        minHeight: '100vh',
      }}
    >
      <Toolbar /> {/* Keeps content aligned below the AppBar */}
      <Outlet /> {/* Renders the routed component */}
    </Box>
  );
};

export default MainContent;