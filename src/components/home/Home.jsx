import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
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
  IdeaImage
} from '../../components/home/Home.styles';
import { 
  AutoAwesome, 
  Brush, 
  Palette, 
  PhotoCamera, 
  Print, 
  LocalShipping,
  Security,
  Support,
  Favorite
} from '@mui/icons-material';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <AutoAwesome sx={{ fontSize: 40, color: '#6C63FF' }} />,
      title: 'AI-Powered Design',
      description: 'Create stunning designs with our advanced AI technology'
    },
    {
      icon: <Brush sx={{ fontSize: 40, color: '#FF6B6B' }} />,
      title: 'Custom Artwork',
      description: 'Transform your ideas into beautiful custom artwork'
    },
    {
      icon: <Palette sx={{ fontSize: 40, color: '#4ECDC4' }} />,
      title: 'Color Matching',
      description: 'Perfect color matching for your brand and style'
    },
    {
      icon: <PhotoCamera sx={{ fontSize: 40, color: '#FFD93D' }} />,
      title: 'Photo Enhancement',
      description: 'Enhance your photos with professional editing tools'
    },
    {
      icon: <Print sx={{ fontSize: 40, color: '#95E1D3' }} />,
      title: 'Premium Printing',
      description: 'High-quality printing on various materials'
    },
    {
      icon: <LocalShipping sx={{ fontSize: 40, color: '#FF8B94' }} />,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping to your doorstep'
    }
  ];

  const benefits = [
    {
      icon: <Security sx={{ fontSize: 40, color: '#6C63FF' }} />,
      title: 'Secure Payments',
      description: 'Safe and secure payment processing'
    },
    {
      icon: <Support sx={{ fontSize: 40, color: '#FF6B6B' }} />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support'
    },
    {
      icon: <Favorite sx={{ fontSize: 40, color: '#4ECDC4' }} />,
      title: 'Satisfaction Guaranteed',
      description: '100% satisfaction guarantee on all products'
    }
  ];

  return (
    <Box>
      <HeroSection>
        <FloatingCircle size={150} top={20} left={10} />
        <FloatingCircle size={100} top={60} right={15} />
        <TechCircle size={80} top={30} right={30} delay={1} />
        <TechCircle size={120} bottom={20} left={20} delay={2} />
        
        <HeroContent>
          <HeroTitle variant="h1">
            Transform Your Ideas Into Art
          </HeroTitle>
          <HeroSubtitle variant="h2">
            Create stunning prints with our AI-powered design platform
          </HeroSubtitle>
          <HeroButton
            variant="contained"
            color="primary"
            onClick={() => navigate('/create')}
            startIcon={<AutoAwesome />}
          >
            Start Creating
          </HeroButton>
        </HeroContent>
      </HeroSection>

      <FeatureSection>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Our Features
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <FeatureCard>
                  <Box sx={{ p: 3 }}>
                    <FeatureIcon>
                      {feature.icon}
                    </FeatureIcon>
                    <FeatureTitle variant="h6">
                      {feature.title}
                    </FeatureTitle>
                    <FeatureDescription variant="body2">
                      {feature.description}
                    </FeatureDescription>
                  </Box>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </FeatureSection>

      <CreativeGenerator>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Why Choose Us
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} md={4} key={index}>
                <IdeaCard
                  colors={['#6C63FF', '#FF6B6B']}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <IconWrapper>
                    {benefit.icon}
                  </IconWrapper>
                  <Typography variant="h6" align="center" gutterBottom>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" align="center" color="text.secondary">
                    {benefit.description}
                  </Typography>
                </IdeaCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </CreativeGenerator>
    </Box>
  );
};

export default Home;