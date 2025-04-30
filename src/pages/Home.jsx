import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Grid,
  Box, 
  Card,
  CardContent,
  CardMedia,
  useTheme,
  useMediaQuery,
  Paper,
  Fade,
  Zoom,
  CardActions,
  Rating,
  Chip,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import PaletteIcon from '@mui/icons-material/Palette';
import PrintIcon from '@mui/icons-material/Print';
import { motion } from 'framer-motion';
import { products } from '../../public/products';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BrushIcon from '@mui/icons-material/Brush';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ImageIcon from '@mui/icons-material/Image';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import StarIcon from '@mui/icons-material/Star';

// Styled components
const HeroSection = styled('div')(({ theme }) => ({
  height: '90vh',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
    animation: 'pulse 8s infinite',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '150%',
    height: '150%',
    background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 60%)',
    animation: 'pulse 6s infinite 1s',
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

const FloatingCircle = styled(motion.div)(({ theme, size, top, left, delay }) => ({
  position: 'absolute',
  width: size,
  height: size,
  borderRadius: '50%',
  background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
  border: '1px solid rgba(255,255,255,0.1)',
  top: `${top}%`,
  left: `${left}%`,
  zIndex: 1,
}));

const TechCircle = styled(motion.div)(({ theme, size, top, left, delay }) => ({
  position: 'absolute',
  width: size,
  height: size,
  borderRadius: '50%',
  background: 'transparent',
  border: '2px solid rgba(255,255,255,0.1)',
  top: `${top}%`,
  left: `${left}%`,
  zIndex: 1,
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    border: '2px solid rgba(255,255,255,0.05)',
    animation: `ripple 3s infinite ${delay}s`,
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(1)',
      opacity: 0.5,
    },
    '100%': {
      transform: 'scale(1.5)',
      opacity: 0,
    },
  },
}));

const FloatingElement = styled(motion.div)({
  position: 'absolute',
  width: '100px',
  height: '100px',
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '50%',
  backdropFilter: 'blur(5px)',
  zIndex: 1,
});

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
  color: '#fff',
  maxWidth: '800px',
  padding: theme.spacing(4),
  '& h1': {
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
    marginBottom: theme.spacing(3),
    animation: 'glow 3s ease-in-out infinite',
  },
  '& h2': {
    textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
    marginBottom: theme.spacing(4),
  },
  '@keyframes glow': {
    '0%': { textShadow: '0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3)' },
    '50%': { textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.5)' },
    '100%': { textShadow: '0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3)' },
  },
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
  background: 'linear-gradient(135deg, #FFFFFF 0%, #F7F9FC 100%)',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
    '& .MuiCardContent-root': {
      background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.05) 0%, rgba(255, 107, 107, 0.05) 100%)',
    },
    '& .feature-icon': {
      transform: 'scale(1.1) rotate(5deg)',
      filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))',
    },
  },
}));

const AnimatedIcon = styled(motion.div)({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '16px',
  '& svg': {
    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
    transition: 'all 0.3s ease-in-out',
  },
});

const FeatureSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
}));

const CustomDesignSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 240, 240, 0.9) 100%)',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
  },
}));

const StyledCardMedia = styled(CardMedia)({
  height: 200,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f5f5f5',
});

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  '& svg': {
    fontSize: '5rem',
    opacity: 0.8,
  },
}));

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const features = [
    {
      icon: <PhotoCameraIcon sx={{ fontSize: 60, color: theme.palette.primary.main, marginLeft: 2 }} />,
      title: 'הדפסת תמונות איכותית',
      description: 'הדפסות באיכות גבוהה על מגוון חומרים וגדלים.'
    },
    {
      icon: <PaletteIcon sx={{ fontSize: 60, color: theme.palette.secondary.main, marginLeft: 2 }} />,
      title: 'עיצוב מותאם אישית',
      description: 'התאמה אישית של העיצוב לכל מוצר.'
    },
    {
      icon: <PrintIcon sx={{ fontSize: 60, color: theme.palette.success.main, marginLeft: 2 }} />,
      title: 'מגוון מוצרים',
      description: 'חולצות, כובעים, כוסות ועוד המון מוצרים מעוצבים.'
    },
    {
      icon: <LocalShippingIcon sx={{ fontSize: 60, color: theme.palette.info.main, marginLeft: 2 }} />,
      title: 'משלוח מהיר',
      description: 'משלוח מהיר לכל חלקי הארץ.'
    }
  ];

  // Get 3 random products for the custom design section
  const randomProducts = [...products]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const getProductIcon = (category) => {
    switch (category) {
      case 'clothing':
        return <ShoppingBagIcon />;
      case 'accessories':
        return <LocalOfferIcon />;
      case 'home':
        return <PaletteIcon />;
      default:
        return <AutoAwesomeIcon />;
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          ברוכים הבאים ל-Timeless Prints
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          הדפסים מיוחדים שיהפכו את הבית שלכם ליצירת אמנות
        </Typography>
      </Box>
    </Container>
  );
};

export default Home; 