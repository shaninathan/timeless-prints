import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  IconButton,
  Grid,
  Rating,
  Divider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites, addToCart } from '../../store/cartSlice';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '16px',
    maxWidth: '800px',
    width: '90%',
    margin: theme.spacing(2),
    background: 'linear-gradient(135deg, #FFFFFF 0%, #F7F9FC 100%)',
  },
}));

const DialogHeader = styled(DialogTitle)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  '& .MuiTypography-root': {
    fontSize: '1.5rem',
    fontWeight: 600,
  },
}));

const ProductImage = styled('img')({
  width: '100%',
  height: '400px',
  objectFit: 'contain',
  borderRadius: '12px',
  marginBottom: '16px',
  background: '#FFFFFF',
});

const ProductInfo = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const SizeSelect = styled(Select)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(2),
  '& .MuiSelect-select': {
    textAlign: 'right',
  },
}));

const QuantityControl = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
  width: 'fit-content',
}));

const QuantityButton = styled(IconButton)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: '4px',
  padding: theme.spacing(0.5),
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: 'white',
  },
}));

const QuantityInput = styled(TextField)(({ theme }) => ({
  width: '40px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '4px',
    '& input': {
      textAlign: 'center',
      padding: theme.spacing(0.5),
      fontSize: '0.9rem',
      '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0,
      },
      '-moz-appearance': 'textfield',
    },
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  padding: theme.spacing(1, 3),
  fontSize: '1rem',
  textTransform: 'none',
  background: 'linear-gradient(45deg, #6C63FF 30%, #FF6B6B 90%)',
  color: 'white',
  '&:hover': {
    background: 'linear-gradient(45deg, #8B85FF 30%, #FF8E8E 90%)',
  },
}));

const FavoriteButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  '&:hover': {
    color: theme.palette.primary.dark,
  },
}));

const ProductPopup = ({ open, onClose, product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.some((item) => item.id === product?.id);

  if (!product) return null;

  const handleQuantityChange = (newValue) => {
    if (newValue >= 1) {
      setQuantity(newValue);
    }
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      dispatch(addToCart({
        ...product,
        quantity,
        size: selectedSize
      }));
      onClose();
    }
  };

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  return (
    <StyledDialog open={open} onClose={onClose}>
      <DialogHeader>
        <Typography variant="h6">{product.name}</Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <FavoriteButton onClick={handleToggleFavorite}>
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </FavoriteButton>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogHeader>
      <DialogContent dividers>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ProductImage src={product.image} alt={product.name} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProductInfo>
              <Typography variant="h6" color="primary" gutterBottom>
                ₪{product.price}
              </Typography>
              <Typography variant="body1" paragraph>
                {product.description}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Rating value={product.rating} readOnly precision={0.5} />
                <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                  ({product.rating})
                </Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <FormControl fullWidth>
                <InputLabel>גודל</InputLabel>
                <SizeSelect
                  value={selectedSize}
                  onChange={handleSizeChange}
                  label="גודל"
                >
                  {product.sizes.map((size) => (
                    <MenuItem key={size} value={size}>
                      {size}
                    </MenuItem>
                  ))}
                </SizeSelect>
              </FormControl>
              <QuantityControl>
                <QuantityButton onClick={() => handleQuantityChange(quantity - 1)} size="small">
                  <RemoveIcon fontSize="small" />
                </QuantityButton>
                <QuantityInput
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                  type="number"
                  variant="outlined"
                  size="small"
                  inputProps={{ 
                    min: 1, 
                    style: { textAlign: 'center' },
                    readOnly: true
                  }}
                />
                <QuantityButton onClick={() => handleQuantityChange(quantity + 1)} size="small">
                  <AddIcon fontSize="small" />
                </QuantityButton>
              </QuantityControl>
            </ProductInfo>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ padding: 2 }}>
        <ActionButton 
          variant="contained" 
          onClick={handleAddToCart}
          disabled={!selectedSize}
        >
          הוסף לסל
        </ActionButton>
      </DialogActions>
    </StyledDialog>
  );
};

export default ProductPopup; 