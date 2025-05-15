import React from 'react';
import {
  Typography,
  Box,
  Grid,
  Divider,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  ProfileContainer,
  ProfileCard,
  ProfileAvatar,
  ProfileInfo,
  EditProfileButton
} from './Profile.styles';

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
    <ProfileContainer maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <ProfileCard>
              <ProfileInfo>
                <ProfileAvatar>
                  <PersonIcon sx={{ fontSize: 60 }} />
                </ProfileAvatar>
                <Typography variant="h5" gutterBottom>
                  {user.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {user.email}
                </Typography>
              </ProfileInfo>
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
              <EditProfileButton
                variant="outlined"
                startIcon={<SettingsIcon />}
                fullWidth
              >
                ערוך פרופיל
              </EditProfileButton>
            </ProfileCard>
          </Grid>

          <Grid item xs={12} md={8}>
            <ProfileCard>
              <Typography variant="h6" gutterBottom>
                הזמנות אחרונות
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body1" color="text.secondary">
                  אין הזמנות להצגה
                </Typography>
              </Box>
            </ProfileCard>

            <ProfileCard>
              <Typography variant="h6" gutterBottom>
                משלוחים פעילים
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body1" color="text.secondary">
                  אין משלוחים פעילים
                </Typography>
              </Box>
            </ProfileCard>
          </Grid>
        </Grid>
      </Box>
    </ProfileContainer>
  );
};

export default Profile; 