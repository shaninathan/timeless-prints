import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Typography,
  Grid,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { addToCart, clearCart } from '../../store/cartSlice';
import {
  StyledCard,
  OrderConfirmationContainer,
  SuccessMessage,
  ActionButton,
  ButtonContainer
} from './OrderConfirmation.styles';

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orderDetails = location.state?.orderDetails;

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  if (!orderDetails) {
    return (
      <OrderConfirmationContainer>
        <SuccessMessage>
          <Typography variant="h5" color="error">
            לא נמצאו פרטי הזמנה
          </Typography>
          <ActionButton
            variant="contained"
            onClick={() => navigate('/')}
          >
            חזרה לדף הבית
          </ActionButton>
        </SuccessMessage>
      </OrderConfirmationContainer>
    );
  }

  const { items, total, shippingDetails } = orderDetails;

  const handleRepeatOrder = () => {
    items.forEach((item) => {
      dispatch(addToCart(item));
    });
    navigate('/cart');
  };

  return (
    <OrderConfirmationContainer>
      <SuccessMessage>
        <CheckCircleIcon color="success" sx={{ fontSize: 60 }} />
        <Typography variant="h4" gutterBottom>
          תודה על הזמנתך!
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          מספר הזמנה: {Math.random().toString(36).substr(2, 9).toUpperCase()}
        </Typography>
      </SuccessMessage>

      <StyledCard>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            פרטי ההזמנה
          </Typography>
          <List>
            {items.map((item) => (
              <ListItem key={item.id}>
                <ListItemAvatar>
                  <Avatar src={item.image} alt={item.name} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={`כמות: ${item.quantity} | מחיר: ₪${item.price * item.quantity}`}
                />
              </ListItem>
            ))}
          </List>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6" align="right">
            סה"כ: ₪{total}
          </Typography>
        </CardContent>
      </StyledCard>

      <StyledCard>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            פרטי משלוח
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                {shippingDetails.firstName} {shippingDetails.lastName}
              </Typography>
              <Typography variant="body1">{shippingDetails.address}</Typography>
              <Typography variant="body1">
                {shippingDetails.city}, {shippingDetails.zipCode}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">{shippingDetails.email}</Typography>
              <Typography variant="body1">{shippingDetails.phone}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>

      <ButtonContainer>
        <ActionButton
          variant="contained"
          onClick={handleRepeatOrder}
        >
          הזמן שוב
        </ActionButton>
        <ActionButton
          variant="outlined"
          onClick={() => navigate('/')}
        >
          חזרה לדף הבית
        </ActionButton>
      </ButtonContainer>
    </OrderConfirmationContainer>
  );
};

export default OrderConfirmation; 