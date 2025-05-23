import { styled } from '@mui/material/styles';
import { Box, IconButton, Link } from '@mui/material';

export const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  padding: theme.spacing(4, 0),
  marginTop: 'auto',
  borderTop: `1px solid ${theme.palette.divider}`,
  boxShadow: '0 -2px 10px rgba(0,0,0,0.05)',
  width: '100%',
  position: 'relative',
  left: 0,
  right: 0,
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
  flexDirection: 'row',
  gap: theme.spacing(1),
  alignItems: 'center',
  '& .MuiTextField-root': {
    flex: 1,
    '& .MuiOutlinedInput-root': {
      borderRadius: '20px',
      backgroundColor: theme.palette.grey[50],
    },
  },
}));

export const FeatureBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(0.5),
  borderRadius: theme.spacing(1),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.grey[50],
    transform: 'translateX(-4px)',
  },
  '& svg': {
    transition: 'transform 0.3s ease',
  },
  '&:hover svg': {
    transform: 'scale(1.1)',
  }
})); 