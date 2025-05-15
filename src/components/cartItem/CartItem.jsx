import React, { useState } from 'react';
import {
  Box,
  CardContent,
  Typography,
  IconButton,
  Grid,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PhotoIcon from '@mui/icons-material/Photo';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { updateCartItemImage, updateCartItemNotes } from '../../store/cartSlice';
import {
  StyledCard,
  ProductImage,
  ActionButton,
  NotesTextField
} from './CartItem.styles';

const CartItem = ({ item, onRemove }) => {
  const dispatch = useDispatch();
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState(item.notes || '');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(updateCartItemImage({ cartItemId: item.cartItemId, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNotesChange = (event) => {
    const newNotes = event.target.value;
    setNotes(newNotes);
    dispatch(updateCartItemNotes({ cartItemId: item.cartItemId, notes: newNotes }));
  };

  return (
    <StyledCard>
      <Box sx={{ position: 'relative', minWidth: '120px' }}>
        <ProductImage src={item.customImage || item.image} alt={item.name} />
        <Box sx={{ 
          position: 'absolute', 
          top: 8, 
          right: 8, 
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '12px',
          padding: '4px 8px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            כמות:
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            {item.quantity}
          </Typography>
        </Box>
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id={`image-upload-${item.cartItemId}`}
          type="file"
          onChange={handleImageUpload}
        />
        <label htmlFor={`image-upload-${item.cartItemId}`}>
          <ActionButton
            component="span"
            startIcon={<PhotoIcon />}
            size="small"
            sx={{ 
              position: 'absolute',
              bottom: 8,
              right: 8,
            }}
          >
            העלה תמונה
          </ActionButton>
        </label>
      </Box>
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '8px !important' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              {item.name}
            </Typography>
            {item.size && (
              <Typography variant="body2" color="text.secondary" gutterBottom>
                גודל: {item.size}
              </Typography>
            )}
            <Typography variant="body2" color="text.secondary">
              מחיר ליחידה: ₪{item.price}
            </Typography>
            <ActionButton
              size="small"
              onClick={() => setShowNotes(!showNotes)}
              startIcon={<EditIcon />}
              sx={{ mt: 1 }}
            >
              {showNotes ? 'הסתר הערות' : 'הוסף הערות'}
            </ActionButton>
            {showNotes && (
              <NotesTextField
                fullWidth
                multiline
                rows={2}
                value={notes}
                onChange={handleNotesChange}
                placeholder="הוסף הערות להדפסה..."
                size="small"
                sx={{ mt: 1 }}
              />
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" justifyContent="flex-end">
              <IconButton
                onClick={() => onRemove(item.cartItemId)}
                color="error"
                sx={{ ml: 2 }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
            <Typography variant="h6" color="primary" align="right" sx={{ mt: 2 }}>
              סה"כ: ₪{item.price * item.quantity}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </StyledCard>
  );
};

export default CartItem; 