import React, { useState } from 'react';
import { Box, IconButton, Typography, TextField, Button } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import PhotoIcon from '@mui/icons-material/Photo';
import HelpIcon from '@mui/icons-material/Help';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InfoIcon from '@mui/icons-material/Info';
import {
  ChatButton,
  ChatWindow,
  ChatHeader,
  ChatContent,
  MessageBubble,
  OptionButton,
  ChatInput
} from './ChatBot.styles';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setName('');
      setMessages([]);
      setShowOptions(false);
    }
  };

  const handleNameSubmit = () => {
    if (name.trim()) {
      setMessages([
        { text: `שלום ${name}! איך אני יכול לעזור לך היום?`, sender: 'bot' }
      ]);
      setShowOptions(true);
    }
  };

  const handleOptionClick = (option) => {
    let response = '';
    switch (option) {
      case 'products':
        response = 'אנחנו מציעים מגוון רחב של שירותי הדפסה:\n• הדפסת תמונות בגדלים שונים\n• הדפסה על קנבס\n• אלבומי תמונות\n• מסגרות מעוצבות\n\nמה מעניין אותך?';
        break;
      case 'shipping':
        response = 'אנו מציעים משלוחים מהירים לכל הארץ:\n• משלוח חינם בהזמנות מעל 200 ש"ח\n• משלוח מהיר תוך 24 שעות\n• אפשרות לאיסוף עצמי\n\nאיך תרצה לקבל את ההזמנה?';
        break;
      case 'help':
        response = 'אני כאן לעזור! תוכל לשאול אותי על:\n• איך להזמין\n• איך להעלות תמונות\n• איך לבחור גודל\n• איך לבחור חומר\n\nמה מעניין אותך?';
        break;
      case 'info':
        response = 'טיימלס פרינטס - הדפסת תמונות איכותית:\n• איכות הדפסה גבוהה\n• חומרים איכותיים\n• שירות מקצועי\n• מחירים משתלמים\n\nרוצה לשמוע עוד?';
        break;
    }
    setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages(prev => [...prev, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
      
      // תשובה אוטומטית של הבוט
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: 'תודה על פנייתך! אשמח לעזור לך. האם תרצה לשמוע על המוצרים שלנו או על אפשרויות המשלוח?', 
          sender: 'bot' 
        }]);
      }, 1000);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (!showOptions) {
        handleNameSubmit();
      } else {
        handleSendMessage();
      }
    }
  };

  return (
    <>
      <ChatButton onClick={toggleChat}>
        <ChatIcon />
      </ChatButton>

      {isOpen && (
        <ChatWindow>
          <ChatHeader>
            <Typography variant="subtitle1">צ'אט עם נציג</Typography>
            <IconButton size="small" onClick={toggleChat} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </ChatHeader>
          <ChatContent>
            {messages.map((message, index) => (
              <MessageBubble key={index} isUser={message.sender === 'user'}>
                <Typography variant="body2">{message.text}</Typography>
              </MessageBubble>
            ))}
            {showOptions && (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 1 }}>
                <OptionButton
                  startIcon={<PhotoIcon />}
                  onClick={() => handleOptionClick('products')}
                >
                  מוצרים ושירותי הדפסה
                </OptionButton>
                <OptionButton
                  startIcon={<LocalShippingIcon />}
                  onClick={() => handleOptionClick('shipping')}
                >
                  אפשרויות משלוח
                </OptionButton>
                <OptionButton
                  startIcon={<HelpIcon />}
                  onClick={() => handleOptionClick('help')}
                >
                  עזרה והדרכה
                </OptionButton>
                <OptionButton
                  startIcon={<InfoIcon />}
                  onClick={() => handleOptionClick('info')}
                >
                  מידע על החברה
                </OptionButton>
              </Box>
            )}
          </ChatContent>
          <ChatInput>
            {!showOptions ? (
              <TextField
                fullWidth
                size="small"
                placeholder="הקלד את שמך..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            ) : (
              <>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="הקלד הודעה..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSendMessage}
                  endIcon={<SendIcon />}
                >
                  שלח
                </Button>
              </>
            )}
          </ChatInput>
        </ChatWindow>
      )}
    </>
  );
};

export default ChatBot; 