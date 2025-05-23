import { styled } from '@mui/material/styles';
import { Paper, Button, Chip, IconButton, TextField, Box } from '@mui/material';

export const ProductImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  objectFit: 'cover',
  minHeight: '300px',
  maxHeight: '400px',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  }
});

export const ProductContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: '0 auto',
  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
  position: 'relative',
  overflow: 'hidden',
  maxWidth: '1400px',
  width: '100%',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: 'linear-gradient(90deg, #6C63FF 0%, #FF6B6B 100%)',
  }
}));

export const ProductInfo = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  borderRadius: '12px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
  },
}));

export const SizeChip = styled(Chip)(({ theme, selected }) => ({
  margin: theme.spacing(0.25),
  padding: theme.spacing(0.75, 1.5),
  fontSize: '0.9rem',
  fontWeight: selected ? 'bold' : 'normal',
  backgroundColor: selected ? theme.palette.primary.main : theme.palette.grey[100],
  color: selected ? 'white' : theme.palette.text.primary,
  borderRadius: '8px',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: selected ? theme.palette.primary.dark : theme.palette.grey[200],
    transform: 'translateY(-1px)',
  },
  '& .MuiChip-label': {
    padding: '0 8px',
  }
}));

export const AddToCartButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.25, 3),
  borderRadius: '12px',
  fontSize: '1rem',
  textTransform: 'none',
  fontWeight: 'bold',
  background: 'linear-gradient(45deg, #6C63FF 30%, #FF6B6B 90%)',
  color: 'white',
  boxShadow: '0 4px 12px rgba(108, 99, 255, 0.2)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    background: 'linear-gradient(45deg, #8B85FF 30%, #FF8E8E 90%)',
    boxShadow: '0 6px 16px rgba(108, 99, 255, 0.3)',
    transform: 'translateY(-1px)',
  },
  '&:active': {
    transform: 'translateY(1px)',
    boxShadow: '0 2px 8px rgba(108, 99, 255, 0.2)',
  },
}));

export const BackButton = styled(Button)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  backgroundColor: 'white',
  color: theme.palette.text.primary,
  borderRadius: '20px',
  padding: theme.spacing(1, 3),
  boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
  fontWeight: 'bold',
  fontSize: '0.9rem',
  transition: 'all 0.3s ease',
  zIndex: 1000,
  '&:hover': {
    backgroundColor: 'white',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
  },
}));

export const QuantityControl = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  marginTop: theme.spacing(1.5),
  backgroundColor: theme.palette.grey[50],
  padding: theme.spacing(1),
  borderRadius: '8px',
  border: `1px solid ${theme.palette.grey[200]}`,
}));

export const QuantityButton = styled(IconButton)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: '8px',
  padding: theme.spacing(0.5),
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: 'white',
  },
}));

export const MaterialInfo = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.grey[50],
  borderRadius: '8px',
  border: `1px solid ${theme.palette.grey[200]}`,
}));

export const ProductSpecs = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.grey[50],
  borderRadius: '8px',
  border: `1px solid ${theme.palette.grey[200]}`,
})); 