import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  favorites: [],
  total: 0
};

const calculateTotal = (items) => {
  return items.reduce((total, item) => {
    const itemTotal = item.price * item.quantity;
    return total + Number(itemTotal.toFixed(2));
  }, 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = {
        ...action.payload,
        cartItemId: Date.now().toString()
      };
      
      // מוסיף את המוצר כפריט חדש בסל
      state.items.push(newItem);
      state.total = calculateTotal(state.items);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.cartItemId !== action.payload);
      state.total = calculateTotal(state.items);
    },
    updateCartItemQuantity: (state, action) => {
      const { cartItemId, quantity } = action.payload;
      const item = state.items.find(item => item.cartItemId === cartItemId);
      if (item) {
        item.quantity = quantity;
        state.total = calculateTotal(state.items);
      }
    },
    updateCartItemImage: (state, action) => {
      const { cartItemId, image } = action.payload;
      const item = state.items.find(item => item.cartItemId === cartItemId);
      if (item) {
        item.customImage = image;
      }
    },
    updateCartItemNotes: (state, action) => {
      const { cartItemId, notes } = action.payload;
      const item = state.items.find(item => item.cartItemId === cartItemId);
      if (item) {
        item.notes = notes;
      }
    },
    updateCartItemSize: (state, action) => {
      const { cartItemId, size } = action.payload;
      const item = state.items.find(item => item.cartItemId === cartItemId);
      if (item) {
        item.size = size;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
    addToFavorites: (state, action) => {
      const product = action.payload;
      if (!state.favorites.find(item => item.id === product.id)) {
        state.favorites.push(product);
      }
    },
    removeFromFavorites: (state, action) => {
      const productId = action.payload;
      state.favorites = state.favorites.filter(item => item.id !== productId);
    },
    toggleFavorite: (state, action) => {
      const product = action.payload;
      const index = state.favorites.findIndex(item => item.id === product.id);
      if (index === -1) {
        state.favorites.push(product);
      } else {
        state.favorites.splice(index, 1);
      }
    },
  }
});

export const { 
  addToCart, 
  removeFromCart, 
  updateCartItemQuantity, 
  updateCartItemImage, 
  updateCartItemNotes,
  updateCartItemSize,
  clearCart,
  addToFavorites,
  removeFromFavorites,
  toggleFavorite
} = cartSlice.actions;

export default cartSlice.reducer; 