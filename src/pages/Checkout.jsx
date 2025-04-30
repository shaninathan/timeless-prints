import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Card,
  CardContent,
  FormControlLabel,
  Checkbox,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation, useBeforeUnload } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { clearCart } from '../store/cartSlice';

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const steps = ['פרטי משלוח', 'פרטי תשלום', 'אישור הזמנה'];

const Checkout = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);
  const [activeStep, setActiveStep] = useState(0);
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState(null);
  const [formStarted, setFormStarted] = useState(false);
  
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

  useEffect(() => {
    // Set formStarted to true when user starts filling the form
    if (isDirty) {
      setFormStarted(true);
    }
  }, [isDirty]);

  // Prevent browser back/forward navigation
  useEffect(() => {
    const handlePopState = (event) => {
      if (formStarted) {
        event.preventDefault();
        setPendingNavigation(location.pathname);
        setShowExitDialog(true);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [formStarted, location.pathname]);

  // Prevent browser close/refresh
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (formStarted) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [formStarted]);

  // Intercept all navigation attempts
  useEffect(() => {
    const handleClick = (e) => {
      // Check if the clicked element is a link or button that navigates
      const target = e.target.closest('a, button');
      if (target && formStarted) {
        const href = target.getAttribute('href');
        if (href && href !== '#' && !href.startsWith('javascript:')) {
          e.preventDefault();
          setPendingNavigation(href);
          setShowExitDialog(true);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [formStarted]);

  const handleNavigationAttempt = (to) => {
    if (formStarted) {
      setPendingNavigation(to);
      setShowExitDialog(true);
    } else {
      navigate(to);
    }
  };

  const handleConfirmNavigation = () => {
    setShowExitDialog(false);
    if (pendingNavigation) {
      navigate(pendingNavigation);
      setPendingNavigation(null);
    }
  };

  const handleCancelNavigation = () => {
    setShowExitDialog(false);
    setPendingNavigation(null);
  };

  const renderShippingForm = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Controller
          name="firstName"
          control={control}
          rules={{ required: 'שם פרטי הוא שדה חובה' }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="שם פרטי"
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
          rules={{ required: 'שם משפחה הוא שדה חובה' }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="שם משפחה"
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
            required: 'אימייל הוא שדה חובה',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'כתובת אימייל לא תקינה'
            }
          }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="אימייל"
              type="email"
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
            required: 'טלפון הוא שדה חובה',
            pattern: {
              value: /^05\d{8}$/,
              message: 'מספר טלפון לא תקין (נדרש פורמט: 05XXXXXXXX)'
            }
          }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="טלפון"
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
          rules={{ required: 'כתובת היא שדה חובה' }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="כתובת"
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
          rules={{ required: 'עיר היא שדה חובה' }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="עיר"
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
            required: 'מיקוד הוא שדה חובה',
            pattern: {
              value: /^\d{7}$/,
              message: 'מיקוד חייב להכיל 7 ספרות'
            }
          }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="מיקוד"
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
            required: 'מספר כרטיס הוא שדה חובה',
            validate: validateCardNumber
          }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="מספר כרטיס"
              error={!!errors.cardNumber}
              helperText={errors.cardNumber?.message}
              inputProps={{
                maxLength: 19,
                pattern: '[0-9]*'
              }}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="cardName"
          control={control}
          rules={{ 
            required: 'שם בעל הכרטיס הוא שדה חובה',
            minLength: {
              value: 2,
              message: 'שם בעל הכרטיס חייב להכיל לפחות 2 תווים'
            }
          }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="שם בעל הכרטיס"
              error={!!errors.cardName}
              helperText={errors.cardName?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Controller
          name="expiryDate"
          control={control}
          rules={{ 
            required: 'תאריך תפוגת הוא שדה חובה',
            validate: validateExpiryDate
          }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="תאריך תפוגת"
              placeholder="MM/YY"
              error={!!errors.expiryDate}
              helperText={errors.expiryDate?.message}
              inputProps={{
                maxLength: 5
              }}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Controller
          name="cvv"
          control={control}
          rules={{ 
            required: 'CVV הוא שדה חובה',
            pattern: {
              value: /^\d{3,4}$/,
              message: 'CVV חייב להכיל 3-4 ספרות'
            }
          }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="CVV"
              error={!!errors.cvv}
              helperText={errors.cvv?.message}
              inputProps={{
                maxLength: 4,
                pattern: '[0-9]*'
              }}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="saveCard"
          control={control}
          render={({ field: { value, onChange } }) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={value}
                  onChange={(e) => onChange(e.target.checked)}
                />
              }
              label="שמור פרטי כרטיס לפעם הבאה"
            />
          )}
        />
      </Grid>
    </Grid>
  );

  const renderOrderSummary = () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        סיכום הזמנה
      </Typography>
      {items.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mb: 2,
          }}
        >
          <Typography>
            {item.name} x {item.quantity}
          </Typography>
          <Typography>₪{(item.price * item.quantity).toFixed(2)}</Typography>
        </Box>
      ))}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 2,
          pt: 2,
          borderTop: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Typography variant="h6">סה"כ</Typography>
        <Typography variant="h6" color="primary">
          ₪{total.toFixed(2)}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          align="center"
          sx={{
            fontWeight: 'bold',
            mb: 4,
            color: 'primary.main'
          }}
        >
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
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <StyledCard>
                <CardContent>
                  {activeStep === 0 && renderShippingForm()}
                  {activeStep === 1 && renderPaymentForm()}
                  {activeStep === 2 && renderOrderSummary()}
                </CardContent>
              </StyledCard>
            </Grid>

            <Grid item xs={12} md={4}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    פרטי משלוח
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {formData.firstName} {formData.lastName}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {formData.address}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {formData.city}, {formData.zipCode}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {formData.phone}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {formData.email}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
              type="button"
            >
              חזור
            </Button>
            <Button
              variant="contained"
              type="submit"
            >
              {activeStep === steps.length - 1 ? 'שלח הזמנה' : 'המשך'}
            </Button>
          </Box>
        </form>

        <Dialog
          open={showExitDialog}
          onClose={handleCancelNavigation}
          aria-labelledby="exit-dialog-title"
        >
          <DialogTitle id="exit-dialog-title">
            האם ברצונך לעזוב את דף התשלום?
          </DialogTitle>
          <DialogContent>
            <Typography>
              כל המידע שהזנת יימחק. האם אתה בטוח שברצונך לעזוב?
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancelNavigation} color="primary">
              ביטול
            </Button>
            <Button onClick={handleConfirmNavigation} color="primary" variant="contained">
              אישור
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
};

export default Checkout; 