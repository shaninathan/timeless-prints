import { styled } from '@mui/material/styles';
import { Card, Button, TextField, Container, Box, Dialog } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  width: '100%',
  '& .MuiCardContent-root': {
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4),
    }
  }
}));

export const CheckoutContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  width: '100%',
  maxWidth: '100% !important',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4, 6),
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(4, 8),
  }
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1),
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary,
  },
}));

export const NavigationButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  textTransform: 'none',
  padding: theme.spacing(1.5, 4),
  margin: theme.spacing(1),
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

export const OrderSummaryContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
  borderRadius: '16px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
}));

export const ExitDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '16px',
    padding: theme.spacing(2),
    background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
  },
})); 