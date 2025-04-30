import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Box,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ShoppingCart as ShoppingCartIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Styled Components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(45deg, #6C63FF 30%, #FF6B6B 90%)',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(1, 2),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(1, 4),
  },
}));

const Logo = styled('img')(({ theme }) => ({
  height: 40,
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: 'white',
  margin: theme.spacing(0, 1),
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const CartButton = styled(IconButton)(({ theme }) => ({
  color: 'white',
  marginRight: theme.spacing(1),
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 250,
    background: 'linear-gradient(45deg, #6C63FF 30%, #FF6B6B 90%)',
    color: 'white',
  },
}));

const MobileMenuItem = styled(ListItem)(({ theme }) => ({
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const BackToProductsButton = styled(Button)(({ theme }) => ({
  color: 'white',
  borderColor: 'white',
  '&:hover': {
    borderColor: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  const menuItems = [
    { text: 'בית', path: '/' },
    { text: 'מוצרים', path: '/products' },
    { text: 'אודות', path: '/about' },
    { text: 'צור קשר', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const isProductPage = location.pathname.startsWith('/product/');

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <MobileMenuItem
          button
          key={item.text}
          onClick={() => handleNavigation(item.path)}
        >
          <ListItemText primary={item.text} />
        </MobileMenuItem>
      ))}
    </List>
  );

  return (
    <StyledAppBar position="sticky">
      <StyledToolbar>
        {isMobile && !isProductPage && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        )}

        {isProductPage && (
          <BackToProductsButton
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/products')}
          >
            חזרה למוצרים
          </BackToProductsButton>
        )}

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {!isMobile && (
            <Box sx={{ display: 'flex', mr: 2 }}>
              {menuItems.map((item) => (
                <NavButton
                  key={item.text}
                  onClick={() => handleNavigation(item.path)}
                >
                  {item.text}
                </NavButton>
              ))}
            </Box>
          )}

          <CartButton
            color="inherit"
            onClick={() => handleNavigation('/cart')}
          >
            <Badge badgeContent={cartItems.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </CartButton>
        </Box>
      </StyledToolbar>

      <MobileDrawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </MobileDrawer>
    </StyledAppBar>
  );
};

export default Navbar; 