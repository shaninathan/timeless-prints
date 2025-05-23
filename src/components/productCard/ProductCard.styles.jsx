import { styled } from '@mui/material/styles';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '12px',
  backgroundColor: 'rgba(255, 255, 255, 0.98)',
  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
  backdropFilter: 'blur(4px)',
  transition: 'all 0.2s ease-in-out',
  border: '1px solid rgba(108, 99, 255, 0.08)',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(108, 99, 255, 0.12)',
    border: '1px solid rgba(108, 99, 255, 0.2)',
  },
}));

export const ProductImage = styled(CardMedia)({
  height: '180px',
  objectFit: 'contain',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundColor: '#fafafa',
  borderRadius: '12px 12px 0 0',
  transition: 'transform 0.3s ease-in-out',
  padding: '8px',
  '&:hover': {
    transform: 'scale(1.03)',
  }
});

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  '&:last-child': {
    paddingBottom: theme.spacing(2),
  },
}));

export const ProductName = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  color: theme.palette.text.primary,
  letterSpacing: '0.1px',
  lineHeight: 1.4,
}));

export const ProductDescription = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1.5),
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  lineHeight: 1.5,
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