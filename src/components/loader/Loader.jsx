import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

const LoaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '200px',
  width: '100%',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
    animation: 'pulse 2s infinite',
  },
  '@keyframes pulse': {
    '0%': {
      opacity: 0.5,
      transform: 'scale(1)',
    },
    '50%': {
      opacity: 0.8,
      transform: 'scale(1.1)',
    },
    '100%': {
      opacity: 0.5,
      transform: 'scale(1)',
    },
  },
}));

const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.primary.main,
  '& .MuiCircularProgress-circle': {
    strokeLinecap: 'round',
  },
}));

const Loader = () => {
  return (
    <LoaderContainer>
      <StyledCircularProgress size={60} thickness={4} />
    </LoaderContainer>
  );
};

export default Loader; 