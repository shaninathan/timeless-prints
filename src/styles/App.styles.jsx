import { styled } from '@mui/material/styles';

export const AppContainer = styled('div')({
  minHeight: '100vh',
  background: 'linear-gradient(45deg,rgb(130, 102, 189) 0%,rgb(141, 100, 235) 50%, #FF8E8E 100%)',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)',
    pointerEvents: 'none',
  }
});

export const MainContent = styled('main')({
  position: 'relative',
  zIndex: 1
});

export const themeOverrides = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 30,
        padding: '10px 24px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
        },
      },
      contained: {
        background: 'linear-gradient(45deg, #6C63FF 30%, #FF6B6B 90%)',
        color: 'white',
        '&:hover': {
          background: 'linear-gradient(45deg, #8B85FF 30%, #FF8E8E 90%)',
        },
      },
      outlined: {
        borderWidth: 2,
        '&:hover': {
          borderWidth: 2,
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 16,
        boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        transition: 'all 0.3s ease-in-out',
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F7F9FC 100%)',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
        },
      },
    },
  },
  MuiCardMedia: {
    styleOverrides: {
      root: {
        transition: 'transform 0.5s ease',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        background: 'linear-gradient(45deg, #6C63FF 0%, #4ECDC4 25%, #FF6B6B 50%, #FF8E8E 75%, #FF6B6B 100%)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 16,
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F7F9FC 100%)',
      },
    },
  },
  MuiGrid: {
    styleOverrides: {
      root: {
        margin: '0',
      },
    },
  },
}; 