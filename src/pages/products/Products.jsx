import React, { useState, useMemo, useEffect } from 'react';
import { Container, Typography, Grid, Box, FormControl, InputLabel, Select, MenuItem, TextField, InputAdornment, IconButton, Chip, Stack, Dialog, DialogTitle, DialogContent, DialogActions, Button, Rating, Divider, Alert, Snackbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import ProductCard from '../../components/productCard/ProductCard';
import ProductPopup from '../../components/productPopup/ProductPopup';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StraightenIcon from '@mui/icons-material/Straighten';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {
  ProductsContainer,
  FilterContainer,
  PageTitle,
  SearchField,
  FilterSelect,
  ProductsGrid,
  SelectProductButton
} from './Products.styles';
import Loader from '../../components/loader/Loader';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { addToFavorites, removeFromFavorites } from '../../store/favoritesSlice';
import { motion } from 'framer-motion';
import { getAllProducts } from '../../services/products';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    search: ''
  });
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await getAllProducts();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    return uniqueCategories;
  }, [products]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by search term
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }

    // Sort products
    if (sortOption) {
      switch (sortOption) {
        case 'name-asc':
          result.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'name-desc':
          result.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case 'price-asc':
          result.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          result.sort((a, b) => b.price - a.price);
          break;
        case 'rating-desc':
          result.sort((a, b) => b.rating - a.rating);
          break;
        default:
          break;
      }
    }

    return result;
  }, [products, searchTerm, selectedCategory, sortOption]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSortOption('');
  };

  const handleOpenPopup = (product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, size: product.sizes[0] }));
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleToggleFavorite = (product) => {
    const isFavorite = favorites.some((item) => item.id === product.id);
    if (isFavorite) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={() => window.location.reload()} />;
  }

  return (
    <ProductsContainer maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PageTitle variant="h2">
          המוצרים שלנו
        </PageTitle>
        
        <FilterContainer>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4}>
              <SearchField
                fullWidth
                variant="outlined"
                placeholder="חיפוש מוצרים..."
                value={searchTerm}
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  endAdornment: searchTerm && (
                    <InputAdornment position="end">
                      <IconButton size="small" onClick={() => setSearchTerm('')}>
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FilterSelect fullWidth variant="outlined">
                <InputLabel>קטגוריה</InputLabel>
                <Select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  label="קטגוריה"
                  startAdornment={
                    <InputAdornment position="start">
                      <FilterListIcon />
                    </InputAdornment>
                  }
                >
                  <MenuItem value="">הכל</MenuItem>
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FilterSelect>
            </Grid>
            <Grid item xs={12} md={4}>
              <FilterSelect fullWidth variant="outlined">
                <InputLabel>מיון</InputLabel>
                <Select
                  value={sortOption}
                  onChange={handleSortChange}
                  label="מיון"
                  startAdornment={
                    <InputAdornment position="start">
                      <SortIcon />
                    </InputAdornment>
                  }
                >
                  <MenuItem value="">ללא מיון</MenuItem>
                  <MenuItem value="name-asc">שם (א-ת)</MenuItem>
                  <MenuItem value="name-desc">שם (ת-א)</MenuItem>
                  <MenuItem value="price-asc">מחיר (נמוך לגבוה)</MenuItem>
                  <MenuItem value="price-desc">מחיר (גבוה לנמוך)</MenuItem>
                  <MenuItem value="rating-desc">דירוג (גבוה לנמוך)</MenuItem>
                </Select>
              </FilterSelect>
            </Grid>
          </Grid>
        </FilterContainer>

        <ProductsGrid container spacing={2}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard
                product={product}
                onSelect={() => handleOpenPopup(product)}
                onAddToCart={() => handleAddToCart(product)}
                onToggleFavorite={() => handleToggleFavorite(product)}
                isFavorite={favorites.some((item) => item.id === product.id)}
              />
            </Grid>
          ))}
        </ProductsGrid>

        {filteredProducts.length === 0 && (
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="h6" color="text.secondary">
              לא נמצאו מוצרים מתאימים
            </Typography>
          </Box>
        )}

        <ProductPopup
          open={isPopupOpen}
          onClose={handleClosePopup}
          product={selectedProduct}
        />

        <Snackbar
          open={showSuccess}
          autoHideDuration={3000}
          onClose={() => setShowSuccess(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setShowSuccess(false)}
            severity="success"
            sx={{ width: '100%' }}
          >
            המוצר נוסף לסל בהצלחה!
          </Alert>
        </Snackbar>
      </motion.div>
    </ProductsContainer>
  );
};

export default Products; 