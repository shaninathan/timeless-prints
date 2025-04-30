import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import StarIcon from '@mui/icons-material/Star';

const AboutContainer = styled(Container)(({ theme }) => ({
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

const AboutCard = styled(motion(Paper))(({ theme }) => ({
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

const FeatureBox = styled(motion(Box))(({ theme }) => ({
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

const About = () => {
  const features = [
    {
      icon: <LocalShippingIcon sx={{ fontSize: 40, color: 'primary.main', marginLeft: 2 }} />,
      title: 'משלוח מהיר',
      description: 'משלוח מהיר לכל הארץ תוך 2-3 ימי עסקים',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: 'primary.main', marginLeft: 2 }} />,
      title: 'איכות מובטחת',
      description: 'הדפסות באיכות גבוהה עם אחריות מלאה',
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 40, color: 'primary.main', marginLeft: 2 }} />,
      title: 'שירות מעולה',
      description: 'צוות מקצועי לשירותך 24/7',
    },
    {
      icon: <StarIcon sx={{ fontSize: 40, color: 'primary.main', marginLeft: 2 }} />,
      title: 'מוצרים ייחודיים',
      description: 'מגוון רחב של מוצרים מעוצבים',
    },
  ];

  return (
    <AboutContainer maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            marginBottom: 4,
          }}
        >
          אודותינו
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <AboutCard
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, marginBottom: 3 }}>
              החזון שלנו
            </Typography>
            <Typography variant="body1" paragraph>
              אנחנו מאמינים שכל תמונה מספרת סיפור, וכל סיפור ראוי להיות מוצג בצורה ייחודית.
              המטרה שלנו היא להפוך את הזיכרונות שלכם לחוויה מוחשית ואיכותית.
            </Typography>
            <Typography variant="body1">
              עם טכנולוגיה מתקדמת וחומרים איכותיים, אנחנו מציעים מגוון רחב של מוצרים מעוצבים
              שיעזרו לכם לשמר ולהציג את התמונות האהובות עליכם בצורה ייחודית.
            </Typography>
          </AboutCard>
        </Grid>

        <Grid item xs={12} md={6}>
          <AboutCard
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, marginBottom: 3 }}>
              למה אנחנו?
            </Typography>
            {features.map((feature, index) => (
              <FeatureBox
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {feature.icon}
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Box>
              </FeatureBox>
            ))}
          </AboutCard>
        </Grid>
      </Grid>
    </AboutContainer>
  );
};

export default About; 