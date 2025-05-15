import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  Divider,
  IconButton,
  Stack
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BrushIcon from '@mui/icons-material/Brush';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ImageIcon from '@mui/icons-material/Image';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import StarIcon from '@mui/icons-material/Star';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import UploadIcon from '@mui/icons-material/CloudUpload';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import PaletteIcon from '@mui/icons-material/Palette';
import PrintIcon from '@mui/icons-material/Print';
import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButton,
  FloatingCircle,
  TechCircle,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  FeatureSection,
  StyledCard,
  StyledCardMedia,
  IconWrapper,
  CreativeGenerator,
  IdeaCard,
  IdeaImage,
  IdeaTitle,
  IdeaDescription,
  IdeaButton,
} from '../../components/home/Home.styles';

const creativeIdeas = [
  {
    title: 'זיכרון משפחתי',
    description: 'הדפסת תמונת משפחה על חולצה עם טקסט אישי',
    colors: ['#FF6B6B', '#4ECDC4', '#FFD93D'],
    icon: <BrushIcon />,
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=60'
  },
  {
    title: 'חתונה מיוחדת',
    description: 'הדפסת תמונות מהחתונה על כוסות זוגיות',
    colors: ['#6C63FF', '#FF8E8E', '#FFD93D'],
    icon: <PaletteIcon />,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=60'
  },
  {
    title: 'יום הולדת',
    description: 'הדפסת תמונות ילדות על כרית אישית',
    colors: ['#FF6B6B', '#45B7D1', '#FFD93D'],
    icon: <ColorLensIcon />,
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&auto=format&fit=crop&q=60'
  },
  {
    title: 'חופשה משפחתית',
    description: 'הדפסת תמונות מהטיול על תיק בד',
    colors: ['#4ECDC4', '#FF6B6B', '#FFD93D'],
    icon: <BrushIcon />,
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop&q=60'
  }
];

const CreativeInspiration = () => {
  const [currentIdea, setCurrentIdea] = React.useState(creativeIdeas[0]);
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        const newIndex = (creativeIdeas.indexOf(currentIdea) + 1) % creativeIdeas.length;
        setCurrentIdea(creativeIdeas[newIndex]);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIdea]);

  return (
    <CreativeGenerator>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <IdeaTitle variant="h3" component="h2" sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: 2,
            direction: 'rtl'
          }}>
            רעיונות יצירתיים
            <motion.div
              initial={{ opacity: 0.5 }}
              animate={{ 
                opacity: [0.5, 1, 0.5],
                filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)'],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
        }}
      >
              <LightbulbIcon sx={{ 
                fontSize: '2.5rem', 
                color: '#FF6B9B',
                filter: 'drop-shadow(0 0 8px rgba(255, 107, 155, 0.5))'
              }} />
            </motion.div>
          </IdeaTitle>
        </motion.div>
      
      <AnimatePresence mode="wait">
        {!isAnimating && (
          <IdeaCard
            key={currentIdea.title}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            colors={currentIdea.colors}
          >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
              <IdeaImage src={currentIdea.image} alt={currentIdea.title} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <IdeaTitle variant="h5">
                  {currentIdea.title}
                </IdeaTitle>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <IdeaDescription>
                {currentIdea.description}
                </IdeaDescription>
              </motion.div>
          </IdeaCard>
        )}
      </AnimatePresence>
      </Container>
    </CreativeGenerator>
  );
};

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

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

  return (
    <Box>
      <HeroSection>
        <FloatingCircle
          size={300}
          top={20}
          left={10}
          animate={{
            y: [0, 50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <FloatingCircle
          size={200}
          top={60}
          right={15}
          animate={{
            y: [0, -30, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <FloatingCircle
          size={250}
          bottom={20}
          left={20}
          animate={{
            y: [0, 40, 0],
            rotate: [180, 360, 180],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <TechCircle
          size={400}
          top={30}
          left={30}
          delay={0}
        />
        <TechCircle
          size={300}
          top={50}
          right={20}
          delay={0.5}
        />
        <TechCircle
          size={350}
          bottom={30}
          left={40}
          delay={1}
        />
        <TechCircle
          size={250}
          top={70}
          left={60}
          delay={1.5}
        />
        <TechCircle
          size={200}
          bottom={40}
          right={30}
          delay={2}
        />
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h1" component="h1" gutterBottom>
              Timeless Prints
            </Typography>
            <Typography variant="h4" component="h2" gutterBottom>
              הפכו את התמונות שלכם ליצירות אמנות.
            </Typography>
            <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large" 
                  component={Link} 
                  to="/products"
                  sx={{ 
                    py: 1.5, 
                    px: 4,
                    fontSize: '1.1rem',
                    borderRadius: '30px',
                    boxShadow: '0 4px 14px rgba(255, 107, 107, 0.4)',
                    '&:hover': {
                      boxShadow: '0 6px 20px rgba(255, 107, 107, 0.6)',
                    }
                  }}
                >
                  צפו במוצרים
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outlined" 
                  color="inherit" 
                  size="large" 
                  component={Link} 
                  to="/about"
                  sx={{ 
                    py: 1.5, 
                    px: 4,
                    fontSize: '1.1rem',
                    borderRadius: '30px',
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                    }
                  }}
                >
                  למדו עוד
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </HeroContent>
      </HeroSection>

      <FeatureSection>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              marginBottom: 6,
              background: 'linear-gradient(45deg, #6C63FF 30%, #FF6B6B 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            למה לבחור בנו?
          </Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
              <FeatureCard>
                    <CardContent sx={{ textAlign: 'center', p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                      <Box
                        className="feature-icon"
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          mb: 2,
                          transition: 'transform 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'scale(1.1) rotate(5deg)',
                          }
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, minHeight: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {feature.description}
                </Typography>
                    </CardContent>
              </FeatureCard>
                </motion.div>
            </Grid>
          ))}
        </Grid>
        </Container>
      </FeatureSection>

      <CreativeInspiration />
    </Box>
  );
};

export default Home; 