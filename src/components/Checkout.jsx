import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled Components
const CheckoutContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: 1200,
  margin: '0 auto',
}));

const CheckoutTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontWeight: 600,
  textAlign: 'center',
}));

const CheckoutPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

const FormSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 600,
}));

const PaymentMethod = styled(FormControlLabel)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  width: '100%',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const OrderSummary = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

const SummaryRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(1),
}));

const TotalRow = styled(SummaryRow)(({ theme }) => ({
  marginTop: theme.spacing(2),
  paddingTop: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
  fontWeight: 600,
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #6C63FF 30%, #FF6B6B 90%)',
  color: 'white',
  padding: theme.spacing(1.5, 4),
  marginTop: theme.spacing(3),
  '&:hover': {
    background: 'linear-gradient(45deg, #5A52E0 30%, #E55A5A 90%)',
  },
}));

const steps = ['פרטי משלוח', 'אמצעי תשלום', 'אישור הזמנה'];

const Checkout = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingDetails, setShippingDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('credit');

  const handleShippingDetailsChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateShipping = () => {
    return calculateSubtotal() > 200 ? 0 : 30;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  const handleSubmit = () => {
    // כאן יהיה הלוגיקה של שליחת ההזמנה לשרת
    console.log('הזמנה נשלחה:', {
      shippingDetails,
      paymentMethod,
      items: cartItems,
      total: calculateTotal(),
    });
    navigate('/order-confirmation');
  };

  const renderShippingForm = () => (
    <CheckoutPaper>
      <FormSection>
        <SectionTitle variant="h6">פרטי משלוח</SectionTitle>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="שם פרטי"
              name="firstName"
              value={shippingDetails.firstName}
              onChange={handleShippingDetailsChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="שם משפחה"
              name="lastName"
              value={shippingDetails.lastName}
              onChange={handleShippingDetailsChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="אימייל"
              name="email"
              type="email"
              value={shippingDetails.email}
              onChange={handleShippingDetailsChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="טלפון"
              name="phone"
              value={shippingDetails.phone}
              onChange={handleShippingDetailsChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="כתובת"
              name="address"
              value={shippingDetails.address}
              onChange={handleShippingDetailsChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="עיר"
              name="city"
              value={shippingDetails.city}
              onChange={handleShippingDetailsChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="מיקוד"
              name="zipCode"
              value={shippingDetails.zipCode}
              onChange={handleShippingDetailsChange}
              required
            />
          </Grid>
        </Grid>
      </FormSection>
    </CheckoutPaper>
  );

  const renderPaymentForm = () => (
    <CheckoutPaper>
      <FormSection>
        <SectionTitle variant="h6">אמצעי תשלום</SectionTitle>
        <FormControl component="fieldset">
          <RadioGroup
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
          >
            <PaymentMethod
              value="credit"
              control={<Radio />}
              label="כרטיס אשראי"
            />
            <PaymentMethod
              value="paypal"
              control={<Radio />}
              label="PayPal"
            />
            <PaymentMethod
              value="bit"
              control={<Radio />}
              label="ביט"
            />
          </RadioGroup>
        </FormControl>
      </FormSection>
    </CheckoutPaper>
  );

  const renderOrderSummary = () => (
    <CheckoutPaper>
      <SectionTitle variant="h6">סיכום הזמנה</SectionTitle>
      {cartItems.map((item) => (
        <SummaryRow key={item.id}>
          <Typography>
            {item.title} x {item.quantity}
          </Typography>
          <Typography>₪{item.price * item.quantity}</Typography>
        </SummaryRow>
      ))}
      <Divider sx={{ my: 2 }} />
      <SummaryRow>
        <Typography>סה"כ מוצרים</Typography>
        <Typography>₪{calculateSubtotal()}</Typography>
      </SummaryRow>
      <SummaryRow>
        <Typography>משלוח</Typography>
        <Typography>
          {calculateShipping() === 0 ? 'חינם' : `₪${calculateShipping()}`}
        </Typography>
      </SummaryRow>
      <TotalRow>
        <Typography variant="h6">סה"כ לתשלום</Typography>
        <Typography variant="h6" color="primary">
          ₪{calculateTotal()}
        </Typography>
      </TotalRow>
    </CheckoutPaper>
  );

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return renderShippingForm();
      case 1:
        return renderPaymentForm();
      case 2:
        return renderOrderSummary();
      default:
        return null;
    }
  };

  return (
    <CheckoutContainer>
      <CheckoutTitle variant="h4">השלמת הזמנה</CheckoutTitle>

      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 4 }}>
        {renderStepContent(activeStep)}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            חזור
          </Button>
          {activeStep === steps.length - 1 ? (
            <SubmitButton
              variant="contained"
              onClick={handleSubmit}
            >
              שלח הזמנה
            </SubmitButton>
          ) : (
            <Button
              variant="contained"
              onClick={handleNext}
            >
              המשך
            </Button>
          )}
        </Box>
      </Box>
    </CheckoutContainer>
  );
};

export default Checkout; 