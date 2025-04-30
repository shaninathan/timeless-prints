import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Container,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Styled Components
const ContactContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(6, 0),
}));

const ContactTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  fontWeight: 600,
}));

const ContactPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
}));

const ContactForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));

const ContactIcon = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
}));

const ContactText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #6C63FF 30%, #FF6B6B 90%)',
  color: 'white',
  padding: theme.spacing(1.5, 4),
  '&:hover': {
    background: 'linear-gradient(45deg, #5A52E0 30%, #E55A5A 90%)',
  },
}));

const Contact = () => {
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
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // כאן יהיה הלוגיקה של שליחת הטופס לשרת
    console.log('טופס נשלח:', formData);
    setSnackbar({
      open: true,
      message: 'ההודעה נשלחה בהצלחה!',
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

  return (
    <ContactContainer>
      <ContactTitle variant="h3">צור קשר</ContactTitle>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <ContactPaper elevation={2}>
            <Typography variant="h5" gutterBottom>
              שלח לנו הודעה
            </Typography>
            <ContactForm onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="שם מלא"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                label="אימייל"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                label="נושא"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                label="הודעה"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <SubmitButton
                type="submit"
                variant="contained"
                fullWidth
              >
                שלח הודעה
              </SubmitButton>
            </ContactForm>
          </ContactPaper>
        </Grid>

        <Grid item xs={12} md={6}>
          <ContactPaper elevation={2}>
            <Typography variant="h5" gutterBottom>
              פרטי התקשרות
            </Typography>
            <ContactInfo>
              <ContactIcon>
                <EmailIcon />
              </ContactIcon>
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  אימייל
                </Typography>
                <ContactText>info@timelessprints.com</ContactText>
              </Box>
            </ContactInfo>
            <ContactInfo>
              <ContactIcon>
                <PhoneIcon />
              </ContactIcon>
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  טלפון
                </Typography>
                <ContactText>03-1234567</ContactText>
              </Box>
            </ContactInfo>
            <ContactInfo>
              <ContactIcon>
                <LocationIcon />
              </ContactIcon>
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  כתובת
                </Typography>
                <ContactText>
                  רחוב הרצל 1, תל אביב
                </ContactText>
              </Box>
            </ContactInfo>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                שעות פעילות
              </Typography>
              <ContactText>ראשון - חמישי: 9:00 - 18:00</ContactText>
              <ContactText>שישי: 9:00 - 14:00</ContactText>
              <ContactText>שבת: סגור</ContactText>
            </Box>
          </ContactPaper>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </ContactContainer>
  );
};

export default Contact; 