import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useNavigate } from 'react-router-dom';
import {
  ContactContainer,
  ContactCard,
  ContactInfo,
  StyledTextField,
  SubmitButton
} from './Contact.styles';

const MotionBox = motion.create('div');
const MotionPaper = motion.create(Paper);

const BackToProductsButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
    color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
}));

const Contact = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // כאן תוכל להוסיף את הלוגיקה לשליחת הטופס
    console.log('Form submitted:', formData);
    setSnackbar({
      open: true,
      message: 'ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.',
      severity: 'success',
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const handleBackToProducts = () => {
    // Save current scroll position
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    // Navigate to products page
    navigate('/products');
  };

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: 'primary.main', marginLeft: 2 }} />,
      title: 'אימייל',
      content: 'info@timelessprints.co.il',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: 'primary.main', marginLeft: 2 }} />,
      title: 'טלפון',
      content: '03-1234567',
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 40, color: 'primary.main', marginLeft: 2 }} />,
      title: 'כתובת',
      content: 'רחוב הרצל 1, תל אביב',
    },
  ];

  return (
    <ContactContainer maxWidth="lg">
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
          יצירת קשר
        </Typography>
      </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
          <ContactCard>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, marginBottom: 3 }}>
              פרטי התקשרות
            </Typography>
            {contactInfo.map((info, index) => (
              <ContactInfo
                key={index}
              >
                {info.icon}
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {info.title}
              </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {info.content}
              </Typography>
                </Box>
              </ContactInfo>
            ))}
          </ContactCard>
        </Grid>

        <Grid item xs={12} md={6}>
          <ContactCard>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, marginBottom: 3 }}>
              שלח לנו הודעה
            </Typography>
            <form onSubmit={handleSubmit}>
                  <StyledTextField
                      fullWidth
                      label="שם מלא"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                margin="normal"
                    required
                  />
              
                  <StyledTextField
                      fullWidth
                      label="אימייל"
                    name="email"
                      type="email"
                    value={formData.email}
                    onChange={handleChange}
                margin="normal"
                    required
                  />
              
                  <StyledTextField
                      fullWidth
                      label="הודעה"
                    name="message"
                      multiline
                      rows={4}
                    value={formData.message}
                    onChange={handleChange}
                margin="normal"
                    required
                  />
              
              <SubmitButton
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  שלח הודעה
              </SubmitButton>
            </form>
          </ContactCard>
          </Grid>
        </Grid>

        <Snackbar
        open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
          </Alert>
        </Snackbar>
    </ContactContainer>
  );
};

export default Contact; 