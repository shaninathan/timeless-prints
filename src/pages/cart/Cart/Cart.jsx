import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItem } from '../../../store/cartSlice';
import {
  Typography,
  Box,
  Alert,
  Snackbar,
  Container,
  Paper,
  Button,
  Grid,
  Divider,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CartItem from '../CartItem/CartItem';
import { motion } from 'framer-motion';
import {
  CartContainer,
  EmptyCartContainer,
  BackToShopButton,
  CheckoutButton
} from './Cart.styles';

const CartHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
  paddingBottom: theme.spacing(2),
  borderBottom: `2px solid ${theme.palette.primary.main}`,
}));

const CartSummary = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  borderRadius: '12px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
  position: 'sticky',
  top: theme.spacing(2),
}));

const EditDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '16px',
    padding: theme.spacing(2),
    maxWidth: '500px',
    width: '100%',
  },
}));

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const [editItem, setEditItem] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEditItem = (item) => {
    setEditItem({ ...item });
  };

  const handleCloseEdit = () => {
    setEditItem(null);
  };

  const handleUpdateItem = () => {
    if (editItem) {
      dispatch(updateCartItem(editItem));
      setShowSuccess(true);
      setSuccessMessage('המוצר עודכן בהצלחה');
      handleCloseEdit();
    }
  };

  const handleRemoveItem = (item) => {
    dispatch(removeFromCart({ id: item.id, size: item.size }));
    setShowSuccess(true);
    setSuccessMessage('המוצר הוסר מהסל');
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditItem(prev => ({
          ...prev,
          customImage: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const calculateTotal = () => {
    return Math.round(items.reduce((total, item) => total + (item.price * item.quantity), 0));
  };

  const calculateTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCheckout = () => {
    const itemsWithoutCustomImage = items.filter(item => !item.customImage);
    
    if (itemsWithoutCustomImage.length > 0) {
      const itemNames = itemsWithoutCustomImage.map(item => item.name).join(', ');
      setErrorMessage(`יש להוסיף תמונה מותאמת אישית למוצרים הבאים: ${itemNames}`);
      setShowError(true);
      return;
    }
    
    // כאן יבוא הקוד למעבר לדף התשלום
    navigate('/checkout');
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
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CartContainer>
          <CartHeader>
            <ShoppingCartIcon sx={{ fontSize: 32, color: 'primary.main' }} />
            <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
              סל קניות
            </Typography>
          </CartHeader>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              {items.length === 0 ? (
                <Box sx={{ textAlign: 'center', py: 4 }}>
                  <Typography variant="h6" color="text.secondary">
                    הסל ריק
                  </Typography>
                </Box>
              ) : (
                items.map((item) => (
                  <CartItem
                    key={`${item.id}-${item.size}`}
                    item={item}
                    onEdit={() => handleEditItem(item)}
                    onRemove={() => handleRemoveItem(item)}
                  />
                ))
              )}
            </Grid>

            <Grid item xs={12} md={4}>
              <CartSummary>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  סיכום הזמנה
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body1" sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <span>סה"כ מוצרים:</span>
                    <span>{calculateTotalItems()} פריטים</span>
                  </Typography>
                  <Typography variant="body1" sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <span>סה"כ לתשלום:</span>
                    <span>₪{calculateTotal()}</span>
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  disabled={items.length === 0}
                  onClick={handleCheckout}
                  sx={{
                    py: 1.5,
                    borderRadius: '12px',
                    background: 'linear-gradient(45deg, #6C63FF 30%, #FF6B6B 90%)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #8B85FF 30%, #FF8E8E 90%)',
                    },
                  }}
                >
                  המשך לתשלום
                </Button>
              </CartSummary>
            </Grid>
          </Grid>
        </CartContainer>
      </motion.div>

      <EditDialog open={Boolean(editItem)} onClose={handleCloseEdit}>
        <DialogTitle sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          עריכת מוצר
        </DialogTitle>
        <DialogContent>
          {editItem && (
            <Box sx={{ pt: 2 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="גודל"
                    select
                    value={editItem.size}
                    onChange={(e) => setEditItem({ ...editItem, size: e.target.value })}
                    sx={{ mb: 2 }}
                  >
                    {editItem.sizes?.map((size) => (
                      <MenuItem key={size} value={size}>
                        {size}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="number"
                    label="כמות"
                    value={editItem.quantity}
                    onChange={(e) => setEditItem({ ...editItem, quantity: parseInt(e.target.value) || 1 })}
                    inputProps={{ min: 1 }}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="הערות"
                    value={editItem.notes || ''}
                    onChange={(e) => setEditItem({ ...editItem, notes: e.target.value })}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    component="label"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                  >
                    העלה תמונה מותאמת אישית
                    <input
                      type="file"
                      hidden
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </Button>
                  {editItem.customImage && (
                    <Box sx={{ mt: 2, textAlign: 'center' }}>
                      <img
                        src={editItem.customImage}
                        alt="תמונה מותאמת אישית"
                        style={{
                          maxWidth: '100%',
                          maxHeight: '200px',
                          borderRadius: '8px',
                        }}
                      />
                    </Box>
                  )}
                </Grid>
              </Grid>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button
            onClick={handleCloseEdit}
            color="inherit"
            sx={{ mr: 1 }}
          >
            ביטול
          </Button>
          <Button
            onClick={() => handleRemoveItem(editItem)}
            color="error"
            sx={{ mr: 1 }}
          >
            הסר מהסל
          </Button>
          <Button
            onClick={handleUpdateItem}
            variant="contained"
            sx={{
              background: 'linear-gradient(45deg, #6C63FF 30%, #FF6B6B 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #8B85FF 30%, #FF8E8E 90%)',
              },
            }}
          >
            שמור שינויים
          </Button>
        </DialogActions>
      </EditDialog>

      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          {successMessage}
        </Alert>
      </Snackbar>

      <Snackbar
        open={showError}
        autoHideDuration={5000}
        onClose={() => setShowError(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="error" sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Cart; 