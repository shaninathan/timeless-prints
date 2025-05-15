import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(45deg, #9B6BFF 0%, #FF6B9B 50%, #FF8E8E 100%)',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  backdropFilter: 'blur(10px)',
  borderBottom: 'none',
  opacity: 0.95,
}));

export const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0.5rem 2rem',
  position: 'relative',
  zIndex: 1,
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: '0 0 20px 20px',
});

export const NavButton = styled(Button)(({ theme, active }) => ({
  marginLeft: theme.spacing(2),
  color: active ? '#FFFFFF' : 'rgba(255,255,255,0.9)',
  position: 'relative',
  padding: '0.5rem 1.5rem',
  borderRadius: '30px',
  transition: 'all 0.3s ease',
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  background: active ? 'rgba(255,255,255,0.2)' : 'transparent',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.25)',
    color: '#FFFFFF',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  '& .MuiButton-startIcon': {
    marginRight: theme.spacing(1),
    marginLeft: 0,
    color: active ? '#FFFFFF' : 'rgba(255,255,255,0.9)',
  },
  '&::after': active ? {
    content: '""',
    position: 'absolute',
    bottom: '-2px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '30%',
    height: '3px',
    background: 'linear-gradient(90deg, #9B6BFF, #FF6B9B)',
    borderRadius: '2px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  } : {},
}));

export const Logo = styled(Typography)(({ theme }) => ({
  color: '#FFFFFF',
  fontWeight: 700,
  cursor: 'pointer',
  fontSize: '1.5rem',
  textShadow: '0 2px 4px rgba(0,0,0,0.2)',
  background: 'linear-gradient(45deg, #FFFFFF, rgba(255,255,255,0.9))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  '&:hover': {
    opacity: 0.9,
    transform: 'scale(1.02)',
  },
  transition: 'all 0.3s ease',
})); 