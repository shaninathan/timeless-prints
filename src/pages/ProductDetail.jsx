import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { 
  Container, 
  Grid, 
  Typography, 
  Button, 
  Box,
  Chip,
  Alert,
  Paper,
  Snackbar
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { products } from '../../public/products';
import StorefrontIcon from '@mui/icons-material/Storefront';

const ProductImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  objectFit: 'cover',
  minHeight: '300px',
});

const ProductContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
}));

const SizeChip = styled(Chip)(({ theme, selected }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(1, 2),
  fontSize: '1rem',
  fontWeight: selected ? 'bold' : 'normal',
  backgroundColor: selected ? theme.palette.primary.main : theme.palette.grey[200],
  color: selected ? 'white' : theme.palette.text.primary,
  '&:hover': {
    backgroundColor: selected ? theme.palette.primary.dark : theme.palette.grey[300],
  },
}));

const AddToCartButton = styled(Button)(({ theme, disabled }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5, 4),
  borderRadius: '30px',
  background: disabled 
    ? theme.palette.grey[400] 
    : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  color: 'white',
  '&:hover': {
    background: disabled 
      ? theme.palette.grey[400] 
      : 'linear-gradient(45deg, #1976D2 30%, #1E88E5 90%)',
  },
}));

const BackButton = styled(Button)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  backgroundColor: 'white',
  color: 'black',
  borderRadius: '30px',
  padding: theme.spacing(1.5, 4),
  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  '&:hover': {
    backgroundColor: 'white',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
  },
  transition: 'all 0.3s ease',
  zIndex: 1000,
}));

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <Container>
        <Typography variant="h4" align="center" sx={{ mt: 4 }}>
          המוצר לא נמצא
        </Typography>
      </Container>
    );
  }

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setShowError(false);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setShowError(true);
      return;
    }
    dispatch(addToCart({ ...product, size: selectedSize }));
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleBackToProducts = () => {
    // Save current scroll position
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    // Navigate to products page
    navigate('/products');
  };

  return (
    <Container>
      <BackButton
        variant="contained"
        startIcon={<StorefrontIcon />}
        onClick={handleBackToProducts}
      >
        חזרה לכל המוצרים
      </BackButton>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ProductContainer>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <ProductImage
                  src={product.image}
                  alt={product.name}
                />
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="h5" color="primary" gutterBottom>
                ₪{product.price}
              </Typography>
              <Typography variant="body1" paragraph>
                {product.description}
              </Typography>
              
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                  גודל:
                </Typography>
                <Box>
                  {product.sizes.map((size) => (
                    <SizeChip
                      key={size}
                      label={size}
                      onClick={() => handleSizeSelect(size)}
                      selected={selectedSize === size}
                    />
                  ))}
                </Box>
                {showError && (
                  <Alert severity="error" sx={{ mt: 2 }}>
                    אנא בחר גודל
                  </Alert>
                )}
              </Box>

              <AddToCartButton
                variant="contained"
                onClick={handleAddToCart}
                disabled={!selectedSize}
              >
                הוסף לסל
              </AddToCartButton>

              {showSuccess && (
                <Snackbar
                  open={showSuccess}
                  autoHideDuration={3000}
                  onClose={() => setShowSuccess(false)}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                  <Alert severity="success">
                    המוצר נוסף לסל בהצלחה!
                  </Alert>
                </Snackbar>
              )}
            </Grid>
          </Grid>
        </ProductContainer>
      </motion.div>
    </Container>
  );
};

export default ProductDetail; 