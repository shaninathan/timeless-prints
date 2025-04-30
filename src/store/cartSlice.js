import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => 
        item.id === action.payload.id && 
        item.size === action.payload.size
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      state.total = state.items.reduce(
        (total, item) => total + (item.price * item.quantity),
        0
      );
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => 
        !(item.id === action.payload.id && item.size === action.payload.size)
      );
      
      state.total = state.items.reduce(
        (total, item) => total + (item.price * item.quantity),
        0
      );
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(item => 
        item.id === action.payload.id && 
        item.size === action.payload.size
      );

      if (item) {
        item.quantity = action.payload.quantity;
        state.total = state.items.reduce(
          (total, item) => total + (item.price * item.quantity),
          0
        );
      }
    },
    updateCartItemImage: (state, action) => {
      const { id, image } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.customImage = image;
      }
    },
    updateCartItemNotes: (state, action) => {
      const { id, notes } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.customNotes = notes;
      }
    },
    updateCartItemSize: (state, action) => {
      const { id, size } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.size = size;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItem, removeItem, updateQuantity, updateCartItemImage, updateCartItemNotes, updateCartItemSize, clearCart } = cartSlice.actions;

export default cartSlice.reducer; 