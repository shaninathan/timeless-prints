import { styled } from '@mui/material/styles';
import { Container, Typography, Grid, Box, TextField, FormControl, Button, Paper } from '@mui/material';

export const ProductsContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  position: 'relative',
  overflow: 'hidden',
  direction: 'rtl',
  minHeight: '100vh',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
    animation: 'pulse 8s infinite',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '150%',
    height: '150%',
    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 60%)',
    animation: 'pulse 6s infinite 1s',
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1) rotate(0deg)',
      opacity: 0.5,
    },
    '50%': {
      transform: 'scale(1.2) rotate(180deg)',
      opacity: 0.3,
    },
    '100%': {
      transform: 'scale(1) rotate(360deg)',
      opacity: 0.5,
    },
  },
}));

export const FilterContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  padding: theme.spacing(3),
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  backdropFilter: 'blur(10px)',
  direction: 'rtl',
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.text.primary,
  textShadow: 'none',
  marginBottom: theme.spacing(4),
  direction: 'rtl',
  fontSize: '2.5rem',
  textAlign: 'center',
  background: 'linear-gradient(45deg, #6C63FF 30%, #FF6B6B 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

export const SearchField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: theme.palette.background.paper,
    '&:hover': {
      backgroundColor: theme.palette.background.default,
    },
  },
}));

export const FilterSelect = styled(FormControl)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: theme.palette.background.paper,
    '&:hover': {
      backgroundColor: theme.palette.background.default,
    },
  },
}));

export const ProductsGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

export const SelectProductButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  borderRadius: '30px',
  textTransform: 'none',
  background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
  color: 'white',
  boxShadow: '0 4px 14px rgba(255, 107, 107, 0.4)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    background: 'linear-gradient(45deg, #FF4D4D 30%, #3DBFB7 90%)',
    boxShadow: '0 6px 20px rgba(255, 107, 107, 0.6)',
    transform: 'translateY(-2px)',
  },
  '&:active': {
    transform: 'translateY(1px)',
    boxShadow: '0 2px 10px rgba(255, 107, 107, 0.4)',
  },
}));

export const ProductContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '16px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  backdropFilter: 'blur(10px)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
  },
}));

export const ProductImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '12px',
  marginBottom: theme.spacing(2),
}));

export const ProductInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
}));

export const SizeChip = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0.5),
  borderRadius: '20px',
  padding: theme.spacing(0.5, 2),
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

export const BackButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  borderRadius: '30px',
  padding: theme.spacing(1.5, 4),
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
})); 