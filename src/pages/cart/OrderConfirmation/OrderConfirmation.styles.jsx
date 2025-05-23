import { styled } from '@mui/material/styles';
import { Card, Button, Container, Box } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
}));

export const OrderConfirmationContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
}));

export const SuccessMessage = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(4),
}));

export const ActionButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  textTransform: 'none',
  padding: theme.spacing(1.5, 4),
  '&.MuiButton-contained': {
    background: 'linear-gradient(45deg, #9B6BFF 30%, #FF6B9B 90%)',
    color: 'white',
    '&:hover': {
      background: 'linear-gradient(45deg, #8B5BEF 30%, #FF5B8B 90%)',
    },
  },
  '&.MuiButton-outlined': {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    '&:hover': {
      borderColor: theme.palette.primary.dark,
      backgroundColor: 'rgba(155, 107, 255, 0.04)',
    },
  },
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(4),
})); 