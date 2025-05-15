import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fontSize: 16,
  highContrast: false,
  screenReader: false,
  reducedMotion: false,
};

const accessibilitySlice = createSlice({
  name: 'accessibility',
  initialState,
  reducers: {
    updateAccessibilitySettings: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetAccessibilitySettings: (state) => {
      return initialState;
    },
  },
});

export const { updateAccessibilitySettings, resetAccessibilitySettings } = accessibilitySlice.actions;
export default accessibilitySlice.reducer; 