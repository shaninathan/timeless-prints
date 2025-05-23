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
import { AppContainer, MainContent, themeOverrides, GlobalStyle } from './styles/global.styles';

// Import components
import AccessibilitySettings from './components/accessibilitySettings/AccessibilitySettings';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ChatBot from './components/chatBot/ChatBot';

// Import pages
import Home from './pages/home/Home';
import ProductDetail from './pages/productDetail/ProductDetail';
import Cart from './pages/cart/Cart/Cart';
import Checkout from './pages/cart/Checkout/Checkout';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Products from './pages/products/Products';
import OrderConfirmation from './pages/cart/OrderConfirmation/OrderConfirmation';
import Favorites from './pages/favorites/Favorites';
import NotFound from './pages/notFound/NotFound';

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
  typography: {
    fontFamily: 'Rubik, sans-serif',
  },
  components: themeOverrides,
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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CacheProvider value={cacheRtl}>
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
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </MainContent>
              <Footer />
              <AccessibilitySettings />
              <ChatBot />
            </AppContainer>
          </Router>
        </Provider>
      </CacheProvider>
    </ThemeProvider>
  );
}

export default App;
