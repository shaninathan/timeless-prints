import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import cartReducer from './store/cartSlice';
import accessibilityReducer from './store/accessibilitySlice';
import favoritesReducer from './store/favoritesSlice';
import './styles/accessibility.css';
import './styles/global.css';
import { AppContainer, MainContent, themeOverrides } from './styles/App.styles.jsx';

// Import components
import AccessibilitySettings from './components/accessibilitySettings/AccessibilitySettings';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ChatBot from './components/chatBot/ChatBot';

// Import pages
import Home from './pages/home/Home';
import ProductDetail from './pages/productDetail/ProductDetail';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Products from './pages/products/Products';
import OrderConfirmation from './pages/orderConfirmation/OrderConfirmation';
import Profile from './pages/profile/Profile';
import Favorites from './pages/favorites/Favorites';

// Configure Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer,
    accessibility: accessibilityReducer,
    favorites: favoritesReducer
  },
  preloadedState: {
    cart: {
      items: [],
      total: 0
    },
    accessibility: {
      fontSize: 16,
      highContrast: false,
      screenReader: false,
      reducedMotion: false
    },
    favorites: {
      items: []
    }
  }
});

// Create RTL cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

// Create theme
const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#B388FF', // סגול בהיר יותר
      light: '#C39DFF',
      dark: '#9B6BFF',
    },
    secondary: {
      main: '#FF80AB', // ורוד בהיר יותר
      light: '#FFB2DD',
      dark: '#FF4D8D',
    },
    success: {
      main: '#4ECDC4',
      light: '#71D7D0',
      dark: '#3DA49D',
    },
    warning: {
      main: '#FFD93D',
      light: '#FFE064',
      dark: '#CCAD16',
    },
    info: {
      main: '#45B7D1',
      light: '#6BC5DB',
      dark: '#3692A7',
    },
    background: {
      default: '#F7F9FC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C3E50',
      secondary: '#7F8C8D',
    },
  },
  typography: {
    fontFamily: [
      'Rubik',
      'Segoe UI',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      background: 'linear-gradient(45deg, #B388FF 30%, #FF80AB 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          background: 'linear-gradient(45deg, #B388FF 30%, #FF80AB 90%)',
          color: 'white',
          '&:hover': {
            background: 'linear-gradient(45deg, #9B6BFF 30%, #FF4D8D 90%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(45deg, #FF80AB 30%, #B388FF 90%)',
          color: 'white',
          '&:hover': {
            background: 'linear-gradient(45deg, #FF4D8D 30%, #9B6BFF 90%)',
          },
        },
      },
    },
  },
});

// ScrollToTop component to handle scroll restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Get the saved scroll position from sessionStorage
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    
    // If there's a saved position and we're not at the top of the page
    if (savedScrollPosition && window.scrollY > 0) {
      // Restore the scroll position
      window.scrollTo(0, parseInt(savedScrollPosition));
      // Clear the saved position
      sessionStorage.removeItem('scrollPosition');
    } else {
      // If no saved position, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  
  return null;
};

const ProtectedCheckoutRoute = ({ children }) => {
  const location = useLocation();
  const { items } = useSelector((state) => state.cart);

  if (items.length === 0) {
    return <Navigate to="/cart" state={{ from: location }} replace />;
  }

  return children;
};

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <AppContainer>
              <ScrollToTop />
              <Navbar />
              <MainContent>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route 
                    path="/checkout" 
                    element={
                      <ProtectedCheckoutRoute>
                        <Checkout />
                      </ProtectedCheckoutRoute>
                    } 
                  />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/order-confirmation" element={<OrderConfirmation />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </MainContent>
              <Footer />
              <AccessibilitySettings />
              <ChatBot />
            </AppContainer>
          </Router>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
