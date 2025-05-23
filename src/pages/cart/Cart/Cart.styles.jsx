import { styled } from '@mui/material/styles';
import { Container, Button } from '@mui/material';

export const CartContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
}));

export const EmptyCartContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8),
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3)
}));

export const BackToShopButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  textTransform: 'none',
  padding: theme.spacing(1, 4),
  background: 'linear-gradient(45deg, #9B6BFF 30%, #FF6B9B 90%)',
  color: 'white',
  '&:hover': {
    background: 'linear-gradient(45deg, #8B5BEF 30%, #FF5B8B 90%)',
  },
}));

export const CheckoutButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  textTransform: 'none',
  padding: theme.spacing(1.5, 4),
  background: 'linear-gradient(45deg, #9B6BFF 30%, #FF6B9B 90%)',
  color: 'white',
  '&:hover': {
    background: 'linear-gradient(45deg, #8B5BEF 30%, #FF5B8B 90%)',
  },
  '&.Mui-disabled': {
    background: theme.palette.grey[400],
  },
})); 