import React from 'react';
import { Box, Typography, Rating, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  StyledCard,
  ProductImage,
  StyledCardContent,
  ProductName,
  ProductDescription,
  ProductPrice,
  SelectButton,
} from './ProductCard.styles.jsx';

const ProductCard = ({ product, onSelect, onAddToCart, onToggleFavorite, isFavorite }) => {
  return (
    <StyledCard>
      <ProductImage
        component="img"
        src={product.image}
        alt={product.name}
        title={product.name}
      />
      <StyledCardContent>
        <ProductName variant="h6">
          {product.name}
        </ProductName>
        <ProductDescription variant="body2">
          {product.description}
        </ProductDescription>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Rating value={product.rating} readOnly precision={0.5} size="small" />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            ({product.reviews})
          </Typography>
        </Box>
        <Box sx={{ mt: 'auto' }}>
          <ProductPrice>
            ₪{product.price}
          </ProductPrice>
          <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
            <SelectButton
              variant="contained"
              fullWidth
              onClick={() => onSelect(product)}
            >
              בחר מוצר
            </SelectButton>
            <IconButton 
              onClick={() => onToggleFavorite(product)}
              sx={{ 
                color: isFavorite ? 'primary.main' : 'text.secondary',
                '&:hover': {
                  color: 'primary.main',
                }
              }}
            >
              {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </Box>
        </Box>
      </StyledCardContent>
    </StyledCard>
  );
};

export default ProductCard; 