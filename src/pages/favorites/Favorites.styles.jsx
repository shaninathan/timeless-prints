import { styled } from '@mui/material/styles';
import { Container, Card, CardContent, CardMedia, Button, IconButton, Box } from '@mui/material';

export const FavoritesContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  position: 'relative',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.9) 0%, rgba(255, 107, 107, 0.9) 100%)',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
    animation: 'pulse 8s infinite',
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

export const ProductCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
  },
}));

export const ProductImage = styled(CardMedia)(({ theme }) => ({
  height: 200,
  objectFit: 'cover',
  borderTopLeftRadius: theme.spacing(2),
  borderTopRightRadius: theme.spacing(2),
}));

export const ProductContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
}));

export const AddToCartButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  textTransform: 'none',
  padding: theme.spacing(1.5, 4),
  background: 'linear-gradient(45deg, #9B6BFF 30%, #FF6B9B 90%)',
  color: 'white',
  '&:hover': {
    background: 'linear-gradient(45deg, #8B5BEF 30%, #FF5B8B 90%)',
  },
}));

export const RemoveButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.error.main,
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

export const EmptyStateContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(8),
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
}));

export const BrowseButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  borderRadius: theme.spacing(2),
  textTransform: 'none',
  padding: theme.spacing(1.5, 4),
  background: 'linear-gradient(45deg, #9B6BFF 30%, #FF6B9B 90%)',
  color: 'white',
  '&:hover': {
    background: 'linear-gradient(45deg, #8B5BEF 30%, #FF5B8B 90%)',
  },
})); 