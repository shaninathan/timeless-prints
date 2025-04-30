import React, { useState, useMemo } from 'react';
import { Container, Typography, Grid, Box, FormControl, InputLabel, Select, MenuItem, TextField, InputAdornment, IconButton, Chip, Stack, Dialog, DialogTitle, DialogContent, DialogActions, Button, Rating, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import ProductCard from '../components/ProductCard/ProductCard';
import { products } from '../data/products';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StraightenIcon from '@mui/icons-material/Straighten';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const ProductsContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  position: 'relative',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.9) 0%, rgba(255, 107, 107, 0.9) 100%)',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
    animation: 'pulse 8s infinite',
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1) rotate(0deg)',
      opacity: 0.5,
    },
    '50%': {
      transform: 'scale(1.2) rotate(180deg)',
      opacity: 0.3,
    },
    '100%': {
      transform: 'scale(1) rotate(360deg)',
      opacity: 0.5,
    },
  },
}));

const FilterContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
}));

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    return uniqueCategories;
  }, []);

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
  }, [searchTerm, selectedCategory, sortOption]);

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

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedProduct(null);
  };

  return (
    <ProductsContainer maxWidth="lg">
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 700,
          color: 'white',
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
          marginBottom: 4,
        }}
      >
        המוצרים שלנו
      </Typography>
      
      <FilterContainer>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <TextField
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
            <FormControl fullWidth variant="outlined">
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
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth variant="outlined">
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
            </FormControl>
          </Grid>
        </Grid>
        
        {(searchTerm || selectedCategory || sortOption) && (
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" color="text.secondary">
              סינון פעיל:
            </Typography>
            <Stack direction="row" spacing={1}>
              {searchTerm && (
                <Chip 
                  label={`חיפוש: ${searchTerm}`} 
                  onDelete={() => setSearchTerm('')} 
                  size="small" 
                />
              )}
              {selectedCategory && (
                <Chip 
                  label={`קטגוריה: ${selectedCategory}`} 
                  onDelete={() => setSelectedCategory('')} 
                  size="small" 
                />
              )}
              {sortOption && (
                <Chip 
                  label={`מיון: ${sortOption}`} 
                  onDelete={() => setSortOption('')} 
                  size="small" 
                />
              )}
            </Stack>
            <Button 
              size="small" 
              onClick={handleClearFilters}
              sx={{ ml: 'auto' }}
            >
              נקה סינון
            </Button>
          </Box>
        )}
      </FilterContainer>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="body1" color="white" align="center">
          {filteredProducts.length === 0 
            ? 'לא נמצאו מוצרים התואמים את החיפוש שלך' 
            : `מציג ${filteredProducts.length} מוצרים`}
        </Typography>
      </Box>
      
      <Grid container spacing={4}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} onClick={() => handleProductClick(product)} />
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: { borderRadius: 2 }
        }}
      >
        {selectedProduct && (
          <>
            <DialogTitle sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              borderBottom: '1px solid #eaeaea'
            }}>
              <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                {selectedProduct.name}
              </Typography>
              <IconButton onClick={handleCloseDialog} size="small">
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ mt: 2 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box 
                    sx={{ 
                      height: 300, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      backgroundColor: '#f5f5f5',
                      borderRadius: 2,
                      overflow: 'hidden'
                    }}
                  >
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name} 
                      style={{ 
                        maxWidth: '100%', 
                        maxHeight: '100%', 
                        objectFit: 'contain'
                      }} 
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    תיאור המוצר
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {selectedProduct.description}
                  </Typography>
                  
                  <Box sx={{ my: 2 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                      מידע נוסף
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {selectedProduct.category === 'clothing' 
                        ? 'מוצר איכותי המיוצר מבדים איכותיים ונוחים. מתאים לכל עונות השנה.'
                        : 'אביזר איכותי המיוצר מחומרים עמידים. מתאים לשימוש יומיומי.'}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ my: 2 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                      יתרונות המוצר
                    </Typography>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <CheckCircleIcon color="success" sx={{ mr: 1 }} />
                          <Typography>איכות גבוהה ועמידות לאורך זמן</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <CheckCircleIcon color="success" sx={{ mr: 1 }} />
                          <Typography>עיצוב מותאם אישית לפי בחירתכם</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <CheckCircleIcon color="success" sx={{ mr: 1 }} />
                          <Typography>משלוח מהיר לכל הארץ</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                  
                  <Box sx={{ my: 2 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                      זמני משלוח
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <AccessTimeIcon color="primary" sx={{ mr: 1 }} />
                      <Typography>2-4 ימי עסקים</Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ my: 2 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                      מידות זמינות
                    </Typography>
                    <FormControl 
                      fullWidth
                      variant="outlined"
                      sx={{ 
                        mt: 1,
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                        }
                      }}
                    >
                      <InputLabel id="size-select-label">בחר מידה</InputLabel>
                      <Select
                        labelId="size-select-label"
                        value={selectedSize}
                        onChange={handleSizeChange}
                        label="בחר מידה"
                        startAdornment={<StraightenIcon sx={{ mr: 1, color: 'text.secondary' }} />}
                      >
                        {selectedProduct.category === 'clothing' 
                          ? ['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                              <MenuItem key={size} value={size}>
                                {size}
                              </MenuItem>
                            ))
                          : (
                              <MenuItem value="One Size">
                                One Size
                              </MenuItem>
                            )}
                      </Select>
                    </FormControl>
                  </Box>

                  <Box sx={{ my: 2 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                      כמות
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <IconButton 
                        onClick={() => handleQuantityChange(quantity - 1)}
                        sx={{ 
                          border: '1px solid #e0e0e0',
                          '&:hover': { backgroundColor: '#f5f5f5' }
                        }}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <TextField
                        type="number"
                        value={quantity}
                        onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                        inputProps={{ min: 1 }}
                        sx={{ 
                          width: '80px',
                          '& input': { textAlign: 'center' }
                        }}
                      />
                      <IconButton 
                        onClick={() => handleQuantityChange(quantity + 1)}
                        sx={{ 
                          border: '1px solid #e0e0e0',
                          '&:hover': { backgroundColor: '#f5f5f5' }
                        }}
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions sx={{ p: 3, borderTop: '1px solid #eaeaea' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
                  ₪{(selectedProduct.price * quantity).toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ({quantity} יחידות)
                </Typography>
              </Box>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={handleAddToCart}
                size="large"
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                  px: 4
                }}
              >
                הוסף לסל
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </ProductsContainer>
  );
};

export default Products; 