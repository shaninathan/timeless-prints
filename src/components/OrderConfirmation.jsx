import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Paper,
  Grid,
  Divider,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  LocalShipping as LocalShippingIcon,
  Email as EmailIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Styled Components
const ConfirmationContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: 800,
  margin: '0 auto',
}));

const ConfirmationPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  marginBottom: theme.spacing(4),
}));

const SuccessIcon = styled(CheckCircleIcon)(({ theme }) => ({
  fontSize: 64,
  color: theme.palette.success.main,
  marginBottom: theme.spacing(2),
}));

const ConfirmationTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 600,
}));

const OrderNumber = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
  marginBottom: theme.spacing(4),
}));

const InfoSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const InfoTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const InfoText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const ContinueButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #6C63FF 30%, #FF6B6B 90%)',
  color: 'white',
  padding: theme.spacing(1.5, 4),
  '&:hover': {
    background: 'linear-gradient(45deg, #5A52E0 30%, #E55A5A 90%)',
  },
}));

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const orderNumber = Math.floor(Math.random() * 1000000);

  return (
    <ConfirmationContainer>
      <ConfirmationPaper>
        <SuccessIcon />
        <ConfirmationTitle variant="h4">
          הזמנתך התקבלה בהצלחה!
        </ConfirmationTitle>
        <OrderNumber variant="h6">
          מספר הזמנה: #{orderNumber}
        </OrderNumber>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <InfoSection>
              <InfoTitle variant="h6">
                <LocalShippingIcon />
                משלוח
              </InfoTitle>
              <InfoText>
                ההזמנה שלך תגיע תוך 3-5 ימי עסקים
              </InfoText>
            </InfoSection>
          </Grid>

          <Grid item xs={12} md={4}>
            <InfoSection>
              <InfoTitle variant="h6">
                <EmailIcon />
                אישור במייל
              </InfoTitle>
              <InfoText>
                שלחנו לך מייל עם פרטי ההזמנה
              </InfoText>
            </InfoSection>
          </Grid>

          <Grid item xs={12} md={4}>
            <InfoSection>
              <InfoTitle variant="h6">
                <LocalShippingIcon />
                מעקב משלוח
              </InfoTitle>
              <InfoText>
                תוכל לעקוב אחר המשלוח במייל
              </InfoText>
            </InfoSection>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <ContinueButton
          variant="contained"
          onClick={() => navigate('/products')}
        >
          המשך לקניות
        </ContinueButton>
      </ConfirmationPaper>
    </ConfirmationContainer>
  );
};

export default OrderConfirmation; 