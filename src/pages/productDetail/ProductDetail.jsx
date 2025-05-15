import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
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
  Stack
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  ProductImage,
  ProductContainer,
  SizeChip,
  AddToCartButton,
  BackButton,
  ProductInfo,
  SelectProductButton
} from './ProductDetail.styles';
import Loader from '../../components/loader/Loader';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import { getProductById } from '../../services/products';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const favorites = useSelector((state) => state.favorites.items);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const data = await getProductById(id);
      setProduct(data);
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

  const handleAddToCart = () => {
    if (!selectedSize) {
      setShowError(true);
      return;
    }
    dispatch(addToCart({ ...product, size: selectedSize }));
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
    // Save current scroll position
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    // Navigate to products page
    navigate('/products');
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={() => window.location.reload()} />;
  }

  if (!product) {
    return <ErrorMessage message="המוצר לא נמצא" />;
  }

  return (
    <Container>
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
              <ProductInfo>
                <Typography variant="h4" component="h1" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="h5" color="primary" gutterBottom>
                  ₪{product.price}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Rating value={product.rating} readOnly precision={0.5} />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    ({product.reviews} ביקורות)
                  </Typography>
                </Box>
                <Typography variant="body1" paragraph>
                  {product.description}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  {product.tags.map((tag) => (
                    <Chip key={tag} label={tag} />
                  ))}
                </Stack>
                <Box sx={{ mt: 3 }}>
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
                <Box sx={{ mt: 3 }}>
                  <SelectProductButton
                    variant="contained"
                    onClick={handleAddToCart}
                    sx={{ mr: 2 }}
                  >
                    הוסף לסל
                  </SelectProductButton>
                  <SelectProductButton
                    variant="outlined"
                    onClick={handleToggleFavorite}
                  >
                    {favorites.some((item) => item.id === product.id)
                      ? 'הסר ממועדפים'
                      : 'הוסף למועדפים'}
                  </SelectProductButton>
                </Box>
              </ProductInfo>
            </Grid>
          </Grid>
        </ProductContainer>
      </motion.div>
      <BackButton onClick={handleBackToProducts}>
        חזרה למוצרים
      </BackButton>
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
    </Container>
  );
};

export default ProductDetail; 