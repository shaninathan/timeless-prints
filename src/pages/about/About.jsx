import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import StarIcon from '@mui/icons-material/Star';
import {
  AboutContainer,
  AboutCard,
  FeatureBox,
  TitleBox
} from './About.styles';

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
      <TitleBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" align="center" gutterBottom>
          אודותינו
        </Typography>
      </TitleBox>

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