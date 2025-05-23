import React from 'react';
import {
  Paper,
  Box,
  Typography,
  IconButton,
  Grid,
  Chip,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { motion } from 'framer-motion';

const CartItemContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(2),
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  borderRadius: '12px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
  },
}));

const ProductImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  objectFit: 'cover',
  minHeight: '120px',
  maxHeight: '150px',
});

const SizeChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const CartItem = ({ item, onEdit, onRemove }) => {
  const displayImage = item.customImage || item.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <CartItemContainer>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={3} md={2}>
            <ProductImage
              src={displayImage}
              alt={item.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/placeholder-image.jpg';
              }}
            />
          </Grid>
          
          <Grid item xs={12} sm={9} md={7}>
            <Box sx={{ mb: 1 }}>
              <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                {item.description}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
              <SizeChip label={`גודל: ${item.size}`} />
              <Typography variant="body2" color="text.secondary">
                כמות: {item.quantity}
              </Typography>
              {item.notes && (
                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                  הערות: {item.notes}
                </Typography>
              )}
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', md: 'flex-end' }, gap: 1 }}>
              <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                ₪{Math.round(item.price * item.quantity)}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button
                  onClick={onEdit}
                  variant="contained"
                  startIcon={<EditIcon />}
                  size="small"
                  sx={{
                    backgroundColor: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                    minWidth: '120px',
                  }}
                >
                  ערוך והעלה תמונה
                </Button>
                <IconButton
                  onClick={onRemove}
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(255, 107, 107, 0.1)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 107, 107, 0.2)',
                    },
                  }}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CartItemContainer>
    </motion.div>
  );
};

export default CartItem; 