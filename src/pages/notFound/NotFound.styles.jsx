import { styled } from '@mui/material/styles';
import { Container, Box, Button } from '@mui/material';

export const NotFoundContainer = styled(Container)(({ theme }) => ({
  maxWidth: 'sm',
}));

export const NotFoundContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '80vh',
  textAlign: 'center',
}));

export const HomeButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  borderRadius: theme.spacing(2),
  textTransform: 'none',
  padding: theme.spacing(1.5, 4),
  background: 'linear-gradient(45deg, #9B6BFF 30%, #FF6B9B 90%)',
  color: 'white',
  '&:hover': {
    background: 'linear-gradient(45deg, #8B5BEF 30%, #FF5B8B 90%)',
  },
})); 