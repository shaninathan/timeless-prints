import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Divider, TextField, Button, Snackbar, Alert } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import SupportIcon from '@mui/icons-material/Support';
import { FooterContainer, SocialIcon, ContactItem, StyledLink, NewsletterForm, FeatureBox } from './Footer.styles';

const Footer = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [showSuccess, setShowSuccess] = React.useState(false);

  const onSubmit = (data) => {
    console.log('Newsletter subscription:', data);
    reset();
    setShowSuccess(true);
  };

  const features = [
    {
      icon: <LocalShippingIcon sx={{ fontSize: 40, color: '#9B6BFF' }} />,
      title: 'משלוח מהיר',
      description: 'משלוחים לכל הארץ תוך 2-3 ימי עסקים'
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#FF6B9B' }} />,
      title: 'תשלום מאובטח',
      description: 'אבטחת מידע מתקדמת לכל התשלומים'
    },
    {
      icon: <SupportIcon sx={{ fontSize: 40, color: '#4ECDC4' }} />,
      title: 'תמיכה 24/7',
      description: 'צוות התמיכה שלנו זמין בכל שעה'
    }
  ];

  return (
    <FooterContainer>
      <Box sx={{ 
        maxWidth: '100%', 
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        mx: 'auto'
      }}>
        <Grid container spacing={3}>
          {/* אודות */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary" gutterBottom>
              אודות
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Timeless prints - חנות הדפסות איכותית המציעה מגוון רחב של מוצרים מותאמים אישית.
            </Typography>
            <StyledLink component={RouterLink} to="/about">
              קרא עוד
            </StyledLink>
          </Grid>

          {/* יתרונות */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary" gutterBottom>
              למה לבחור בנו?
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {features.map((feature, index) => (
                <FeatureBox key={index}>
                  {feature.icon}
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'primary.main' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Box>
                </FeatureBox>
              ))}
            </Box>
          </Grid>

          {/* צור קשר */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary" gutterBottom>
              צור קשר
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <ContactItem>
                <PhoneIcon sx={{ mr: 1 }} />
                <Typography variant="body2">03-1234567</Typography>
              </ContactItem>
              <ContactItem>
                <WhatsAppIcon sx={{ mr: 1 }} />
                <Typography variant="body2">050-1234567</Typography>
              </ContactItem>
              <ContactItem>
                <EmailIcon sx={{ mr: 1 }} />
                <Typography variant="body2">info@timelessprints.co.il</Typography>
              </ContactItem>
              <ContactItem>
                <LocationOnIcon sx={{ mr: 1 }} />
                <Typography variant="body2">רחוב הרצל 1, תל אביב</Typography>
              </ContactItem>
            </Box>
          </Grid>

          {/* הרשמה לעדכונים */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary" gutterBottom>
              הרשמה לעדכונים
            </Typography>
            <NewsletterForm component="form" onSubmit={handleSubmit(onSubmit)}>
              <TextField
                size="small"
                placeholder="הכנס את כתובת המייל שלך"
                {...register('email', {
                  required: 'שדה חובה',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'כתובת מייל לא תקינה'
                  }
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  borderRadius: '20px',
                  textTransform: 'none',
                  background: 'linear-gradient(45deg, #9B6BFF 30%, #FF6B9B 90%)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #8B5BEF 30%, #FF5B8B 90%)',
                  }
                }}
              >
                הרשמה
              </Button>
            </NewsletterForm>
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" color="primary" gutterBottom>
                עקבו אחרינו
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <SocialIcon component={RouterLink} to="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FacebookIcon />
                </SocialIcon>
                <SocialIcon component={RouterLink} to="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon />
                </SocialIcon>
                <SocialIcon component={RouterLink} to="https://wa.me/972501234567" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon />
                </SocialIcon>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* זכויות יוצרים */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} כל הזכויות שמורות Timeless prints.
          </Typography>
        </Box>
      </Box>

      <Snackbar 
        open={showSuccess} 
        autoHideDuration={3000} 
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setShowSuccess(false)} severity="success" sx={{ width: '100%' }}>
          תודה שנרשמת! תקבל עדכונים בקרוב
        </Alert>
      </Snackbar>
    </FooterContainer>
  );
};

export default Footer; 