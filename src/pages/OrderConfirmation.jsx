import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { addToCart } from '../store/cartSlice';

const StyledCard = styled(Card)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orderDetails = location.state?.orderDetails;

  if (!orderDetails) {
    return (
      <Container>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h5" color="error">
            לא נמצאו פרטי הזמנה
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/')}
            sx={{ mt: 2 }}
          >
            חזרה לדף הבית
          </Button>
        </Box>
      </Container>
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
    <Container>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <CheckCircleIcon color="success" sx={{ fontSize: 60 }} />
        <Typography variant="h4" gutterBottom>
          תודה על הזמנתך!
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          מספר הזמנה: {Math.random().toString(36).substr(2, 9).toUpperCase()}
        </Typography>
      </Box>

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

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleRepeatOrder}
        >
          הזמן שוב
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate('/')}
        >
          חזרה לדף הבית
        </Button>
      </Box>
    </Container>
  );
};

export default OrderConfirmation; 