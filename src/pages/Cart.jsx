import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem as removeFromCart, updateQuantity as updateCartItemQuantity } from '../store/cartSlice';
import {
  Container,
  Typography,
  Box,
  Button,
  Alert,
  Snackbar
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CartItem from '../components/CartItem/CartItem';
import { motion } from 'framer-motion';

const CartContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
}));

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const [showError, setShowError] = React.useState(false);

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateCartItemQuantity({ id, quantity }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const isValidImage = (image) => {
    if (!image) return false;
    if (typeof image !== 'string') return false;
    if (image.trim() === '') return false;
    if (!image.startsWith('data:image/') && !image.startsWith('http')) return false;
    return true;
  };

  const handleCheckout = () => {
    const itemsWithoutImages = items.filter(item => {
      const hasImage = isValidImage(item.image);
      const hasCustomImage = isValidImage(item.customImage);
      return !hasImage && !hasCustomImage;
    });
    
    if (itemsWithoutImages.length > 0) {
      setShowError(true);
      return;
    }
    
    navigate('/checkout');
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (items.length === 0) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ 
          py: 8, 
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3
        }}>
          <ShoppingCartIcon sx={{ fontSize: 60, color: 'text.secondary' }} />
          <Typography variant="h5" component="h1" gutterBottom>
            העגלה שלך ריקה
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            הוסף מוצרים לעגלה כדי לראות אותם כאן
          </Typography>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/')}
            sx={{
              borderRadius: 2,
              textTransform: 'none',
              px: 4
            }}
          >
            חזרה לחנות
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CartContainer>
          <Typography variant="h4" gutterBottom>
            סל הקניות
          </Typography>

          {items.map((item) => (
            <CartItem 
              key={item.id} 
              item={item}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemoveItem}
            />
          ))}

          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5">
              סה"כ: ₪{calculateTotal()}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleCheckout}
              disabled={items.length === 0}
            >
              המשך לתשלום
            </Button>
          </Box>
        </CartContainer>
      </motion.div>

      <Snackbar
        open={showError}
        autoHideDuration={6000}
        onClose={() => setShowError(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          severity="error" 
          onClose={() => setShowError(false)}
          sx={{ width: '100%' }}
        >
          לא ניתן להמשיך לתשלום - יש להוסיף תמונה לכל המוצרים בסל
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Cart; 