import React from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  LocalShipping as ShippingIcon,
  AccessTime as TimeIcon,
  LocationOn as LocationIcon,
  Payment as PaymentIcon,
  Security as SecurityIcon,
  Help as HelpIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Styled Components
const ShippingContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(6, 0),
}));

const ShippingTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  fontWeight: 600,
}));

const ShippingPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontWeight: 600,
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(2),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  minWidth: 40,
}));

const Shipping = () => {
  const shippingMethods = [
    {
      title: 'משלוח רגיל',
      description: '3-5 ימי עסקים',
      price: '₪25',
      icon: <ShippingIcon />,
    },
    {
      title: 'משלוח מהיר',
      description: '1-2 ימי עסקים',
      price: '₪45',
      icon: <ShippingIcon />,
    },
    {
      title: 'איסוף עצמי',
      description: 'זמין מיד',
      price: 'חינם',
      icon: <LocationIcon />,
    },
  ];

  const shippingInfo = [
    {
      title: 'זמני משלוח',
      items: [
        'משלוחים מתבצעים בימים א-ה',
        'משלוחים לא מתבצעים בחגים',
        'זמני משלוח משוערים בלבד',
      ],
      icon: <TimeIcon />,
    },
    {
      title: 'אזורי משלוח',
      items: [
        'משלוח לכל הארץ',
        'משלוח חינם בהזמנה מעל ₪300',
        'איסוף עצמי מחנות תל אביב',
      ],
      icon: <LocationIcon />,
    },
    {
      title: 'תשלום ומעקב',
      items: [
        'תשלום מאובטח',
        'מעקב משלוח בזמן אמת',
        'אישור משלוח במייל',
      ],
      icon: <PaymentIcon />,
    },
  ];

  const faqItems = [
    {
      question: 'כמה זמן לוקח המשלוח?',
      answer: 'זמן המשלוח תלוי בשיטת המשלוח שבחרת. משלוח רגיל לוקח 3-5 ימי עסקים, ומשלוח מהיר לוקח 1-2 ימי עסקים.',
    },
    {
      question: 'האם אפשר לעקוב אחרי המשלוח?',
      answer: 'כן, עם קבלת אישור המשלוח תקבל קישור למעקב אחרי המשלוח בזמן אמת.',
    },
    {
      question: 'מה קורה אם המוצר הגיע פגום?',
      answer: 'אם המוצר הגיע פגום, אנא צלמי תמונה ותיצרי איתנו קשר תוך 24 שעות. נדאג להחליף את המוצר או להחזיר את הכסף.',
    },
  ];

  return (
    <ShippingContainer>
      <ShippingTitle variant="h3">משלוחים</ShippingTitle>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <ShippingPaper elevation={2}>
            <SectionTitle variant="h5">שיטות משלוח</SectionTitle>
            <List>
              {shippingMethods.map((method, index) => (
                <React.Fragment key={method.title}>
                  <StyledListItem>
                    <StyledListItemIcon>{method.icon}</StyledListItemIcon>
                    <ListItemText
                      primary={method.title}
                      secondary={method.description}
                    />
                    <Typography variant="h6" color="primary">
                      {method.price}
                    </Typography>
                  </StyledListItem>
                  {index < shippingMethods.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </ShippingPaper>

          <ShippingPaper elevation={2} sx={{ mt: 4 }}>
            <SectionTitle variant="h5">שאלות נפוצות</SectionTitle>
            <List>
              {faqItems.map((item, index) => (
                <React.Fragment key={item.question}>
                  <StyledListItem>
                    <StyledListItemIcon>
                      <HelpIcon />
                    </StyledListItemIcon>
                    <ListItemText
                      primary={item.question}
                      secondary={item.answer}
                    />
                  </StyledListItem>
                  {index < faqItems.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </ShippingPaper>
        </Grid>

        <Grid item xs={12} md={4}>
          <ShippingPaper elevation={2}>
            <SectionTitle variant="h5">מידע נוסף</SectionTitle>
            {shippingInfo.map((info) => (
              <Box key={info.title} sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <StyledListItemIcon>{info.icon}</StyledListItemIcon>
                  <Typography variant="h6">{info.title}</Typography>
                </Box>
                <List>
                  {info.items.map((item) => (
                    <ListItem key={item}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </ShippingPaper>
        </Grid>
      </Grid>
    </ShippingContainer>
  );
};

export default Shipping; 