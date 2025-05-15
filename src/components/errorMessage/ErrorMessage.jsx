import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import RefreshIcon from '@mui/icons-material/Refresh';

const ErrorContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '200px',
  padding: theme.spacing(4),
  textAlign: 'center',
  background: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  backdropFilter: 'blur(10px)',
}));

const ErrorIcon = styled(ErrorOutlineIcon)(({ theme }) => ({
  fontSize: '64px',
  color: theme.palette.error.main,
  marginBottom: theme.spacing(2),
}));

const ErrorText = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  marginBottom: theme.spacing(2),
}));

const RetryButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5, 4),
  borderRadius: '30px',
  background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
  color: 'white',
  '&:hover': {
    background: 'linear-gradient(45deg, #FF4D4D 30%, #3DBFB7 90%)',
  },
}));

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <ErrorContainer>
      <ErrorIcon />
      <ErrorText variant="h6">
        {message || 'אירעה שגיאה בטעינת הנתונים'}
      </ErrorText>
      {onRetry && (
        <RetryButton
          variant="contained"
          startIcon={<RefreshIcon />}
          onClick={onRetry}
        >
          נסה שוב
        </RetryButton>
      )}
    </ErrorContainer>
  );
};

export default ErrorMessage; 