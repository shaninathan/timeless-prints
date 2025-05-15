import { styled } from '@mui/material/styles';
import {
  Dialog,
  DialogTitle,
  Box,
  Select,
  IconButton,
  TextField,
  Button,
} from '@mui/material';

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '16px',
    maxWidth: '800px',
    width: '90%',
    margin: theme.spacing(2),
    background: 'linear-gradient(135deg, #FFFFFF 0%, #F7F9FC 100%)',
  },
}));

export const DialogHeader = styled(DialogTitle)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  '& .MuiTypography-root': {
    fontSize: '1.5rem',
    fontWeight: 600,
  },
}));

export const ProductImage = styled('img')({
  width: '100%',
  height: '400px',
  objectFit: 'contain',
  borderRadius: '12px',
  marginBottom: '16px',
  background: '#FFFFFF',
});

export const ProductInfo = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const SizeSelect = styled(Select)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(2),
  '& .MuiSelect-select': {
    textAlign: 'right',
  },
}));

export const QuantityControl = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
  width: 'fit-content',
}));

export const QuantityButton = styled(IconButton)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: '4px',
  padding: theme.spacing(0.5),
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: 'white',
  },
}));

export const QuantityInput = styled(TextField)(({ theme }) => ({
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

export const ActionButton = styled(Button)(({ theme }) => ({
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

export const FavoriteButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  '&:hover': {
    color: theme.palette.primary.dark,
  },
})); 