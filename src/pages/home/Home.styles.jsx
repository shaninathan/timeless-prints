import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Container, Typography, Button, Card, Box } from '@mui/material';

const baseBackground = {
  position: 'relative',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #9B6BFF 0%, #FF6B9B 50%, #FF8E8E 100%)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\' fill=\'%23ffffff\' fill-opacity=\'0.3\'/%3E%3C/svg%3E")',
    backgroundSize: '60px 60px',
    opacity: 0.6,
    pointerEvents: 'none',
    animation: 'sparkle 8s linear infinite',
  },
  '@keyframes sparkle': {
    '0%': {
      backgroundPosition: '0 0',
      opacity: 0.3
    },
    '50%': {
      opacity: 0.6
    },
    '100%': {
      backgroundPosition: '60px 60px',
      opacity: 0.3
    }
  }
};

export const HeroSection = styled('div')(({ theme }) => ({
  ...baseBackground,
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
}));

export const HeroContent = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  color: '#fff',
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: '3.5rem',
  fontWeight: 800,
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  color: '#fff',
  textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
}));

export const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  marginBottom: theme.spacing(4),
  textAlign: 'center',
  color: '#fff',
  textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
}));

export const HeroButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  borderRadius: '30px',
  textTransform: 'none',
  background: 'linear-gradient(45deg, #B388FF 30%, #FF80AB 90%)',
  color: 'white',
  boxShadow: '0 4px 14px rgba(179, 136, 255, 0.4)',
  '&:hover': {
    background: 'linear-gradient(45deg, #9B6BFF 30%, #FF4D8D 90%)',
    boxShadow: '0 6px 20px rgba(179, 136, 255, 0.6)',
  },
}));

export const FloatingCircle = styled(motion.div)(({ theme, size = 100, top, bottom, left, right }) => ({
  position: 'absolute',
  width: size,
  height: size,
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(5px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  top: top ? `${top}%` : 'auto',
  bottom: bottom ? `${bottom}%` : 'auto',
  left: left ? `${left}%` : 'auto',
  right: right ? `${right}%` : 'auto',
}));

export const TechCircle = styled(motion.div)(({ theme, size = 100, top, bottom, left, right, delay = 0 }) => ({
  position: 'absolute',
  width: size,
  height: size,
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  top: top ? `${top}%` : 'auto',
  bottom: bottom ? `${bottom}%` : 'auto',
  left: left ? `${left}%` : 'auto',
  right: right ? `${right}%` : 'auto',
  animation: `pulse ${3 + delay}s infinite`,
  '@keyframes pulse': {
    '0%': { transform: 'scale(1)', opacity: 0.5 },
    '50%': { transform: 'scale(1.1)', opacity: 0.3 },
    '100%': { transform: 'scale(1)', opacity: 0.5 },
  },
}));

export const FeatureSection = styled('section')(({ theme }) => ({
  ...baseBackground,
  padding: theme.spacing(8, 0),
}));

export const FeatureCard = styled(Card)(({ theme }) => ({
  height: '280px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  background: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '20px',
  boxShadow: '0 8px 32px rgba(155, 107, 255, 0.2)',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(155, 107, 255, 0.3)',
  },
}));

export const FeatureIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  position: 'relative',
  '& svg': {
    color: '#9B6BFF',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    zIndex: 2,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '0',
    height: '0',
    background: 'radial-gradient(circle, rgba(155, 107, 255, 0.2) 0%, transparent 70%)',
    transform: 'translate(-50%, -50%)',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 1,
  },
  '&:hover': {
    '& svg': {
      color: '#FF6B9B',
    },
    '&::before': {
      width: '100px',
      height: '100px',
    }
  }
}));

export const FeatureTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  textAlign: 'center',
  color: '#9B6BFF',
  fontSize: '1.2rem',
  minHeight: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textShadow: '0 2px 4px rgba(155, 107, 255, 0.1)',
}));

export const FeatureDescription = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: '#4A4A4A',
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 2),
  fontSize: '1rem',
  lineHeight: 1.6,
}));

export const CreativeGenerator = styled(Box)(({ theme }) => ({
  ...baseBackground,
  padding: theme.spacing(12, 0),
}));

export const IdeaCard = styled(motion.div)(({ theme, colors = ['#6C63FF', '#FF6B6B'] }) => ({
  background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)`,
  borderRadius: '20px',
  padding: theme.spacing(4),
  color: 'white',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
}));

export const IdeaImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '10px',
  marginBottom: theme.spacing(2),
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
}));

export const IdeaTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  color: 'white',
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
}));

export const IdeaDescription = styled(Typography)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.9)',
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.2)',
  marginBottom: theme.spacing(2),
  '& svg': {
    fontSize: '40px',
    color: 'white',
  },
})); 