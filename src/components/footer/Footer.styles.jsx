import { styled } from '@mui/material/styles';
import { Box, IconButton, Link } from '@mui/material';

export const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(6, 0),
  marginTop: 'auto',
  borderTop: `1px solid ${theme.palette.divider}`,
}));

export const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: 'transparent',
  },
}));

export const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
}));

export const NewsletterForm = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  '& .MuiTextField-root': {
    '& .MuiOutlinedInput-root': {
      borderRadius: '20px',
      backgroundColor: theme.palette.background.default,
    },
  },
}));

export const FeatureBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(1.5),
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.background.default,
    transform: 'translateX(-4px)',
  },
  '& svg': {
    transition: 'transform 0.3s ease',
  },
  '&:hover svg': {
    transform: 'scale(1.1)',
  }
})); 