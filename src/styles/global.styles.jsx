import { styled } from '@mui/material/styles';
import { createGlobalStyle } from 'styled-components';
import { Box } from '@mui/material';

// סטיילים גלובליים בסיסיים
export const GlobalStyle = createGlobalStyle`
  /* הגדרות בסיסיות */
  html, body {
    direction: rtl;
    text-align: right;
    width: 100%;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: linear-gradient(180deg, #FF8C42 0%,rgb(135, 45, 168) 23%, #B388FF 56%,rgb(102, 28, 206) 100%) !important;
    background-attachment: fixed !important;
    font-size: var(--font-size-base, 16px);
    position: relative;
    &::after {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='1.5' fill='%23ffffff' fill-opacity='0.4'/%3E%3C/svg%3E");
      background-size: 60px 60px;
      opacity: 0.6;
      pointer-events: none;
      animation: sparkle 8s linear infinite;
      z-index: 0;
    }
  }

  @keyframes sparkle {
    0% {
      background-position: 0 0;
      opacity: 0.4;
    }
    50% {
      opacity: 0.6;
    }
    100% {
      background-position: 60px 60px;
      opacity: 0.4;
    }
  }

  /* הגדרות נגישות */
  :root {
    --font-size-base: 16px;
    --high-contrast: false;
    --reduced-motion: false;
  }

  /* גודל טקסט */
  h1 { font-size: calc(var(--font-size-base) * 2.5) !important; }
  h2 { font-size: calc(var(--font-size-base) * 2) !important; }
  h3 { font-size: calc(var(--font-size-base) * 1.75) !important; }
  h4 { font-size: calc(var(--font-size-base) * 1.5) !important; }
  h5 { font-size: calc(var(--font-size-base) * 1.25) !important; }
  h6 { font-size: calc(var(--font-size-base) * 1) !important; }
  p, span, div, button, input, textarea { font-size: var(--font-size-base) !important; }

  /* ניגודיות גבוהה */
  body.high-contrast {
    background-color: #000000 !important;
    color: #ffffff !important;
  }

  body.high-contrast * {
    background-color: #000000 !important;
    color: #ffffff !important;
    border-color: #ffffff !important;
  }

  body.high-contrast a { color: #ffff00 !important; }

  body.high-contrast button {
    background-color: #ffffff !important;
    color: #000000 !important;
    border: 2px solid #ffffff !important;
  }

  /* הפחתת אנימציות */
  body.reduced-motion * {
    animation: none !important;
    transition: none !important;
  }

  /* תמיכה בקורא מסך */
  .screen-reader-only, .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* התאמות RTL */
  .MuiTypography-root,
  .MuiButton-root,
  .MuiCard-root,
  .MuiDialog-paper,
  .MuiContainer-root,
  .MuiListItem-root,
  .MuiTableCell-root,
  .MuiInputBase-root,
  .MuiSelect-root,
  .MuiMenuItem-root,
  .MuiFormControl-root,
  .MuiInputLabel-root {
    direction: rtl !important;
    text-align: right !important;
  }

  input, textarea, select {
    direction: rtl !important;
    text-align: right !important;
  }

  /* תיקוני RTL */
  ul, ol { padding-right: 20px !important; padding-left: 0 !important; }
  .ml-auto { margin-right: auto !important; margin-left: 0 !important; }
  .mr-auto { margin-left: auto !important; margin-right: 0 !important; }
  .flex-row { flex-direction: row-reverse !important; }
  .MuiGrid-item { direction: rtl !important; }
  .MuiDialogActions-root { flex-direction: row-reverse !important; }
  .MuiCardContent-root { text-align: right !important; }
  .MuiFormLabel-root { right: 0 !important; left: auto !important; }
  .MuiInputAdornment-root { margin-left: 8px !important; margin-right: 0 !important; }
  .MuiSelect-icon { right: auto !important; left: 7px !important; }
  .MuiCheckbox-root, .MuiRadio-root { margin-right: 0 !important; margin-left: 8px !important; }
  .MuiTableCell-root { text-align: right !important; }
  .MuiListItem-root { text-align: right !important; }
  .MuiTabs-root { direction: rtl !important; }
  .MuiTab-root { text-align: right !important; }
  .MuiDrawer-paper { direction: rtl !important; }
  .MuiMenu-paper { direction: rtl !important; }

  /* רקעים בסיסיים */
  .MuiBackdrop-root {
    background-color: rgba(0, 0, 0, 0.5) !important;
  }

  /* מדיה קווריז */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
  }

  @media (prefers-contrast: high) {
    .MuiButton-contained {
      background-color: #000000 !important;
      color: #ffffff !important;
    }
    .MuiTypography-root { color: #000000 !important; }
    .MuiCard-root { border: 2px solid #000000 !important; }
  }

  @media (max-width: 600px) {
    .MuiContainer-root { padding: 16px !important; }
    .MuiTypography-h1 { font-size: 2rem !important; }
    .MuiTypography-h2 { font-size: 1.75rem !important; }
    .MuiTypography-h3 { font-size: 1.5rem !important; }
    .MuiTypography-h4 { font-size: 1.25rem !important; }
    .MuiTypography-h5 { font-size: 1.1rem !important; }
    .MuiTypography-h6 { font-size: 1rem !important; }
    .MuiButton-root { padding: 8px 16px !important; }
  }
`;

// מגדיר את הרקע הבסיסי
const baseBackground = {
  position: 'relative',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #FF8C42 0%, #FF6B9B 33%, #B388FF 66%, #4A90E2 100%)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1.5\' fill=\'%23ffffff\' fill-opacity=\'0.4\'/%3E%3C/svg%3E")',
    backgroundSize: '60px 60px',
    opacity: 0.6,
    pointerEvents: 'none',
    animation: 'sparkle 8s linear infinite',
  },
  '@keyframes sparkle': {
    '0%': { backgroundPosition: '0 0', opacity: 0.4 },
    '50%': { opacity: 0.6 },
    '100%': { backgroundPosition: '60px 60px', opacity: 0.4 }
  }
};

// מיכל האפליקציה הראשי
export const AppContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%)',
    zIndex: -1,
    pointerEvents: 'none',
  },
  '& .MuiContainer-root': {
    position: 'relative',
    zIndex: 1,
  },
  '& .MuiContainer-maxWidthLg': {
    position: 'relative',
    zIndex: 1,
  },
  '& .muirtl-zjqet5-MuiContainer-root': {
    position: 'relative',
    zIndex: 1,
  }
}));

export const MainContent = styled('main')({
  position: 'relative',
  zIndex: 1,
  background: 'transparent !important'
});

// ערכי ברירת מחדל לתמה
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
        '&:hover': { borderWidth: 2 },
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
        '&:hover': { transform: 'scale(1.05)' },
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
      root: { margin: '0' },
    },
  },
}; 