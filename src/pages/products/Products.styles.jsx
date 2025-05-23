import { styled } from '@mui/material/styles';
import { Container, Typography, Grid, Box, TextField, FormControl, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion.create('div');
const MotionPaper = motion.create(Paper);
const MotionGrid = motion.create(Grid);

export const ProductsContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 4),
  position: 'relative',
  overflow: 'hidden',
  maxWidth: '1600px !important',
  '&.MuiContainer-root': {
    background: 'transparent !important',
  },
  '&.MuiContainer-maxWidthLg': {
    background: 'transparent !important',
  },
  '&.muirtl-18328gq-MuiContainer-root': {
    background: 'transparent !important',
  }
}));

export const ProductCard = styled(MotionPaper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'transparent',
  borderRadius: theme.spacing(2),
  position: 'relative',
  overflow: 'hidden',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&::before': {
    display: 'none'
  }
}));

export const ProductGrid = styled(MotionGrid)(({ theme }) => ({
  marginTop: theme.spacing(6),
  '& .MuiGrid-item': {
    padding: theme.spacing(2),
  }
}));

export const ProductImageBox = styled(MotionBox)(({ theme }) => ({
  width: '100%',
  height: 200,
  borderRadius: theme.spacing(1),
  overflow: 'hidden',
  marginBottom: theme.spacing(2),
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
}));

export const ProductInfoBox = styled(MotionBox)(({ theme }) => ({
  padding: theme.spacing(2),
  background: 'transparent',
  borderRadius: theme.spacing(1),
  marginTop: 'auto',
}));

export const TitleBox = styled(MotionBox)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: 'center',
  '& h2': {
    fontWeight: 700,
    color: 'text.primary',
    marginBottom: theme.spacing(2),
  },
  '& p': {
    color: 'text.secondary',
    maxWidth: '800px',
    margin: '0 auto',
  },
}));

export const FilterBox = styled(MotionBox)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'transparent',
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(4),
}));

export const FilterContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  padding: theme.spacing(4),
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '16px',
  direction: 'rtl',
  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  backdropFilter: 'blur(10px)',
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.text.primary,
  textShadow: 'none',
  marginBottom: theme.spacing(6),
  direction: 'rtl',
  fontSize: '2.5rem',
  textAlign: 'center',
  background: 'linear-gradient(45deg, #6C63FF 30%, #FF6B6B 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  padding: theme.spacing(0, 2),
}));

export const SearchField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}));

export const FilterSelect = styled(FormControl)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
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
  backgroundColor: 'transparent',
  boxShadow: 'none',
  '&:hover': {
    transform: 'none',
    boxShadow: 'none',
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
  backgroundColor: 'transparent',
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
  },
  '&.Mui-selected': {
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
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