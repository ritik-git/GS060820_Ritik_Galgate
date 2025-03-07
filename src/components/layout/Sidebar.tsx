import React, { memo } from 'react';
import { styled } from '@mui/material/styles';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import StoreIcon from '@mui/icons-material/Store';
import TagIcon from '@mui/icons-material/Tag';
import EventNoteIcon from '@mui/icons-material/EventNote';
import BarChartIcon from '@mui/icons-material/BarChart';
import logo from '../../assets/Gsynergy Logo V2 Long Description.svg'; // Replace with the correct path to your logo

const DRAWER_WIDTH = 240;

const StyledDrawer = styled(Drawer)({
  width: DRAWER_WIDTH,
  '& .MuiDrawer-paper': {
    width: DRAWER_WIDTH,
    backgroundColor: '#f4f4f4', // White background
    color: '#000000', // Black text
    borderRight: '1px solid #e0e0e0', // Light border for subtle separation
  },
});

const navItems = [
  { text: 'Stores', icon: StoreIcon, path: '/stores' },
  { text: 'SKUs', icon: TagIcon, path: '/skus' },
  { text: 'Planning', icon: EventNoteIcon, path: '/planning' },
  { text: 'Charts', icon: BarChartIcon, path: '/charts' },
];

const Sidebar: React.FC = () => (
  <StyledDrawer variant="permanent" anchor="left">
    <Toolbar>
    <Box display="flex" justifyContent="center" alignItems="center" p={2}>
      <img src={logo} alt="Company Logo" style={{ width: '150px', height: 'auto' }} />
    </Box>
    </Toolbar>
  
    <List>
      {navItems.map((item) => (
        <ListItem key={item.text} disablePadding>
          <ListItemButton
            component={RouterLink}
            to={item.path}
            sx={{
              '&:hover': {
                backgroundColor: '#ffff', // Light gray on hover
                transform: 'translateX(5px)',
                transition: 'all 0.2s',
              },
            }}
          >
            <ListItemIcon sx={{ color: '#000000' }}> {/* Black icons */}
              <item.icon />
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </StyledDrawer>
);

export default memo(Sidebar);
