import { styled } from '@mui/material/styles';
import { Paper, Button, Chip } from '@mui/material';

export const ProductImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  objectFit: 'cover',
  minHeight: '300px',
});

export const ProductContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
}));

export const ProductInfo = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(2),
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  borderRadius: '12px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
  },
}));

export const SizeChip = styled(Chip)(({ theme, selected }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(1, 2),
  fontSize: '1rem',
  fontWeight: selected ? 'bold' : 'normal',
  backgroundColor: selected ? theme.palette.primary.main : theme.palette.grey[200],
  color: selected ? 'white' : theme.palette.text.primary,
  '&:hover': {
    backgroundColor: selected ? theme.palette.primary.dark : theme.palette.grey[300],
  },
}));

export const AddToCartButton = styled(Button)(({ theme, disabled }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5, 4),
  borderRadius: '30px',
  background: disabled 
    ? theme.palette.grey[400] 
    : 'linear-gradient(45deg, #9B6BFF 30%, #FF6B9B 90%)',
  color: 'white',
  '&:hover': {
    background: disabled 
      ? theme.palette.grey[400] 
      : 'linear-gradient(45deg, #8B85FF 30%, #FF8E8E 90%)',
  },
}));

export const BackButton = styled(Button)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  backgroundColor: 'white',
  color: 'black',
  borderRadius: '30px',
  padding: theme.spacing(1.5, 4),
  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  '&:hover': {
    backgroundColor: 'white',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
  },
  transition: 'all 0.3s ease',
  zIndex: 1000,
}));

export const SelectProductButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 4),
  borderRadius: '30px',
  background: 'linear-gradient(45deg, #9B6BFF 30%, #FF6B9B 90%)',
  color: 'white',
  '&:hover': {
    background: 'linear-gradient(45deg, #8B85FF 30%, #FF8E8E 90%)',
  },
})); 