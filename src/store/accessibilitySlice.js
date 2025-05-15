import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fontSize: 16,
  highContrast: false,
  screenReader: false,
  reducedMotion: false
};

const accessibilitySlice = createSlice({
  name: 'accessibility',
  initialState,
  reducers: {
    setFontSize: (state, action) => {
      state.fontSize = action.payload;
    },
    setHighContrast: (state, action) => {
      state.highContrast = action.payload;
    },
    setScreenReader: (state, action) => {
      state.screenReader = action.payload;
    },
    setReducedMotion: (state, action) => {
      state.reducedMotion = action.payload;
    }
  }
});

export const { setFontSize, setHighContrast, setScreenReader, setReducedMotion } = accessibilitySlice.actions;
export default accessibilitySlice.reducer; 