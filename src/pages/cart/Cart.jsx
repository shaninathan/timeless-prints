import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItemQuantity } from '../../store/cartSlice';
import {
  Typography,
  Box,
  Alert,
  Snackbar,
  Container
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CartItem from '../../components/cartItem/CartItem';
import { motion } from 'framer-motion';
import {
  CartContainer,
  EmptyCartContainer,
  BackToShopButton,
  CheckoutButton
} from './Cart.styles';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const [showError, setShowError] = React.useState(false);

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateCartItemQuantity({ cartItemId: id, quantity }));
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
      <EmptyCartContainer maxWidth="lg" sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        minHeight: '60vh'
      }}>
          <ShoppingCartIcon sx={{ 
            fontSize: 60, 
            color: 'primary.main',
            mb: 2,
            opacity: 0.8,
            filter: 'drop-shadow(0 2px 4px rgba(108, 99, 255, 0.2))'
          }} />
          <Typography variant="h5" component="h1" gutterBottom>
            העגלה שלך ריקה
          </Typography>
          <Typography 
            variant="h5" 
            align="center" 
            sx={{ 
              color: 'text.primary',
              fontWeight: 500,
              fontSize: '1.5rem',
              mb: 3,
              opacity: 0.9
            }}
          >
            הוסף מוצרים לעגלה כדי לראות אותם כאן
          </Typography>
          <BackToShopButton
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/products')}
          >
            חזרה למוצרים
          </BackToShopButton>
      </EmptyCartContainer>
    );
  }

  return (
    <EmptyCartContainer maxWidth="lg">
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
            <CheckoutButton
              variant="contained"
              size="large"
              onClick={handleCheckout}
              disabled={items.length === 0}
            >
              המשך לתשלום
            </CheckoutButton>
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
    </EmptyCartContainer>
  );
};

export default Cart; 