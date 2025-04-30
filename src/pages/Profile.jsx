import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Avatar,
  Button,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SettingsIcon from '@mui/icons-material/Settings';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

const Profile = () => {
  // This would typically come from your auth state/context
  const user = {
    name: 'ישראל ישראלי',
    email: 'israel@example.com',
    phone: '0501234567',
    address: 'רחוב הרצל 1',
    city: 'תל אביב',
    zipCode: '1234567',
  };

  return (
    <Container>
      <Box sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <StyledPaper>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                <Avatar
                  sx={{
                    width: 100,
                    height: 100,
                    bgcolor: 'primary.main',
                    mb: 2,
                  }}
                >
                  <PersonIcon sx={{ fontSize: 60 }} />
                </Avatar>
                <Typography variant="h5" gutterBottom>
                  {user.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {user.email}
                </Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ mt: 2 }}>
                <Typography variant="body1" paragraph>
                  <strong>טלפון:</strong> {user.phone}
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>כתובת:</strong> {user.address}
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>עיר:</strong> {user.city}
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>מיקוד:</strong> {user.zipCode}
                </Typography>
              </Box>
              <Button
                variant="outlined"
                startIcon={<SettingsIcon />}
                fullWidth
                sx={{ mt: 2 }}
              >
                ערוך פרופיל
              </Button>
            </StyledPaper>
          </Grid>

          <Grid item xs={12} md={8}>
            <StyledPaper>
              <Typography variant="h6" gutterBottom>
                הזמנות אחרונות
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body1" color="text.secondary">
                  אין הזמנות להצגה
                </Typography>
              </Box>
            </StyledPaper>

            <StyledPaper>
              <Typography variant="h6" gutterBottom>
                משלוחים פעילים
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body1" color="text.secondary">
                  אין משלוחים פעילים
                </Typography>
              </Box>
            </StyledPaper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Profile; 