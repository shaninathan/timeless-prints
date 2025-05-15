import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { removeFromFavorites } from '../../store/favoritesSlice';
import { ProductsGrid, SelectProductButton } from '../products/Products.styles';
import Loader from '../../components/loader/Loader';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import ProductCard from '../../components/productCard/ProductCard';

const Favorites = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        setLoading(true);
        // Simulate loading delay
        await new Promise((resolve) => setTimeout(resolve, 500));
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadFavorites();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const handleRemoveFromFavorites = (productId) => {
    dispatch(removeFromFavorites(productId));
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={() => window.location.reload()} />;
  }

  if (favorites.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h5" align="center" color="text.secondary">
          אין לך מוצרים במועדפים
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        המוצרים המועדפים שלי
      </Typography>
      <ProductsGrid container spacing={2}>
        {favorites.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard
              product={product}
              onSelect={() => {}}
              onAddToCart={() => handleAddToCart(product)}
              onToggleFavorite={() => handleRemoveFromFavorites(product.id)}
              isFavorite={true}
            />
          </Grid>
        ))}
      </ProductsGrid>
    </Container>
  );
};

export default Favorites; 