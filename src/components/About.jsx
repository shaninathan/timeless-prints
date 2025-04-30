import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Container,
} from '@mui/material';
import {
  Brush as BrushIcon,
  LocalShipping as LocalShippingIcon,
  Support as SupportIcon,
  Security as SecurityIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Styled Components
const AboutContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(6, 0),
}));

const HeroSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(8),
  padding: theme.spacing(4),
  background: 'linear-gradient(45deg, #6C63FF 30%, #FF6B6B 90%)',
  color: 'white',
  borderRadius: theme.shape.borderRadius,
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  opacity: 0.9,
  maxWidth: 600,
  margin: '0 auto',
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  height: '100%',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const FeatureIcon = styled(Box)(({ theme }) => ({
  fontSize: 48,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(2),
}));

const FeatureDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const StorySection = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  textAlign: 'center',
}));

const StoryTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(4),
}));

const StoryText = styled(Typography)(({ theme }) => ({
  maxWidth: 800,
  margin: '0 auto',
  color: theme.palette.text.secondary,
  lineHeight: 1.8,
}));

const About = () => {
  const features = [
    {
      icon: <BrushIcon />,
      title: 'איכות מעולה',
      description: 'הדפסות באיכות גבוהה על חומרים איכותיים',
    },
    {
      icon: <LocalShippingIcon />,
      title: 'משלוח מהיר',
      description: 'משלוח מהיר לכל מקום בארץ תוך 3-5 ימי עסקים',
    },
    {
      icon: <SupportIcon />,
      title: 'תמיכה 24/7',
      description: 'צוות התמיכה שלנו זמין לעזור בכל שאלה',
    },
    {
      icon: <SecurityIcon />,
      title: 'אבטחה מתקדמת',
      description: 'תשלום מאובטח עם הצפנה מתקדמת',
    },
  ];

  return (
    <AboutContainer>
      <HeroSection>
        <HeroTitle variant="h3">
          ברוכים הבאים ל-Timeless Prints
        </HeroTitle>
        <HeroSubtitle variant="h6">
          המקום שלך להדפסות איכותיות, פוסטרים מעוצבים וקנבסים מרשימים
        </HeroSubtitle>
      </HeroSection>

      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <FeatureCard elevation={2}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle variant="h6">
                {feature.title}
              </FeatureTitle>
              <FeatureDescription>
                {feature.description}
              </FeatureDescription>
            </FeatureCard>
          </Grid>
        ))}
      </Grid>

      <StorySection>
        <StoryTitle variant="h4">
          הסיפור שלנו
        </StoryTitle>
        <StoryText variant="body1" paragraph>
          Timeless Prints נוסדה מתוך אהבה לאמנות ועיצוב. אנחנו מאמינים שכל בית ראוי להיות מעוצב עם יצירות אמנות איכותיות שמשקפות את האישיות והסגנון של בעליו.
        </StoryText>
        <StoryText variant="body1" paragraph>
          הצוות שלנו מורכב מאמנים, מעצבים ומומחי הדפסה שמחויבים לספק את התוצאות הטובות ביותר. אנחנו משתמשים בטכנולוגיה המתקדמת ביותר ובחומרים איכותיים כדי להבטיח שכל הדפסה תהיה מושלמת.
        </StoryText>
        <StoryText variant="body1">
          המטרה שלנו היא להפוך את האמנות לנגישה לכולם, ולאפשר לכל אחד ליצור את החלל המושלם שלו עם יצירות אמנות איכותיות במחירים נוחים.
        </StoryText>
      </StorySection>
    </AboutContainer>
  );
};

export default About; 