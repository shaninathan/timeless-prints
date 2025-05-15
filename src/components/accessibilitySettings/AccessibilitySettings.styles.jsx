import { styled } from '@mui/material/styles';
import { Drawer, IconButton, Box } from '@mui/material';

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '250px',
    padding: theme.spacing(1.5),
    background: 'linear-gradient(135deg, #FFFFFF 0%, #F7F9FC 100%)',
    borderRadius: '12px 0 0 12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  },
}));

export const ToggleButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  bottom: '80px',
  left: '20px',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  width: '40px',
  height: '40px',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  zIndex: 1000,
}));

export const SettingsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
}));

export const SettingItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0.75),
  borderRadius: '6px',
  backgroundColor: 'rgba(255,255,255,0.8)',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
})); 