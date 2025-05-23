import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import favoritesReducer from './favoritesSlice';
import accessibilityReducer from './accessibilitySlice';
 
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
    accessibility: accessibilityReducer
  },
}); 