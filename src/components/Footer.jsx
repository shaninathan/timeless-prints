import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
  IconButton,
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Styled Components
const FooterContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #6C63FF 30%, #FF6B6B 90%)',
  color: 'white',
  padding: theme.spacing(6, 0),
  marginTop: 'auto',
}));

const FooterContent = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

const FooterSection = styled(Box)(({ theme }) => ({
  minWidth: 200,
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  fontSize: '1.2rem',
}));

const FooterLink = styled(MuiLink)(({ theme }) => ({
  color: 'white',
  display: 'block',
  marginBottom: theme.spacing(1),
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const SocialLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const Copyright = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(4),
  opacity: 0.8,
}));

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>אודות</FooterTitle>
          <FooterLink component={Link} to="/about">
            מי אנחנו
          </FooterLink>
          <FooterLink component={Link} to="/contact">
            צור קשר
          </FooterLink>
          <FooterLink component={Link} to="/shipping">
            משלוחים
          </FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>קטגוריות</FooterTitle>
          <FooterLink component={Link} to="/products?category=prints">
            הדפסות
          </FooterLink>
          <FooterLink component={Link} to="/products?category=posters">
            פוסטרים
          </FooterLink>
          <FooterLink component={Link} to="/products?category=canvas">
            קנבס
          </FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>עקבו אחרינו</FooterTitle>
          <SocialLinks>
            <SocialButton
              component="a"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </SocialButton>
            <SocialButton
              component="a"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </SocialButton>
            <SocialButton
              component="a"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </SocialButton>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} Timeless Prints. כל הזכויות שמורות.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 