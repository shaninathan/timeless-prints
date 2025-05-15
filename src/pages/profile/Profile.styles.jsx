import { styled } from '@mui/material/styles';
import { Container, Paper, Box, Button, Avatar } from '@mui/material';

export const ProfileContainer = styled(Container)(({ theme }) => ({
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

export const ProfileCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(108, 99, 255, 0.1), rgba(255, 107, 107, 0.1))',
    zIndex: 0,
  },
}));

export const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: 100,
  height: 100,
  backgroundColor: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

export const ProfileInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
}));

export const EditProfileButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  borderRadius: theme.spacing(2),
  textTransform: 'none',
  padding: theme.spacing(1.5, 4),
  borderColor: theme.palette.primary.main,
  color: theme.palette.primary.main,
  '&:hover': {
    borderColor: theme.palette.primary.dark,
    backgroundColor: 'rgba(108, 99, 255, 0.04)',
  },
})); 