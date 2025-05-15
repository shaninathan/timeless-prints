import { styled } from '@mui/material/styles';
import { IconButton, Paper, Box, Button } from '@mui/material';

export const ChatButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  zIndex: 1000,
}));

export const ChatWindow = styled(Paper)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(10),
  right: theme.spacing(2),
  width: '280px',
  height: '400px',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 1000,
  boxShadow: theme.shadows[10],
}));

export const ChatHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5),
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const ChatContent = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

export const MessageBubble = styled(Box)(({ theme, isUser }) => ({
  padding: theme.spacing(1.5),
  borderRadius: theme.spacing(2),
  backgroundColor: isUser ? theme.palette.primary.main : theme.palette.grey[100],
  color: isUser ? 'white' : theme.palette.text.primary,
  maxWidth: '80%',
  alignSelf: isUser ? 'flex-end' : 'flex-start',
  marginBottom: theme.spacing(1),
}));

export const OptionButton = styled(Button)(({ theme }) => ({
  justifyContent: 'flex-start',
  padding: theme.spacing(1),
  textAlign: 'right',
  gap: theme.spacing(1),
  fontSize: '0.9rem',
  '&:hover': {
    backgroundColor: theme.palette.grey[100],
  },
}));

export const ChatInput = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5),
  borderTop: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  gap: theme.spacing(1),
})); 