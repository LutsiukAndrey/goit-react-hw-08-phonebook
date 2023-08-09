import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: 'dark',
  },
  reducers: {
    toggleDarkMode: state => {
      state.mode === 'light' ? (state.mode = 'dark') : (state.mode = 'light');
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
