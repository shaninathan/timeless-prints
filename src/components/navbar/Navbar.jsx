import React, { useState } from 'react';
import {
  IconButton,
  Badge,
  Box,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StyledAppBar, StyledToolbar, NavButton, Logo } from './Navbar.styles';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const cartItems = useSelector((state) => state.cart.items);
  const favorites = useSelector((state) => state.cart.favorites);

  const cartItemCount = cartItems?.reduce((total, item) => total + item.quantity, 0) || 0;
  const favoritesCount = favorites?.length || 0;

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { text: 'דף הבית', icon: <HomeIcon />, path: '/' },
    { text: 'מוצרים', icon: <CategoryIcon />, path: '/products' },
    { text: 'אודות', icon: <InfoIcon />, path: '/about' },
    { text: 'צור קשר', icon: <ContactMailIcon />, path: '/contact' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
    handleMenuClose();
  };

  const mobileMenu = (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={handleMobileMenuToggle}
      PaperProps={{
        sx: {
          background: 'linear-gradient(135deg, #9B6BFF 0%, #FF6B9B 50%, #FF8E8E 100%)',
          color: '#FFFFFF',
        }
      }}
    >
      <List sx={{ width: 250 }}>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => handleNavigation(item.path)}
            sx={{
              color: location.pathname === item.path ? '#FFFFFF' : 'rgba(255,255,255,0.8)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
              }
            }}
          >
            <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <StyledAppBar position="sticky">
      <StyledToolbar>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMobileMenuToggle}
              sx={{ color: '#FFFFFF' }}
            >
              <MenuIcon />
            </IconButton>
            <Logo variant="h6" onClick={() => handleNavigation('/')}>
              טיימל'ס פרינטס
            </Logo>
          </>
        ) : (
          <>
            <Logo variant="h6" onClick={() => handleNavigation('/')}>
              Timeless prints
            </Logo>
            <Box>
              {menuItems.map((item) => (
                <NavButton
                  key={item.text}
                  startIcon={item.icon}
                  onClick={() => handleNavigation(item.path)}
                  active={location.pathname === item.path}
                >
                  {item.text}
                </NavButton>
              ))}
            </Box>
          </>
        )}
        <Box>
          <IconButton
            color="inherit"
            onClick={() => handleNavigation('/favorites')}
            sx={{ 
              color: 'rgba(255,255,255,0.8)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: '#FFFFFF',
                transform: 'translateY(-1px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <Badge badgeContent={favoritesCount} color="error">
              <FavoriteIcon />
            </Badge>
          </IconButton>
          <IconButton 
            color="inherit" 
            onClick={() => handleNavigation('/cart')}
            sx={{ 
              color: 'rgba(255,255,255,0.8)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: '#FFFFFF',
                transform: 'translateY(-1px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <Badge badgeContent={cartItemCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </StyledToolbar>
      {mobileMenu}
    </StyledAppBar>
  );
};

export default Navbar; 