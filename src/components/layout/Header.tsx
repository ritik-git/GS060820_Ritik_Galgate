import React, { memo, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import gsynergyLogo from '../../assets/Gsynergy Logo V2 Long Description.svg';

const StyledAppBar = styled(AppBar)({
  background: '#f4f4f4', // Light blue gradient
  boxShadow: '0 3px 5px 2px rgba(25, 118, 210, 0.2)', // Shadow with accent color
});

const Logo = styled('img')({
  height: 40,
  marginRight: 16,
});

const SignInButton = styled(Button)({
  borderRadius: 20,
  backgroundColor: '#1976d2', // Medium blue matching Sidebar icons
  color: '#fff', // White text for contrast
  '&:hover': {
    backgroundColor: '#1565c0', // Slightly darker blue on hover
    transform: 'translateY(-2px)',
    transition: 'all 0.2s',
  },
});

const Header: React.FC = () => {
  const content = useMemo(() => (
    <Toolbar>
      <Logo src={gsynergyLogo} alt="GSynergy Logo" />
      <Box sx={{ flexGrow: 1 }} />
      <SignInButton variant="contained">Sign In</SignInButton>
    </Toolbar>
  ), []);

  return <StyledAppBar position="fixed">{content}</StyledAppBar>;
};

export default memo(Header);