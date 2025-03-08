import React, { memo, useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Box, Button } from '@mui/material';

import gsynergyLogo from '../../assets/Gsynergy Logo V2 Long Description.svg';
import { logout } from '../../redux/authSlice';

const StyledAppBar = styled(AppBar)({
  background: '#f4f4f4',
  boxShadow: '0 3px 5px 2px rgba(25, 118, 210, 0.2)',
});

const Logo = styled('img')({
  height: 40,
  marginRight: 16,
});

const SignInButton = styled(Button)({
  borderRadius: 20,
  backgroundColor: '#1976d2',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#1565c0',
    transform: 'translateY(-2px)',
    transition: 'all 0.2s',
  },
});

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    localStorage.clear(); 
    dispatch(logout());
    window.location.reload();
  }, [dispatch]);

  const content = useMemo(() => (
    <Toolbar>
      <Logo src={gsynergyLogo} alt="GSynergy Logo" />
      <Box sx={{ flexGrow: 1 }} />
      <SignInButton variant="contained" onClick={handleLogout}>Logout</SignInButton>
    </Toolbar>
  ), [handleLogout]);

  return <StyledAppBar position="fixed">{content}</StyledAppBar>;
};

export default memo(Header);
