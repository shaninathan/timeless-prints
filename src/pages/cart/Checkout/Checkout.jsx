import React, { useState, useEffect } from 'react';
import {
  Typography,
  Box,
  Grid,
  Stepper,
  Step,
  StepLabel,
  CardContent,
  FormControlLabel,
  Checkbox,
  useTheme,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { clearCart } from '../../../store/cartSlice';
import {
  StyledCard,
  CheckoutContainer,
  StyledTextField,
  NavigationButton,
  OrderSummaryContainer,
  ExitDialog
} from './Checkout.styles';

const steps = ['פרטי משלוח', 'פרטי תשלום', 'אישור הזמנה'];

const Checkout = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);
  const [activeStep, setActiveStep] = useState(0);
  const { control, handleSubmit, formState: { errors, isDirty }, watch } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      zipCode: '',
      cardNumber: '',
      cardName: '',
      expiryDate: '',
      cvv: '',
      saveCard: false,
    }
  });

  const formData = watch();

  const validateCardNumber = (value) => {
    // Remove spaces and dashes
    const cleanValue = value.replace(/[\s-]/g, '');
    
    // Check if it's a valid length (13-19 digits)
    if (!/^\d{13,19}$/.test(cleanValue)) {
      return 'מספר כרטיס לא תקין';
    }

    // Luhn algorithm for card number validation
    let sum = 0;
    let isEven = false;
    
    // Loop through values starting from the rightmost side
    for (let i = cleanValue.length - 1; i >= 0; i--) {
      let digit = parseInt(cleanValue.charAt(i));

      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      isEven = !isEven;
    }

    return (sum % 10) === 0 ? true : 'מספר כרטיס לא תקין';
  };

  const validateExpiryDate = (value) => {
    if (!/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(value)) {
      return 'תאריך תפוגת לא תקין (MM/YY)';
    }

    const [month, year] = value.split('/');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;

    if (parseInt(year) < currentYear || 
        (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
      return 'כרטיס האשראי פג תוקף';
    }

    return true;
  };

  const onSubmit = (data) => {
    if (activeStep === steps.length - 1) {
      // Handle order submission
      console.log('Order submitted:', { items, total, formData: data });
      dispatch(clearCart());
      navigate('/order-confirmation', { 
        state: { 
          orderDetails: {
            items,
            total,
            shippingDetails: {
              name: `${data.firstName} ${data.lastName}`,
              address: data.address,
              city: data.city,
              zipCode: data.zipCode,
              email: data.email,
              phone: data.phone
            }
          }
        }
      });
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const renderShippingForm = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Controller
          name="firstName"
          control={control}
          rules={{ required: 'שדה חובה' }}
          render={({ field }) => (
            <StyledTextField
              {...field}
              label="שם פרטי"
              fullWidth
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Controller
          name="lastName"
          control={control}
          rules={{ required: 'שדה חובה' }}
          render={({ field }) => (
            <StyledTextField
              {...field}
              label="שם משפחה"
              fullWidth
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="email"
          control={control}
          rules={{ 
            required: 'שדה חובה',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'כתובת אימייל לא תקינה'
            }
          }}
          render={({ field }) => (
            <StyledTextField
              {...field}
              label="אימייל"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="phone"
          control={control}
          rules={{ 
            required: 'שדה חובה',
            pattern: {
              value: /^[0-9]{9,10}$/,
              message: 'מספר טלפון לא תקין'
            }
          }}
          render={({ field }) => (
            <StyledTextField
              {...field}
              label="טלפון"
              fullWidth
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="address"
          control={control}
          rules={{ required: 'שדה חובה' }}
          render={({ field }) => (
            <StyledTextField
              {...field}
              label="כתובת"
              fullWidth
              error={!!errors.address}
              helperText={errors.address?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Controller
          name="city"
          control={control}
          rules={{ required: 'שדה חובה' }}
          render={({ field }) => (
            <StyledTextField
              {...field}
              label="עיר"
              fullWidth
              error={!!errors.city}
              helperText={errors.city?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Controller
          name="zipCode"
          control={control}
          rules={{ 
            required: 'שדה חובה',
            pattern: {
              value: /^[0-9]{7}$/,
              message: 'מיקוד לא תקין'
            }
          }}
          render={({ field }) => (
            <StyledTextField
              {...field}
              label="מיקוד"
              fullWidth
              error={!!errors.zipCode}
              helperText={errors.zipCode?.message}
            />
          )}
        />
      </Grid>
    </Grid>
  );

  const renderPaymentForm = () => (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Controller
          name="cardNumber"
          control={control}
          rules={{ 
            required: 'שדה חובה',
            validate: validateCardNumber
          }}
          render={({ field }) => (
            <StyledTextField
              {...field}
              label="מספר כרטיס"
              fullWidth
              error={!!errors.cardNumber}
              helperText={errors.cardNumber?.message}
              sx={{ mb: 2 }}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="cardName"
          control={control}
          rules={{ required: 'שדה חובה' }}
          render={({ field }) => (
            <StyledTextField
              {...field}
              label="שם בעל הכרטיס"
              fullWidth
              error={!!errors.cardName}
              helperText={errors.cardName?.message}
              sx={{ mb: 2 }}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={6} sx={{ pr: { sm: 1.5 } }}>
        <Controller
          name="expiryDate"
          control={control}
          rules={{ 
            required: 'שדה חובה',
            validate: validateExpiryDate
          }}
          render={({ field }) => (
            <StyledTextField
              {...field}
              label="תאריך תפוגה (MM/YY)"
              fullWidth
              error={!!errors.expiryDate}
              helperText={errors.expiryDate?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={6} sx={{ pl: { sm: 1.5 } }}>
        <Controller
          name="cvv"
          control={control}
          rules={{ 
            required: 'שדה חובה',
            pattern: {
              value: /^[0-9]{3,4}$/,
              message: 'קוד אבטחה לא תקין'
            }
          }}
          render={({ field }) => (
            <StyledTextField
              {...field}
              label="קוד אבטחה"
              fullWidth
              error={!!errors.cvv}
              helperText={errors.cvv?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sx={{ mt: 1 }}>
        <FormControlLabel
          control={
            <Controller
              name="saveCard"
              control={control}
              render={({ field }) => (
                <Checkbox {...field} />
              )}
            />
          }
          label="שמור פרטי כרטיס לתשלומים עתידיים"
        />
      </Grid>
    </Grid>
  );

  const renderOrderSummary = () => (
    <OrderSummaryContainer>
      <Typography variant="h6" gutterBottom>
        סיכום הזמנה
      </Typography>
      {items.map((item) => (
        <Box key={item.id} sx={{ mb: 2 }}>
          <Typography variant="body1">
            {item.name} - {item.size}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            כמות: {item.quantity} x ₪{item.price}
          </Typography>
        </Box>
      ))}
      <Box sx={{ mt: 2, pt: 2, borderTop: 1, borderColor: 'divider' }}>
        <Typography variant="h6">
          סה"כ לתשלום: ₪{total}
        </Typography>
      </Box>
    </OrderSummaryContainer>
  );

  return (
    <CheckoutContainer maxWidth="lg">
      <Typography variant="h4" gutterBottom align="center">
        השלמת הזמנה
      </Typography>
      
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4} sx={{ width: '100%', mx: 0 }}>
          <Grid item xs={12} md={8} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
            <StyledCard>
              <CardContent>
                {activeStep === 0 && renderShippingForm()}
                {activeStep === 1 && renderPaymentForm()}
                {activeStep === 2 && renderOrderSummary()}
              </CardContent>
            </StyledCard>
          </Grid>
          
          <Grid item xs={12} md={4} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <NavigationButton
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="outlined"
              >
                חזור
              </NavigationButton>
              <NavigationButton
                type="submit"
                variant="contained"
              >
                {activeStep === steps.length - 1 ? 'אישור הזמנה' : 'המשך'}
              </NavigationButton>
            </Box>
          </Grid>
        </Grid>
      </form>
    </CheckoutContainer>
  );
};

export default Checkout; 