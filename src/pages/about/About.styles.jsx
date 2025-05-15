import { styled } from '@mui/material/styles';
import { Container, Paper, Box } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion.create('div');
const MotionPaper = motion.create(Paper);

export const AboutContainer = styled(Container)(({ theme }) => ({
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

export const AboutCard = styled(MotionPaper)(({ theme }) => ({
  padding: theme.spacing(4),
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

export const FeatureBox = styled(MotionBox)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  background: 'rgba(255, 255, 255, 0.8)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    background: 'rgba(255, 255, 255, 0.95)',
  },
}));

export const TitleBox = styled(MotionBox)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  '& h2': {
    fontWeight: 700,
    color: 'white',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
  },
})); 