import React, { memo } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const AppLayout: React.FC = () => (
  <Box sx={{ display: 'flex' ,background:"#f4f4f4" }}>
    <CssBaseline />
    <Header />
    <Sidebar />
    <MainContent />
  </Box>
);

export default memo(AppLayout);