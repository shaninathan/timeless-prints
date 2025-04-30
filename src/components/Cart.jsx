import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  IconButton,
  Divider,
  Paper,
  Grid,
} from '@mui/material';
import {
  Add as AddIcon,
  Remove as RemoveIcon,
  Delete as DeleteIcon,
  ShoppingCart as ShoppingCartIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { removeFromCart, updateQuantity } from '../store/cartSlice';

// Styled Components
const CartContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: 1200,
  margin: '0 auto',
}));

const CartTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontWeight: 600,
  textAlign: 'center',
}));

const CartItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

const ProductImage = styled('img')(({ theme }) => ({
  width: 100,
  height: 100,
  objectFit: 'cover',
  borderRadius: theme.shape.borderRadius,
}));

const ProductInfo = styled(Box)(({ theme }) => ({
  flex: 1,
}));

const ProductTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1),
}));

const ProductDetails = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

const QuantityControl = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const QuantityButton = styled(IconButton)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const QuantityText = styled(Typography)(({ theme }) => ({
  minWidth: 40,
  textAlign: 'center',
}));

const PriceText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.primary.main,
  fontSize: '1.1rem',
}));

const CartSummary = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(4),
}));

const SummaryRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(2),
}));

const CheckoutButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #6C63FF 30%, #FF6B6B 90%)',
  color: 'white',
  padding: theme.spacing(1.5, 4),
  marginTop: theme.spacing(2),
  '&:hover': {
    background: 'linear-gradient(45deg, #5A52E0 30%, #E55A5A 90%)',
  },
}));

const EmptyCartContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(8),
}));

const EmptyCartIcon = styled(ShoppingCartIcon)(({ theme }) => ({
  fontSize: 64,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
}));

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const handleQuantityChange = (itemId, change) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity > 0) {
        dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
      } else {
        dispatch(removeFromCart(itemId));
      }
    }
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateShipping = () => {
    return calculateSubtotal() > 200 ? 0 : 30;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  if (cartItems.length === 0) {
    return (
      <CartContainer>
        <EmptyCartContainer>
          <EmptyCartIcon />
          <Typography variant="h5" gutterBottom>
            העגלה שלך ריקה
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            הוסף מוצרים לעגלה כדי להתחיל בקנייה
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/products')}
          >
            המשך לקניות
          </Button>
        </EmptyCartContainer>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <CartTitle variant="h4">עגלת קניות</CartTitle>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <ProductImage src={item.image} alt={item.title} />
              <ProductInfo>
                <ProductTitle variant="h6">{item.title}</ProductTitle>
                <ProductDetails variant="body2">
                  גודל: {item.size}
                </ProductDetails>
                <QuantityControl>
                  <QuantityButton
                    size="small"
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    <RemoveIcon />
                  </QuantityButton>
                  <QuantityText>{item.quantity}</QuantityText>
                  <QuantityButton
                    size="small"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    <AddIcon />
                  </QuantityButton>
                </QuantityControl>
              </ProductInfo>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <PriceText>₪{item.price * item.quantity}</PriceText>
                <IconButton
                  color="error"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </CartItem>
          ))}
        </Grid>

        <Grid item xs={12} md={4}>
          <CartSummary>
            <Typography variant="h6" gutterBottom>
              סיכום הזמנה
            </Typography>
            <Divider sx={{ my: 2 }} />
            <SummaryRow>
              <Typography>סה"כ מוצרים</Typography>
              <Typography>₪{calculateSubtotal()}</Typography>
            </SummaryRow>
            <SummaryRow>
              <Typography>משלוח</Typography>
              <Typography>
                {calculateShipping() === 0
                  ? 'חינם'
                  : `₪${calculateShipping()}`}
              </Typography>
            </SummaryRow>
            <Divider sx={{ my: 2 }} />
            <SummaryRow>
              <Typography variant="h6">סה"כ לתשלום</Typography>
              <Typography variant="h6" color="primary">
                ₪{calculateTotal()}
              </Typography>
            </SummaryRow>
            <CheckoutButton
              variant="contained"
              fullWidth
              onClick={() => navigate('/checkout')}
            >
              המשך לתשלום
            </CheckoutButton>
          </CartSummary>
        </Grid>
      </Grid>
    </CartContainer>
  );
};

export default Cart; 