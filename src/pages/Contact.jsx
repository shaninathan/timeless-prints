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

const ContactContainer = styled(Container)(({ theme }) => ({
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

const ContactCard = styled(motion(Paper))(({ theme }) => ({
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

const ContactInfo = styled(motion(Box))(({ theme }) => ({
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

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(108, 99, 255, 0.3)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(108, 99, 255, 0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

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
          <ContactCard
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, marginBottom: 3 }}>
              פרטי התקשרות
            </Typography>
            {contactInfo.map((info, index) => (
              <ContactInfo
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {info.icon}
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {info.title}
              </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {info.content}
              </Typography>
                </Box>
              </ContactInfo>
            ))}
          </ContactCard>
        </Grid>

        <Grid item xs={12} md={6}>
          <ContactCard
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, marginBottom: 3 }}>
              שלחו לנו הודעה
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <StyledTextField
                      fullWidth
                      label="שם מלא"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                      fullWidth
                      label="אימייל"
                    name="email"
                      type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                      fullWidth
                    label="נושא"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                      fullWidth
                      label="הודעה"
                    name="message"
                      multiline
                      rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                      endIcon={<SendIcon />}
                      sx={{
                        background: 'linear-gradient(45deg, #6C63FF 30%, #FF6B6B 90%)',
                        color: 'white',
                        padding: '12px',
                        borderRadius: '30px',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #8B85FF 30%, #FF8E8E 90%)',
                        },
                      }}
                >
                  שלח הודעה
                </Button>
                  </motion.div>
          </Grid>
              </Grid>
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