import { styled } from '@mui/material/styles';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '8px',
  backgroundColor: 'rgba(255, 255, 255, 0.98)',
  boxShadow: '0 1px 8px rgba(0,0,0,0.03)',
  backdropFilter: 'blur(4px)',
  transition: 'all 0.2s ease-in-out',
  border: '1px solid rgba(108, 99, 255, 0.08)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(108, 99, 255, 0.08)',
    border: '1px solid rgba(108, 99, 255, 0.15)',
  },
}));

export const ProductImage = styled(CardMedia)({
  height: '160px',
  objectFit: 'cover',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundColor: '#fafafa',
  borderRadius: '6px 6px 0 0',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.01)',
  }
});

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(1.5),
  '&:last-child': {
    paddingBottom: theme.spacing(1.5),
  },
}));

export const ProductName = styled(Typography)(({ theme }) => ({
  fontSize: '0.95rem',
  fontWeight: 600,
  marginBottom: theme.spacing(0.5),
  color: theme.palette.text.primary,
  letterSpacing: '0.1px',
  lineHeight: 1.3,
}));

export const ProductDescription = styled(Typography)(({ theme }) => ({
  fontSize: '0.8rem',
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  lineHeight: 1.4,
  opacity: 0.85,
}));

export const ProductPrice = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  color: theme.palette.primary.main,
  background: 'linear-gradient(45deg, #6C63FF 30%, #9B6BFF 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

export const SelectButton = styled(Button)(({ theme }) => ({
  borderRadius: '16px',
  padding: theme.spacing(0.75, 2),
  fontSize: '0.85rem',
  textTransform: 'none',
  fontWeight: 500,
  background: 'linear-gradient(45deg, #6C63FF 30%, #9B6BFF 90%)',
  color: 'white',
  boxShadow: '0 1px 4px rgba(108, 99, 255, 0.2)',
  transition: 'all 0.2s ease-in-out',
  minHeight: '32px',
  '&:hover': {
    background: 'linear-gradient(45deg, #5B52EF 30%, #8B5BEF 90%)',
    boxShadow: '0 2px 8px rgba(108, 99, 255, 0.25)',
    transform: 'translateY(-1px)',
  },
  '&:active': {
    transform: 'translateY(1px)',
    boxShadow: '0 1px 3px rgba(108, 99, 255, 0.2)',
  }
})); 