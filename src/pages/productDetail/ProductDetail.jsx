import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateCartItem } from '../../store/cartSlice';
import { addToFavorites, removeFromFavorites } from '../../store/favoritesSlice';
import { 
  Container, 
  Grid, 
  Typography, 
  Box,
  Alert,
  Snackbar,
  Button,
  Rating,
  Chip,
  Stack,
  TextField,
  IconButton,
  Divider,
  Paper
} from '@mui/material';
import { motion } from 'framer-motion';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  ProductImage,
  ProductContainer,
  SizeChip,
  AddToCartButton,
  BackButton,
  ProductInfo,
  QuantityControl,
  QuantityButton,
  MaterialInfo,
  ProductSpecs
} from './ProductDetail.styles';
import Loader from '../../components/loader/Loader';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import { getProductById } from '../../services/products';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const favorites = useSelector((state) => state.favorites.items);
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some(item => item.id === product?.id);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const data = await getProductById(id);
      setProduct(data);
      // אם המוצר כבר בסל, נשתמש במידות והכמויות שלו
      const cartItem = cartItems.find(item => item.id === data.id);
      if (cartItem) {
        setSelectedSize(cartItem.size);
        setQuantity(cartItem.quantity);
      }
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setShowError(false);
  };

  const handleQuantityChange = (newValue) => {
    if (newValue >= 1) {
      setQuantity(newValue);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setShowError(true);
      return;
    }

    if (isInCart) {
      dispatch(updateCartItem({
        id: product.id,
        size: selectedSize,
        quantity
      }));
    } else {
      dispatch(addToCart({
        ...product,
        size: selectedSize,
        quantity
      }));
    }
    
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleToggleFavorite = () => {
    const isFavorite = favorites.some((item) => item.id === product.id);
    if (isFavorite) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  const handleBackToProducts = () => {
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    navigate('/products');
  };

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} onRetry={() => window.location.reload()} />;
  if (!product) return <ErrorMessage message="המוצר לא נמצא" />;

  return (
    <Container maxWidth="xl" sx={{ py: 3, px: { xs: 2, md: 4 } }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ProductContainer>
          <Grid container spacing={3} justifyContent="center" alignItems="stretch">
            <Grid item xs={12} md={6} lg={5}>
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{ height: '100%', display: 'flex', alignItems: 'center' }}
              >
                <ProductImage
                  src={product.image}
                  alt={product.name}
                />
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <ProductInfo>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
                  <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' } }}>
                    {product.name}
                  </Typography>
                  <IconButton 
                    onClick={handleToggleFavorite} 
                    size="medium"
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        transform: 'scale(1.05)',
                      },
                      transition: 'all 0.2s ease-in-out',
                    }}
                  >
                    {favorites.some((item) => item.id === product.id) 
                      ? <FavoriteIcon color="primary" sx={{ fontSize: 24 }} /> 
                      : <FavoriteBorderIcon sx={{ fontSize: 24 }} />}
                  </IconButton>
                </Box>
                
                <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold', mb: 1.5, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                  ₪{product.price}
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                  <Rating value={product.rating} readOnly precision={0.5} size="medium" />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    ({product.reviews} ביקורות)
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', mb: 1 }}>
                      תיאור המוצר
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: 1.6, color: 'text.secondary' }}>
                      {product.description}
                    </Typography>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', mb: 1 }}>
                      פרטי המוצר
                    </Typography>
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                          חומר: {product.material}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                          סוג: {product.type}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>

                <Box sx={{ mt: 2, mb: 2 }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', mb: 1 }}>
                    בחר גודל:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
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
                    <Alert severity="error" sx={{ mt: 1 }}>
                      אנא בחר גודל
                    </Alert>
                  )}
                </Box>

                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', mb: 1 }}>
                      כמות:
                    </Typography>
                    <QuantityControl>
                      <QuantityButton
                        onClick={() => handleQuantityChange(quantity - 1)}
                        disabled={quantity <= 1}
                      >
                        <RemoveIcon />
                      </QuantityButton>
                      <TextField
                        value={quantity}
                        onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                        type="number"
                        inputProps={{ min: 1 }}
                        size="small"
                        sx={{ 
                          width: '60px',
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '8px',
                            backgroundColor: 'white',
                          }
                        }}
                      />
                      <QuantityButton
                        onClick={() => handleQuantityChange(quantity + 1)}
                      >
                        <AddIcon />
                      </QuantityButton>
                    </QuantityControl>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <AddToCartButton
                      variant="contained"
                      onClick={handleAddToCart}
                      fullWidth
                      sx={{ height: '100%' }}
                    >
                      {isInCart ? 'עדכן סל' : 'הוסף לסל'}
                    </AddToCartButton>
                  </Box>
                </Box>

                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  {product.detailedDescription}
                </Typography>
              </ProductInfo>
            </Grid>
          </Grid>
        </ProductContainer>
      </motion.div>

      <BackButton
        variant="contained"
        onClick={handleBackToProducts}
        startIcon={<ArrowBackIcon />}
      >
        חזרה למוצרים
      </BackButton>

      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          {isInCart ? 'המוצר עודכן בסל בהצלחה!' : 'המוצר נוסף לסל בהצלחה!'}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ProductDetail; 