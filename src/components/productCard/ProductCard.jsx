import React from 'react';
import { useNavigate } from 'react-router-dom';
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

const ProductCard = ({ product, onAddToCart, onToggleFavorite, isFavorite }) => {
  const navigate = useNavigate();

  const handleSelectProduct = (e) => {
    e.stopPropagation();
    navigate(`/product/${product.id}`);
  };

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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <ProductPrice variant="h6">
            ₪{product.price}
          </ProductPrice>
          <Box>
            <IconButton onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite();
            }} size="small">
              {isFavorite ? <FavoriteIcon color="primary" /> : <FavoriteBorderIcon />}
            </IconButton>
          </Box>
        </Box>
        <SelectButton
          variant="contained"
          onClick={handleSelectProduct}
          fullWidth
        >
          בחר מוצר
        </SelectButton>
      </StyledCardContent>
    </StyledCard>
  );
};

export default ProductCard; 