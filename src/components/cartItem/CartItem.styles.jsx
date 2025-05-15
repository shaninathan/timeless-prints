import { styled } from '@mui/material/styles';
import { Card, Button, TextField } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(2),
  borderRadius: theme.spacing(1),
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  position: 'relative',
  overflow: 'visible',
  width: '100%',
  maxWidth: '100%',
  padding: theme.spacing(1),
}));

export const ProductImage = styled('img')({
  width: 120,
  height: 120,
  objectFit: 'cover',
  borderRadius: '4px 0 0 4px',
  marginLeft: '8px',
});

export const ActionButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  padding: '4px 12px',
  borderRadius: '20px',
  margin: '4px',
  '&:hover': {
    backgroundColor: 'rgba(108, 99, 255, 0.08)',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '1.2rem',
    marginLeft: '4px',
  },
}));

export const NotesTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(1),
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    '&.Mui-focused': {
      backgroundColor: 'white',
    },
  },
})); 