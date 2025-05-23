import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
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
      const existingItem = state.items.find(
        item => item.id === action.payload.id && item.size === action.payload.size
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.total = calculateTotal(state.items);
    },
    updateCartItem: (state, action) => {
      const { id, size } = action.payload;
      const item = state.items.find(item => item.id === id && item.size === size);
      if (item) {
        Object.assign(item, action.payload);
      }
      state.total = calculateTotal(state.items);
    },
    removeFromCart: (state, action) => {
      const { id, size } = action.payload;
      state.items = state.items.filter(item => !(item.id === id && item.size === size));
      state.total = calculateTotal(state.items);
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
  }
});

export const { 
  addToCart, 
  updateCartItem, 
  removeFromCart, 
  updateCartItemImage, 
  updateCartItemNotes,
  updateCartItemSize,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer; 